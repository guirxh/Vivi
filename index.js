const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "ODg4MTA1OTQ0ODk3MTY3Mzkw.YUN3HQ.4waOSN7Fbj6WjZx5KrxX2BwSyuA", //Discord Bot Token
prefix: "?" //Discord Bot Prefix
})
bot.onMessage() //Allows to execute Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `Pong! $pingms` //Code
})

bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})

bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder
