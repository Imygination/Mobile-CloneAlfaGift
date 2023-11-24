import Redis from "ioredis";
const redis = new Redis({
  port: 19997, // Redis port
  host: "redis-19997.c1.ap-southeast-1-1.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: process.env.REDIS_PASS,
  db: 0, // Defaults to 0
});

export default redis