const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Discord invite link'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Discord')
					.setStyle('LINK')
					.setURL('https://northstar.tf/discord'),
			);
		return interaction.reply({ content: 'Discord link below: (right click to copy)', components: [row]});
	},
};
