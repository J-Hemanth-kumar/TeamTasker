import express from 'express';
import redisClient from '@/config/redis';
import sequelize from '@/config/database';

const router = express.Router();

router.get('/health', async (req, res) => {
  try {
    // Check database
    await sequelize.authenticate();
    // Check Redis
    await redisClient.ping();
    res.status(200).json({ status: 'OK', message: 'Backend, database, and Redis are running' });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    res.status(500).json({ status: 'ERROR', message: 'Health check failed', error: errorMessage });
  }
});

export default router;