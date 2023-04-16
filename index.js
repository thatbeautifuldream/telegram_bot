// nodemon was used to run the bot so that any changes made to the code are reflected immediately without the need to restart the bot
// the script start is configured in package.json to run the bot using nodemon
// to start the bot smimply run the command (npm run start)

// the telegraf library is used to create the bot
const { Telegraf } = require("telegraf");
// to use the environment variables we need to install the dotenv package
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

// on emoji replies witha  heart emoji
bot.on("sticker", (ctx) => ctx.reply("❤️"));

// to quit the bot
// try {
//   bot.command("quit", (ctx) => {
//     ctx.reply("Bye");
//     ctx.leaveChat();
//   });
// } catch (error) {
//   console.log(error);
//   ctx.reply("Something went wrong");
// }

// TelegramError: 400: Bad Request: chat member status can't be changed in private chats

// on quit find out if its a group chat or a private chat
// if its a group chat then leave the chat but its a private chat then reply with a message
bot.command("quit", (ctx) => {
    if (ctx.chat.type === "group") {
      ctx.reply("Bye");
      ctx.leaveChat();
    } else {
      ctx.reply("I can't leave a private chat");
    }
});

// configure a reply to messages
bot.on("text", (ctx) => {
  ctx.reply("Unfortunatly I don't understand humans, I am just a bot");
});

// at last we need to launch the bot
bot.launch();
