const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverhelp')
        .setDescription('Server setup help link.'),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Server Setup')
                    .setStyle('LINK')
                    .setURL('https://github.com/R2Northstar/Northstar/wiki/Hosting-a-Server'),
            );
        return interaction.reply({ content: 'Instructions for how to setup a server can be found here:', components: [row]});
    },
};