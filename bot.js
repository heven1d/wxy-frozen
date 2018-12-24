const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("You.",{type: 'LISTENING'});
  console.log('')
  console.log('')
  console.log('╔[═══════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
});





client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', '› Ads.'));
});





client.on('message', message => {
     if (message.content === "باي") {
message.channel.sendMessage("" + " :rose:باي");
    }
}); 


client.on('message', message => {
     if (message.content === "spam?") {
message.channel.sendMessage("يلا");
    }
}); 


client.on('message', message => {
     if (message.content === "برب") {
message.channel.sendMessage("" + " :rose:تيت");
    }
}); 


client.on('message', message => {
     if (message.content === "هاي") {
message.channel.sendMessage("" + "هايي");
    }
}); 



client.on('message', message => {
     if (message.content === "هلوو") {
message.channel.sendEmbed("tt" + ":heart: هلوو");
    }
}); 


client.on('message', message => {
     if (message.content === "السلام " + "عليكم") {
message.channel.sendMessage("" + "وعليكم السلام");
    }
});     




client.login(process.env.BOT_TOKEN);
