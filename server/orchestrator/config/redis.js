import { Redis } from "ioredis";
const redis = new Redis({
  port: 14747, // Redis port
  host: "redis-14747.c292.ap-southeast-1-1.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: process.env.REDIS_PASS,
  db: 0, // Defaults to 0
});

export default redis;
