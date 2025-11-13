import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("8333441149:AAEn1s08LuQt1_Qq5aLCQIGsuLO9EEkE7y4", {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Mini appni ochish uchun tugmani bos!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Mini Appni ochish 🚀",
            web_app: { url: "https://edufinder.uz/uz/home" },
          },
        ],
      ],
    },
  });
});
