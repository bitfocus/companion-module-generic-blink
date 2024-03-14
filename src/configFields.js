const { Regex } = require('@companion-module/base')

module.exports = {
	getConfigFields() {
		return [
			{
				type: 'static-text',
				id: 'info',
				width: 12,
				label: 'Information',
				value: `Specify on a button's feedback the variable to check and the value to check against. The button will blink/alternate between the original button color and the feedback style color at the rate specified in the module config if the variable matches the condition against the value. The value to check against can be another variable's value.`
			},
			{
				type: 'number',
				id: 'rate',
				width: 6,
				label: 'Blink Rate (ms)',
				default: 1000,
				tooltip: 'The rate in milliseconds at which the buttons will blink. 1000ms = 1 second.',
				required: true,
				min: 100,
				max: 10000
			}
		]
	},
}
