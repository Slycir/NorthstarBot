const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dediserver')
        .setDescription('Dedicated server setup.'),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Dedicated Server Help')
                    .setStyle('LINK')
                    .setURL('https://github.com/R2Northstar/Northstar/wiki/Hosting-a-Server#:~:text=Hosting%20a%20Dedicated%20Server'),
            );
        return interaction.reply({ content: 'Dedicated server setup guide:', components: [row]});
    },
};