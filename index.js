const { Telegraf, Composer } = require("telegraf");
require("./config");

const token = "5492443650:AAEiAIbzQprOqfWKnUJMFHSWtoAq6Acy-Zo";
const bot = new Telegraf(token);
const composer = new Composer();
const { confession, AdminOne } = require("./config");

bot.command("start", (ctx) => {
  let a = ctx.from.id;

  if (AdminOne == a) {
    ctx.reply(`aa welcome ${ctx.from.username}`).then();
  } else {
    ctx.reply("error");
  }
});

// photo
composer.on("photo", (ctx) => {
  ctx.telegram.sendPhoto(confession, ctx.message.photo[0].file_id).then();
  // ctx.telegram.sendPhoto(confessionOne, ctx.message.photo[0].file_id).then();
});
// video
composer.on("video", (ctx) => {
  ctx.telegram.sendVideo(confession, ctx.message.video.file_id);
  // ctx.telegram.sendVideo(confessionOne, ctx.message.video.file_id);
});
// voice
composer.on("voice", (ctx) => {
  ctx.telegram.sendVoice(confession, ctx.message.voice.file_id);
  // ctx.telegram.sendVoice(confessionOne, ctx.message.voice.file_id);
});
// audio
composer.on("audio", (ctx) => {
  ctx.telegram.sendAudio(confession, ctx.message.audio.file_id).then();
  // ctx.telegram.sendAudio(confession, ctx.message.audio.file_id).then();
});

// message
composer.on("message", (ctx) => {
  let b = ctx.from.id;
  if (AdminOne == b) {
    ctx.telegram.sendMessage(confession, ctx.message.text).then();
    // ctx.telegram.sendMessage(confessionOne, ctx.message.text).then();
  } else {
    ctx.reply("erorr1");
  }
});

bot.use(composer.middleware());

bot.launch();
