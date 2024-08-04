import 'dotenv/config';
import { cleanEnv, str, port } from 'envalid';

const env = cleanEnv(process.env, {
  PORT: port({ default: 3000 }),
  MONGO_DB: str(),
  MONGO_URL: str(),
  REDIS_URL: str(),
});

export default env;
