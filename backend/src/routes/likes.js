const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Like = require('../models/Like');
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const Director = require('../models/Director');
const { authenticateToken } = require('../middleware/auth');
const getModel = (type) => {
  const models = {Movie, Actor, Director};
  return models[type];
};

// All like routes require authentication
router.use(authenticateToken);

/**
 * GET /api/likes
 * Get all items liked by the current user
 */
router.get('/', async (req, res) => {
  try {
    const userLikes = await Like.find({ userId: req.user.userId }).populate({
      path: 'targetId',
      model: function(doc) {
        return doc.targetType;
      }
    });

    const formattedLikes = userLikes
      .filter(like => like.targetId) // Filter out likes where the target has been deleted
      .map(like => ({
        id: like._id,
        targetType: like.targetType,
        targetId: like.targetId._id,
        target: like.targetId // The populated movie/actor/director object
      }));

    res.status(200).json(formattedLikes);
  } catch (error) {
    console.error('Backend: Get all likes error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * POST /api/likes
 * Like a movie, actor, or director
 */
router.post('/', async (req, res) => {
  console.log('Backend: POST /api/likes received');
  console.log('Request Body:', req.body);
  try {
    const { targetType, targetId } = req.body;

    if (!['Movie', 'Actor', 'Director'].includes(targetType)) {
      console.log('Backend: Invalid targetType received:', targetType);
      return res.status(400).json({ error: 'Invalid targetType' });
    }
    if (!targetId) {
      console.log('Backend: targetId is missing');
      return res.status(400).json({ error: 'targetId is required' });
    }

    // let Model;
    // switch (targetType) {
    //   case 'Movie': Model = Movie; break;
    //   case 'Actor': Model = Actor; break;
    //   case 'Director': Model = Director; break;
    // }

    const Model = getModel(targetType);

    let target;
    if (mongoose.Types.ObjectId.isValid(targetId)) {
      target = await Model.findById(targetId);
    } else {
      const tmdbId = Number(targetId);
      if (!isNaN(tmdbId)) {
        target = await Model.findOne({ tmdbId });
      }
    }

    if (!target) {
      console.log('Backend: Target not found for targetId:', targetId);
      return res.status(404).json({ error: 'Target not found' });
    }

    const canonicalId = target._id;
    console.log('Backend: Canonical ID found:', canonicalId);

    // Check if the like already exists
    const existingLike = await Like.findOne({
      userId: req.user.userId,
      targetType,
      targetId: canonicalId,
    });

    if (existingLike) {
      console.log('Backend: Already liked by user (found existing document)');
      return res.status(400).json({ error: 'Already liked' });
    }

    // Create the new like
    const like = await Like.create({
      userId: req.user.userId,
      targetType,
      targetId: canonicalId,
    });

    console.log('Backend: Like created:', like);

    await Model.findByIdAndUpdate(canonicalId, { $inc: { likeCount: 1 } });
    console.log('Backend: Like count incremented for target:', canonicalId);

    res.status(201).json({
      userId: req.user.userId,
      targetType,
      targetId: canonicalId,
    });
  } catch (error) {
    console.error('Backend: Create like error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * DELETE /api/likes/:id
 * Unlike a movie, actor, or director
 */

/**
 * DELETE /api/likes (alternative - by targetType and targetId)
 * Unlike using query parameters
 */
router.delete('/', async (req, res) => {
  console.log('Backend: DELETE /api/likes (query) received');
  console.log('Request Query:', req.query);
  try {
    const { targetType, targetId } = req.query;

    if (!['Movie', 'Actor', 'Director'].includes(targetType)) {
      console.log('Backend: Invalid targetType received for DELETE (query):', targetType);
      return res.status(400).json({ error: 'Invalid targetType' });
    }
    if (!targetId) {
      console.log('Backend: targetId is missing for DELETE (query)');
      return res.status(400).json({ error: 'targetId is required' });
    }
    
    // The targetId from the frontend is the canonical MongoDB _id of the movie/actor/director.
    // We can use it directly.
    if (!mongoose.Types.ObjectId.isValid(targetId)) {
      return res.status(400).json({ error: 'Invalid targetId format.' });
    }

    // Find and delete the like in a single, atomic operation
    const deletedLike = await Like.findOneAndDelete({
      userId: req.user.userId,
      targetType,
      targetId: targetId // Use the ID directly from the query
    });

    if (!deletedLike) {
      console.log('Backend: Like not found for DELETE (query) with targetId:', targetId);
      return res.status(404).json({ error: 'Like not found' });
    }

    console.log('Backend: Like deleted for DELETE (query):', deletedLike._id);

    // Decrement the like count on the corresponding model
    const Model = getModel(targetType);
    await Model.findByIdAndUpdate(targetId, { $inc: { likeCount: -1 } });
    console.log('Backend: Like count decremented for DELETE (query) target:', targetId);

    res.status(200).json({ message: 'Like removed' });
  } catch (error) {
    console.error('Backend: Delete like by query error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/likes/check
 * Check if user liked multiple items
 */
router.get('/check', async (req, res) => {
  console.log('Backend: GET /api/likes/check received');
  console.log('Request Query:', req.query);
  try {
    const { items } = req.query;

    if (!items) {
      console.log('Backend: items parameter missing for GET /api/likes/check');
      return res.status(400).json({ error: 'items parameter required' });
    }

    let parsedItems;
    try {
      parsedItems = JSON.parse(items);
      console.log('Backend: Parsed items for check:', parsedItems);
    } catch (error) {
      console.log('Backend: Invalid items format for GET /api/likes/check');
      return res.status(400).json({ error: 'Invalid items format' });
    }

    const queries = parsedItems.map(item => ({
      userId: req.user.userId,
      targetType: item.type,
      targetId: item.id
    }));

    const likes = await Like.find({ $or: queries });
    console.log('Backend: Found likes for check:', likes);

    // Use a Set for efficient O(1) lookups
    const likedSet = new Set(
      likes.map(like => `${like.targetType}_${like.targetId.toString()}`)
    );

    const liked = {};
    for (const item of parsedItems) {
      const key = `${item.type}_${item.id}`;
      liked[key] = likedSet.has(key);
    }
    console.log('Backend: Liked status map:', liked);

    res.status(200).json({ liked });
  } catch (error) {
    console.error('Backend: Check likes error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
