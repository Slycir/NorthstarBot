const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Help file link'),
    async execute(interaction) {
        return interaction.reply('https://github.com/Slycir/NorthstarBot/blob/main/README.md');
    },
};