const discord = require('discord.js');
const config = require('./config.json');

const bot = new discord.Client()
/*
const bot1 = new discord.Client()
const bot2 = new discord.Client()
const bot3 = new discord.Client()
const bot4 = new discord.Client()
const bot5 = new discord.Client()
const bot6 = new discord.Client()
const bot7 = new discord.Client()
const bot8 = new discord.Client()
const bot9 = new discord.Client()
const bot10 = new discord.Client()
const bot11 = new discord.Client()
const bot12 = new discord.Client()
const bot13 = new discord.Client()
const bot14 = new discord.Client()
const bot15 = new discord.Client()
const bot16 = new discord.Client()
const bot17 = new discord.Client()
const bot18 = new discord.Client()
const bot19 = new discord.Client()
const bot20 = new discord.Client()
*/

bot.on('ready', async() => {
    console.log('Bot 1 Ready')
})



bot.login(config.token)
/*
bot1.login(config.token1)
bot2.login(config.token2)
bot3.login(config.token3)
bot4.login(config.token4)
bot5.login(config.token5)
bot6.login(config.token6)
bot7.login(config.token7)
bot8.login(config.token8)
bot9.login(config.token9)
bot10.login(config.token10)
bot11.login(config.token11)
bot12.login(config.token12)
bot13.login(config.token13)
bot14.login(config.token14)
bot15.login(config.token15)
bot16.login(config.token16)
bot17.login(config.token17)
bot18.login(config.token18)
bot19.login(config.token19)
bot20.login(config.token20)
*/
