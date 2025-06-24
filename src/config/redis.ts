import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
const redisPassword = process.env.REDIS_PASSWORD || '';

console.log('🔍 Redis URL:', redisUrl);
console.log('🔍 Redis Password:', redisPassword ? '[REDACTED]' : 'Not set');

const redisClient = createClient({
  url: redisUrl,
  password: redisPassword || undefined,
});

redisClient.on('connect', () => {
  console.log('✅ Redis connected');
});

redisClient.on('error', (err: any) => {
  console.error('❌ Redis client error:', err);
});

redisClient.connect().catch(console.error);

export default redisClient;
