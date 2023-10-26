// Imports
import { createClient } from 'redis';
import config from '../config';
import logger from './logger';

let redisClient = createClient({
  url: config.redis.url
});

// Redis error logging
redisClient.on('error', (err) => logger.error('Redis Error', err));

// Redis connected successfully
redisClient.on('connect', () => logger.info('Redis Connected'));

// Function to connect redis client
const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
