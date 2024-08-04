import { createClient } from 'redis';
import env from '@src/config/config';

const client = createClient({
  url: `redis://${env.REDIS_URL}`,
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

client.connect();

export default client;
