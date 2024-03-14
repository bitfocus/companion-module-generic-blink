const { Regex } = require('@companion-module/base')

module.exports = {
	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: 'This module blinks a button if the variable\'s value matches the specified value. Apply a feedback to a button to use this module.'
			},
			{
				type: 'number',
				id: 'rate',
				width: 6,
				label: 'Blink Rate (ms)',
				default: 1000
			}
		]
	},
}
