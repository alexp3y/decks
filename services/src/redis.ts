import Redis from 'ioredis';
import { accessEnv } from './helpers/accessEnv';

export const redis = new Redis({
  port: accessEnv('REDIS_PORT'),
  host: accessEnv('REDIS_HOST'),
  password: accessEnv('REDIS_PASSWORD'),
});
