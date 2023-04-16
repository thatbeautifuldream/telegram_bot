const { Telegraf } = require("telegraf");
require("dotenv").config();

/*
the method below is used to get the token from the environment variable
to safeguard the token from being exposed to the public we store it locally in the .env file
add the .env file to the .gitignore file to prevent it from being pushed to the remote repository
the process global object is used to access the environment variables
*/
const bot = new Telegraf(process.env.BOT_TOKEN);

// ctx : context object that contains the message sent by the user and the chat id of the user

// event listener for the start command
bot.start((ctx) => {
  ctx.reply("Welcome to Milind Mishra's bot");
});

bot.command("help", (ctx) =>
  ctx.reply(`1. Use the command /help to get the list of commands
2. Use the command /about to get the information about the bot
3. Use the command /contact to get the contact information of the bot creator
`)
);

bot.command("about", (ctx) =>
  ctx.reply(`This is a bot created by Milind Mishra
It is created using the Telegraf library
    `)
);

bot.command("contact", (ctx) =>
  ctx.reply("You can contact the bot creator at contact@milind.live")
);

// at last we need to launch the bot
bot.launch();
