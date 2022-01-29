module.exports = async client => {
    console.log(`SUCESSFULLY DEPLOY NOW`);
    setInterval(() => {client.user.setActivity(`${client.config.prefix}help`, {type: 'WATCHING'})}, 5000);
};
