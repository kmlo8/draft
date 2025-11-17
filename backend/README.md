# MovieFlix Backend API

Backend REST API for the MovieFlix movie recommendation system built with Node.js, Express, and MongoDB.

## Features

- **Authentication**: JWT-based authentication with access and refresh tokens
- **User Management**: User profiles, preferences, and statistics
- **Movie Data**: Integration with TMDB API for movie information
- **Likes System**: Like movies, actors, and directors
- **Click Tracking**: Track user viewing history
- **Search**: Natural language movie search with recommendation algorithm
- **Actor/Director Pages**: View filmographies and details

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT) with bcrypt
- **External APIs**:
  - TMDB (The Movie Database) for movie data
  - Custom recommendation algorithm (optional)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- TMDB API key ([Get one here](https://www.themoviedb.org/settings/api))

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**

   Copy `.env.example` to `.env` and fill in the values:
   ```bash
   cp .env.example .env
   ```

   Required variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret key for access tokens
   - `JWT_REFRESH_SECRET`: Secret key for refresh tokens
   - `TMDB_API_KEY`: Your TMDB API key

3. **Start MongoDB:**

   Make sure MongoDB is running:
   ```bash
   # For local MongoDB
   mongod

   # Or use MongoDB Atlas (cloud)
   ```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the PORT specified in .env).

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout user

### User
- `GET /api/user/profile` - Get user profile
- `PATCH /api/user/profile` - Update user profile
- `GET /api/user/stats` - Get user statistics
- `GET /api/user/liked-movies` - Get liked movies
- `GET /api/user/liked-actors` - Get liked actors
- `GET /api/user/search-history` - Get search history
- `POST /api/user/questionnaire` - Submit preferences

### Movies
- `GET /api/movies/:id` - Get movie details
- `GET /api/movies/search` - Search movies
- `POST /api/movies/:id/click` - Track movie click

### Likes
- `POST /api/likes` - Like an item
- `DELETE /api/likes/:id` - Unlike an item
- `GET /api/likes/check` - Check like status

### Actors & Directors
- `GET /api/actors/:id` - Get actor details
- `GET /api/directors/:id` - Get director details

### Recommendations
- `POST /api/recommendations/search` - Natural language search
- `GET /api/recommendations/home` - Get home recommendations

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js          # MongoDB connection
│   │   └── tmdb.js              # TMDB configuration
│   ├── middleware/
│   │   └── auth.js              # Authentication middleware
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Movie.js             # Movie schema
│   │   ├── Actor.js             # Actor schema
│   │   ├── Director.js          # Director schema
│   │   ├── Like.js              # Like schema
│   │   ├── Click.js             # Click schema
│   │   └── Search.js            # Search schema
│   ├── routes/
│   │   ├── auth.js              # Auth routes
│   │   ├── user.js              # User routes
│   │   ├── movies.js            # Movie routes
│   │   ├── likes.js             # Like routes
│   │   ├── actors.js            # Actor routes
│   │   ├── directors.js         # Director routes
│   │   └── recommendations.js   # Recommendation routes
│   ├── services/
│   │   ├── authService.js       # JWT & bcrypt functions
│   │   ├── tmdbService.js       # TMDB API integration
│   │   └── recommendationService.js  # Recommendation algorithm
│   ├── utils/
│   │   ├── validation.js        # Validation functions
│   │   └── errorHandler.js      # Error handling
│   └── server.js                # Express app setup
├── .env                         # Environment variables
├── .env.example                 # Environment template
├── package.json
└── README.md
```

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port | 5000 | No |
| `NODE_ENV` | Environment | development | No |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:3000 | No |
| `MONGODB_URI` | MongoDB connection string | - | Yes |
| `JWT_SECRET` | Access token secret | - | Yes |
| `JWT_REFRESH_SECRET` | Refresh token secret | - | Yes |
| `JWT_ACCESS_EXPIRATION` | Access token expiration | 15m | No |
| `JWT_REFRESH_EXPIRATION` | Refresh token expiration | 7d | No |
| `TMDB_API_KEY` | TMDB API key | - | Yes |
| `TMDB_BASE_URL` | TMDB API base URL | https://api.themoviedb.org/3 | No |
| `RECOMMENDATION_API_URL` | Recommendation algorithm URL | - | No |
| `RECOMMENDATION_API_KEY` | Recommendation API key | - | No |

## Authentication Flow

1. **Signup/Login**: User provides email/password
2. **Access Token**: Short-lived JWT (15 minutes) sent in response body
3. **Refresh Token**: Long-lived JWT (7 days) set as httpOnly cookie
4. **Protected Routes**: Send access token in `Authorization: Bearer <token>` header
5. **Token Refresh**: When access token expires, call `/api/auth/refresh` to get new one
6. **Logout**: Invalidates refresh token

## TMDB Integration

The API automatically fetches and caches movie data from TMDB:
- Movie metadata (title, plot, year, genres)
- Cast and director information
- Poster and backdrop images
- Cached in MongoDB for 30 days

## Recommendation Algorithm Integration

The backend is ready to integrate with an external recommendation algorithm:

**Endpoint**: `POST ${RECOMMENDATION_API_URL}/recommend`

**Request format**:
```json
{
  "query": "Natural language search query",
  "userPreferences": {
    "genres": ["Drama", "Thriller"],
    "actors": ["Actor Name"],
    "years": { "min": 2000, "max": 2024 }
  },
  "userHistory": {
    "likedMovies": [123, 456],
    "clickedMovies": [789, 101]
  }
}
```

**Expected response**:
```json
{
  "movies": [
    { "tmdbId": 496243, "score": 0.95 }
  ]
}
```

If not configured, the API falls back to trending movies from TMDB.

## Error Handling

All errors return JSON with the following format:
```json
{
  "error": "Error message",
  "statusCode": 400
}
```

Common status codes:
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `404` - Not Found
- `500` - Internal Server Error
- `503` - Service Unavailable (external API down)

## Development Tips

1. **Database GUI**: Use MongoDB Compass to view database
2. **API Testing**: Use Thunder Client, Postman, or Insomnia
3. **Logging**: Check console for detailed error logs in development
4. **Hot Reload**: Use `npm run dev` with nodemon for auto-restart

## Testing

Test the API with example requests:

**Signup:**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**Get Profile (authenticated):**
```bash
curl http://localhost:5000/api/user/profile \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## Troubleshooting

**MongoDB connection error:**
- Check if MongoDB is running
- Verify `MONGODB_URI` in .env
- Check network connectivity

**TMDB API errors:**
- Verify `TMDB_API_KEY` is valid
- Check TMDB API status
- Review rate limits (40 requests per 10 seconds)
**Port already in use:**
- Change `PORT` in .env
- Or kill process using the port: `lsof -ti:5000 | xargs kill`

## License



ISC

## Contributors

MovieFlix Development Team


do not show 추천 서비스를 사용할 수 없습니다

잠시 후 다시 시도해주세요. this error right away, only show after user makes search and there is no respond.



and under that show movies list like in carousel based on users questionarie likes and sort them by genre. and this list should be alwaysdisplayed