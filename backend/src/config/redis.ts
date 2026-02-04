import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

export const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || '6379'),
  },
});

redisClient.on('connect', () => {
  console.log('✅ Redis conectado');
});

redisClient.on('error', (err) => {
  console.error('❌ Erro no Redis:', err);
});

export const connectRedis = async () => {
  await redisClient.connect();
};
