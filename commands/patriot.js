const { MessageAttachment, MessageEmbed, Interaction, Message } = require('discord.js');

module.exports = {
    name: 'patriot',
    description: "Who is a true American patriot!",
    execute(client, message, args, Discord) {
        //const attachment = new MessageAttachment('images/Real_American_Patriots.jpg');
        //const image = new Attachment('./images/Real_American_Patriots.jpg');
        //message.channel.send("<@237311179607769088> is a real American patriot!", image);
        //const embed = new MessageEmbed().setThumbnail("attachment://images/Real_American_Patriots.jpg");
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Today\'s True American Patriot!')
        .addFields(
            {name: 'Uncle Sam\'s pick', value: '<@237311179607769088> is a true American patriot!'}
        )
        //.setImage('./images/Real_American_Patriots.jpg');
        .setImage('https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F002%2F367%2F749%2F5bc.jpg');

        message.channel.send({ embeds: [newEmbed] });
    }
}