const { ShardingManager } = require("discord.js");
const {TOKEN} = require("./config.json")

const manager = new ShardingManager('./index.js', { token: TOKEN, totalShards: 2 });
manager.on("shardCreate", (shard) => {
    console.log(`Launched shard #${shard.id}`);
});
manager.spawn({ amount: manager.totalShards, timeout: -1 });