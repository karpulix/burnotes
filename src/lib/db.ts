import { createClient } from "redis";

const redisSetParams: Record<string, any> = () => {
  const redisParams: Record<string, any> = {};
  redisParams.NX = true;
  redisParams.EX = Number(process.env.REDIS_EX || 600);
  if (
    ["true", "yes", "1"].includes(
      String(process.env.REDIS_EX_INF).toLowerCase()
    )
  ) {
    delete redisParams.EX;
  }
  return redisParams;
};

const client = createClient({
  password: String(process.env.REDIS_PW || ""),
  socket: {
    host: String(process.env.REDIS_HOST || "redis"),
    port: Number(process.env.REDIS_PORT || 6379),
  },
});

client.on("error", (err) => console.log(err));

if (!client.isOpen) {
  client.connect();
}

// client.set('name', 'mario')

export { client, redisSetParams };
