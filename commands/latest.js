const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('latest')
        .setDescription('Link to the latest version of Northstar.'),
    async execute(interaction) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Latest Version')
					.setStyle('LINK')
                    .setURL('https://github.com/R2Northstar/Northstar/releases'),
			);
        return interaction.reply({ content: 'The latest version of Northstar can be found here:', components: [row]});
    },
};