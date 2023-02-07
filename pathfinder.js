const mineflayer = require("mineflayer");
const { pathfinder, Movements, goals } = require("mineflayer-pathfinder")
const GoalFollow = goals.GoalFollow

const bot = mineflayer.createBot({
    host: '', //Your server host
    port: 0, //You server port
    username: '' //any username you like
})
    

bot.loadPlugin(pathfinder)

function followPlayer() {
    const player = bot.players['Your Minecraft username']

    if (!player) {
        bot.chat('I cannot find you')
        return
    }

    const mcData = require('minecraft-data')(bot.version)
    const movement = new Movements(bot, mcData)
    bot.pathfinder.setMovements(movement)

    const goal = new GoalFollow(playerCI.entity, 1)
    bot.pathfinder.setGoal(goal , true)
}

function Hello() {
    bot.chat('Hello World')
}


bot.on("spawn", Hello)
bot.once("spawn", followPlayer)
