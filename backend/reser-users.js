// backend/reset-users.js
require('dotenv').config(); // Make sure you have dotenv installed
const mongoose = require('mongoose');
const User = require('./src/models/User'); // Adjust path if your structure is different
const Like = require('./src/models/Like');

const resetData = async () => {
    try {
        // Connect to DB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('🔌 Connected to MongoDB...');

        // 1. Delete All Users
        const userResult = await User.deleteMany({});
        console.log(`✅ Deleted ${userResult.deletedCount} Users.`);

        // 2. Delete All Likes (Since they belong to deleted users)
        const likeResult = await Like.deleteMany({});
        console.log(`✅ Deleted ${likeResult.deletedCount} Likes.`);

        // Optional: Uncomment this if you want to wipe Movies too
        // const movieResult = await Movie.deleteMany({});
        // console.log(`✅ Deleted ${movieResult.deletedCount} Movies.`);

        console.log('✨ Database reset complete!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error resetting database:', error);
        process.exit(1);
    }
};

resetData();