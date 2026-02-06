import express from 'express'
import mongoose from 'mongoose'
import { createClient } from 'redis'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'chirp'

// Use dbName option to avoid issues when URI already contains a database path
mongoose.connect(MONGODB_URI, { dbName: MONGODB_DATABASE })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Redis Connection
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'
const redisClient = createClient({ url: REDIS_URL })

redisClient.on('error', (err) => console.error('Redis Client Error', err))
redisClient.connect()
  .then(() => console.log('Connected to Redis'))
  .catch((err) => console.error('Redis connection error:', err))

// Health Check Endpoint (REQUIRED for Kubernetes)
app.get('/health', async (req, res) => {
  try {
    // Check MongoDB
    const mongoStatus = mongoose.connection.readyState === 1

    // Check Redis
    let redisStatus = false
    try {
      await redisClient.ping()
      redisStatus = true
    } catch {
      redisStatus = false
    }

    if (mongoStatus && redisStatus) {
      res.json({ status: 'ok', mongo: 'connected', redis: 'connected' })
    } else {
      res.status(503).json({
        status: 'degraded',
        mongo: mongoStatus ? 'connected' : 'disconnected',
        redis: redisStatus ? 'connected' : 'disconnected'
      })
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Health check failed' })
  }
})

// API Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Chirp API is running' })
})

// Posts API
app.get('/api/posts', async (req, res) => {
  // TODO: Implement with MongoDB
  res.json({
    posts: [
      {
        id: '1',
        author: { name: 'Sarah Jenkins', handle: '@sjenks_dev' },
        content: 'Just switched the entire design system to #PlusJakartaSans!',
        stats: { comments: 24, retweets: 12, likes: 156, views: '12k' },
        timestamp: '2h',
      },
    ],
  })
})

// Users API
app.get('/api/users/:handle', async (req, res) => {
  // TODO: Implement with MongoDB
  res.json({
    user: {
      name: 'Alex Rivera',
      handle: '@arivera_design',
      bio: 'Design Engineer | Building beautiful interfaces',
      followers: 4523,
      following: 892,
    },
  })
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export { app, redisClient }
