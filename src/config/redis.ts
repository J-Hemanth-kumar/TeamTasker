import { createClient, RedisClientType } from 'redis';

const redisClient: RedisClientType = createClient({
  // @ts-expect-error: legacyMode is a real option but not in the current types
  legacyMode: true
});

redisClient.connect().catch(console.error);

redisClient.on('connect', () => {
  console.log('Redis connected');
});

redisClient.on('error', (err) => {
  console.error('Redis connection error:', err);
});

export default redisClient;
