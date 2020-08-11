const Discord = module.require("discord.js");

module.exports = {
    name:"userinfo",
  run: async (client, message, args) => {
  var member = message.mentions.members.first() || message.author;
  if(!member) return message.channel.send("Please mention someone to get their user info.")
  const userlol = new Discord.MessageEmbed()
  .setTitle(`User Info`)
  .setColor("RANDOM")
  .addField(`Name: `, `**${member.username}**`)
  .addField(`Tag: `, `**#${member.discriminator}**`)
  .addField(`ID: `, `**${member.id}**`)
  .addField(`Is Bot: `, `**${member.bot}**`)
  .addField(`Roles: `,  member.roles.map(roles => `${roles}`).join(', '))
  .addField("Account created at: ", `**${member.createdAt}**`)
  .addField("Joined This Server at: ", `**${member.joinedAt}**`)

  message.channel.send(userlol)
}
}
