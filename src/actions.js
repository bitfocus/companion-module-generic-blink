module.exports = {
	initActions: function () {
		let self = this;
		
		let actions = {}

		if (self.config.specifyCustomOnOff) {
			actions.setOnOffTimes = {
				name: 'Set On/Off Times',
				options: [
					{
						type: 'number',
						label: 'On Time (ms)',
						id: 'onTime',
						default: 1000,
						tooltip: 'The time in milliseconds the button will be on.',
						required: true,
						min: 100,
						max: 10000
					},
					{
						type: 'number',
						label: 'Off Time (ms)',
						id: 'offTime',
						default: 500,
						tooltip: 'The time in milliseconds the button will be off.',
						required: true,
						min: 100,
						max: 10000
					}
				],
				callback: async function (action) {
					let onTime = parseInt(action.options.onTime);
					let offTime = parseInt(action.options.offTime);
					self.setOnOffTimes(onTime, offTime);
				}
			}
		}
		else {
			actions.setRate = {
				name: 'Set Blink Rate',
				options: [
					{
						type: 'number',
						label: 'Rate (ms)',
						id: 'rate',
						default: 1000,
						tooltip: 'The rate in milliseconds at which the buttons will blink. 1000ms = 1 second.',
						required: true,
						min: 100,
						max: 10000
					}
				],
				callback: async function (action) {
					let rate = parseInt(action.options.rate);
					self.setRate(rate);
				}
			}
		}

		self.setActionDefinitions(actions);
	}
}
