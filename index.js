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
/*bot1.on('ready', async() => {
    console.log('Bot 2 Ready')
})
bot2.on('ready', async() => {
    console.log('Bot 3 Ready')
})
bot3.on('ready', async() => {
    console.log('Bot 4 Ready')
})
bot4.on('ready', async() => {
    console.log('Bot 5 Ready')
})
bot5.on('ready', async() => {
    console.log('Bot 6 Ready')
})
bot6.on('ready', async() => {
    console.log('Bot 7 Ready')
})
bot7.on('ready', async() => {
    console.log('Bot 8 Ready')
})
bot8.on('ready', async() => {
    console.log('Bot 9 Ready')
})
bot9.on('ready', async() => {
    console.log('Bot 10 Ready')
})
bot10.on('ready', async() => {
    console.log('Bot 11 Ready')
})
bot11.on('ready', async() => {
    console.log('Bot 12 Ready')
})
bot12.on('ready', async() => {
    console.log('Bot 13 Ready')
})
bot13.on('ready', async() => {
    console.log('Bot 14 Ready')
})
bot14.on('ready', async() => {
    console.log('Bot 15 Ready')
})
bot15.on('ready', async() => {
    console.log('Bot 16 Ready')
})
bot16.on('ready', async() => {
    console.log('Bot 17 Ready')
})
bot17.on('ready', async() => {
    console.log('Bot 18 Ready')
})
bot18.on('ready', async() => {
    console.log('Bot 19 Ready')
})
bot19.on('ready', async() => {
    console.log('Bot 20 Ready')
})
bot20.on('ready', async() => {
    console.log('Bot 21 Ready')
})
*/


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
