module.exports = {
    info: {
        name: "8ball",
        description: "To show all command",
        usage: "",
        aliases: ["8ball"],
    },

    run: async function(client, message, args){
        const log = client.channels.cache.get(`926356822334521344`);

        if (!args[0]) {
            return message.reply('Please ask me a question.').catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``))
        } else {
            message.channel.sendTyping();
            let eightball = [
                'It is certain.',
                'It is decidedly so.',
                'Without a doubt.',
                'Yes definitely.',
                'You may rely on it.',
                'As I see it, yes.',
                'Most likely.',
                'Outlook good.',
                'Yes.',
                'Signs point to yes.',
                'Reply hazy try again.',
                'Ask again later.',
                'Better not tell you now.',
                'Cannot predict now.',
                'Concentrate and ask again.',
                'Don\'t count on it.',
                'My reply is no.',
                'My sources say no.',
                'Outlook not so good.',
                'Very doubtful.',
                'No way.',
                'Maybe',
                'The answer is hiding inside you',
                'No.',
                'Depends on the mood of the CS god',
                '||No||',
                '||Yes||',
                'Hang on',
                'It\'s over',
                'It\'s just the beginning',
                'Good Luck',
            ];
            let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
            setTimeout(() => {message.reply({content: eightball[index],});}, 750).catch(err => log.send(`\`\`\`fix\nGUILD - ${message.guild.name} ERROR - missing permission\`\`\``));
        }
    },
};
