const Discord = require("Discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("You.",{type: 'LISTENING'});
  console.log('')
  console.log('')
  console.log('╔[═══════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
});


client.login(process.env.BOT_TOKEN);
