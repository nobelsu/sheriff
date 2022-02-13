const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Boot someone out of the server.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('User to be kicked')
				.setRequired(true)),
				
	async execute(interaction) {

		const member = interaction.options.getMember('user');

		if (member && interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
			member.kick();
			await interaction.reply(`:cowboy: ${member} has been kicked.`);
		} else {
			await interaction.reply({ content: 'You don\'t have permission to kick someone!', ephemeral: true });
		}

	},
};