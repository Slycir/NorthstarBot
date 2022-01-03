const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('installhelp')
        .setDescription('Install/setup help link.'),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Basic Setup')
                    .setStyle('LINK')
                    .setURL('https://github.com/R2Northstar/Northstar/wiki/Basic-Setup'),
            );
        return interaction.reply({ content: 'Install/setup instructions can be found here:', components: [row]});
    },
};