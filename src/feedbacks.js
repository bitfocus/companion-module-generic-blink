const { combineRgb } = require('@companion-module/base')

module.exports = {
    initFeedbacks() {
        let self = this;
        const feedbacks = {};

		const foregroundColor = combineRgb(255, 255, 255) // White
        const backgroundColorRed = combineRgb(255, 0, 0) // Red

		feedbacks.blinkVariable = {
			type: 'boolean',
			name: 'Blink when Variable Value matches',
			description: 'Blinks the button when the variable value matches the specified value',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			options: [
				{
					type: 'static-text',
					label: 'If the variable matches the value, the button will blink at the rate specified in the module instance config.',
					id: 'info',
					default: ''
				},
				{
					type: 'textinput',
					label: 'Variable to Check',
					tooltip: 'What variable to act on?',
					id: 'variable',
					useVariables: true
				},
				{
					type: 'dropdown',
					label: 'Operation',
					id: 'op',
					default: 'eq',
					choices: [
						{ id: 'eq', label: '=' },
						{ id: 'ne', label: '!=' },
						{ id: 'gt', label: '>' },
						{ id: 'lt', label: '<' },
					],
				},
				{
					type: 'textinput',
					label: 'Value to Check Against',
					tooltip: 'What value to check against? This field can also be a variable.',
					id: 'value',
					default: '',
					useVariables: true
				},
			],
			callback: async function (feedback, bank) {
				let opt = feedback.options;
				let value = await self.parseVariablesInString(opt.variable);
				let value2 = await self.parseVariablesInString(opt.value);
				let op = opt.op;
				let val = false;

				switch (op) {
					case 'gt':
						val = parseFloat(value) > parseFloat(value2)
						break
					case 'lt':
						val = parseFloat(value) < parseFloat(value2)
						break
					case 'ne':
						val = value2 + '' != value + ''
						break
					default:
						val = value2 + '' == value + ''
						break
				}

				if (val) {
					return self.boolValue;
				}

				return false
			}
		}

		feedbacks.blink = {
			type: 'boolean',
			name: 'Blink the Button all the time',
			description: 'Blinks the button all the time',
			defaultStyle: {
				color: foregroundColor,
				bgcolor: backgroundColorRed,
			},
			callback: async function (feedback, bank) {
				return self.boolValue;
			}
		}

        self.setFeedbackDefinitions(feedbacks);
    }
}