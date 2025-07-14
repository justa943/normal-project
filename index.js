const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
  client.user.setPresence({
    status: "online", // "idle" or "dnd" are also valid
    activities: [{ name: "being online 😎", type: 0 }]
  });
});

client.login(process.env.DISCORD_TOKEN);
