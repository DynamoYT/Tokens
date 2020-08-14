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
bo1.login(config.token)
bot2.login(config.token)
bot3.login(config.token)
bot4.login(config.token)
bot5.login(config.token)
bot6.login(config.token)
bot7.login(config.token)
bot8.login(config.token)
bot9.login(config.token)
bot10.login(config.token)
bot11.login(config.token)
bot12.login(config.token)
bot13.login(config.token)
bot14.login(config.token)
bot15.login(config.token)
bot16.login(config.token)
bot17.login(config.token)
bot18.login(config.token)
bot19.login(config.token)
bot20.login(config.token)
*/
