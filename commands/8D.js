const { MessageEmbed } = require("discord.js")

module.exports = {
    info: {
        name: "8d",
        description: "To show all command",
        usage: "",
        aliases: ["8d"],
    },

    run: async function(client, message, args){
        const voice = message.member.voice.channel;
if (!voice) return message.reply("You must Join a voice channel before using this command!").catch(err => console.log(err))
        
if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
return message.reply("You Must be in same voice channel to use this command").catch(err => console.log(err))

const botPerms = voice.permissionsFor(message.client.user);
if (!botPerms.has("CONNECT") || !botPerms.has("SPEAK"))
return message.reply("I Don't have permission to excecute this command").catch(err => console.log(err))

const player = message.client.manager.get(message.guild.id);
if (!player) return message.reply("Nothing to play right now!").catch(err => console.log(err))
if (!player.queue.current) return message.reply("Nothing to play right now!").catch(err => console.log(err))

try {
    player.node.send({
      op: "filters",
      guildId: message.guild.id,
      equalizer: player.bands.map((gain, index) => {
          var Obj = {
            "band": 0,
            "gain": 0,
          };
          Obj.band = Number(index);
          Obj.gain = Number(gain)
          return Obj;
        }),
        rotation: {
          "rotationHz": 0.2, 
    },
});
    const embed = new MessageEmbed()
    .setDescription(` 8D Filter Activated`)
    .setColor("RED")
    message.channel.send({ embeds : [embed]}).catch(err => console.log(err))
   }catch (e) {
    console.log(e)}
 }
};