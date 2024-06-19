module.exports = {
	initActions: function () {
		let self = this;
		
		let actions = {}

		if (self.config.specifyCustomOnOff) {
			actions.setOnOffTimes = {
				name: 'Set On/Off Times',
				options: [
					{
						type: 'textinput',
						label: 'On Time (ms)',
						id: 'onTime',
						default: 1000,
						tooltip: 'The time in milliseconds the button will be on.',
						required: true,
						useVariables: true,
						min: 100,
						max: 10000
					},
					{
						type: 'textinput',
						label: 'Off Time (ms)',
						id: 'offTime',
						default: 500,
						tooltip: 'The time in milliseconds the button will be off.',
						required: true,
						useVariables: true,
						min: 100,
						max: 10000
					}
				],
				callback: async function (action) {
                    let onTime = parseInt(await(self.parseVariablesInString(action.options.onTime)));
                    let offTime = parseInt(await(self.parseVariablesInString(action.options.offTime)));
					console.log(`On time set to ${onTime}`);
					console.log(`Off time set to ${offTime}`);
					self.setOnOffTimes(onTime, offTime);
				}
			}
		}
		else {
			actions.setRate = {
				name: 'Set Blink Rate',
				options: [
					{
						type: 'textinput',
						label: 'Rate (ms)',
						id: 'rate',
						default: 1000,
						tooltip: 'The rate in milliseconds at which the buttons will blink. 1000ms = 1 second.',
						required: true,
						useVariables: true,
						min: 100,
						max: 10000
					}
				],
				callback: async function (action) {
                    let rate = parseInt(await(self.parseVariablesInString(action.options.rate)));
					console.log(`rate set to : ${rate}`);
					self.setRate(rate);
				}
			}
		}

		self.setActionDefinitions(actions);
	}
}
