const { MessageEmbed } = require("discord.js");
const levels = {
  none: 0.0,
  low: 0.20,
  medium: 0.30,
  high: 0.35,
};
module.exports = {
    info: {
        name: "Bassboost",
        description: "To show all command",
        usage: "",
        aliases: ["Bassboost"]
    },

    run: async function(client, message, args){
    const log = client.channels.cache.get(`926356822334521344`);

    const voice = message.member.voice.channel;
    if (!voice) return message.reply("<:no:884059056174682122> You must Join a voice channel before using this command!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
    return message.reply("<:no:884059056174682122> You Must be in same voice channel to use this command").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
    return message.reply("<:no:884059056174682122> You Must be in same voice channel to use this command").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    const player = message.client.manager.get(message.guild.id);
    if (!player) return message.reply("<:no:884059056174682122> Nothing is playing right now!").catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));

    if (!args.join(" ")) {
    let embed = new MessageEmbed()
    .setTitle("You need to provide a bassboost level")
    .setDescription(`\`\`\`yaml\nAvailable Levels are - none, low, medium, high.\`\`\``)
    .setColor("#ff0022")
    message.reply({embeds: [embed]}).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
  } else {
    let level = "none";
    if (args.length && args[0].toLowerCase() in levels) level = args[0].toLowerCase();

    player.setEQ(...new Array(3).fill(null).map((_, i) => ({ band: i, gain: levels[level] })));
    return message.channel.send(`Changed the bassboost level to \`${level}\``).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
     }
  }
}
