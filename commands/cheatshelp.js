const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cheatshelp')
        .setDescription('Complete list of console commands.'),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('Vanilla Commands')
                    .setStyle('LINK')
                    .setURL('https://pastebin.com/raw/3DSCK09f'),
            );
        return interaction.reply({ content: '***COMPLETE*** vanilla command list:', components: [row]});
    },
};