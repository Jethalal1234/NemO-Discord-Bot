const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    info: {
        name: "shard",
        description: "To show all command",
        usage: "",
        aliases: [],
    },

    run: async function(client, message, args){
        const duck = await client.shard.fetchClientValues('guilds.cache.size')
    const users = await client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)).then(x => x.reduce((a, b) => a + b, 0))
    const shardInfo = await client.shard.broadcastEval(c => ({
                id: c.shard.ids,
                status: c.shard.mode,
                guilds: c.guilds.cache.size,
                channels: c.channels.cache.size,
                members: c.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0),
                memoryUsage: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2),
                ping: c.ws.ping,
            }));
            const d = moment.duration(client.uptime);
            const days = (d.days() == 1) ? `${d.days()}d` : `${d.days()}d`;
            const hours = (d.hours() == 1) ? `${d.hours()}h` : `${d.hours()}h`;
            const minutes = (d.minutes() == 1) ? `${d.minutes()}m` : `${d.minutes()}m`;
            const seconds = (d.seconds() == 1) ? `${d.seconds()}s` : `${d.seconds()}s`;
            const up = `${days}${hours}${minutes}${seconds}`;
const emee = new MessageEmbed()
.setColor("#ffb700")
shardInfo.forEach(i => {
const status = i[0] === 'process' ? "<:Offline:937564148282294314>" : "<:Online:937564180217729055>" ;
emee.addField(`${status} Cluster ${(parseInt(i.id) + 1).toString()}`, `
\`\`\`css
Shards: ${(parseInt(i.id) + 1).toString()}/${client.shard.count}
Servers: ${i.guilds.toLocaleString()}
Channels: ${i.channels.toLocaleString()}
Users: ${i.members.toLocaleString()}
Memory: ${Number(i.memoryUsage).toLocaleString()}mb
Heartbeat: ${i.ping.toLocaleString()}ms
uptime: ${up}
\`\`\``, true);
})
emee.addField(`Summary`, `
\`\`\`css
Total Servers: ${duck.reduce((a, b) => a + b)}
Total Users: ${users}
Total shards: ${client.shard.count}
Avg Heartbeat: ${client.ws.ping}ms
\`\`\``, true);
message.channel.send({embeds: [emee]}).catch(err => console.log(err))
   },
};
