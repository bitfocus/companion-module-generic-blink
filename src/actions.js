module.exports = {
	initActions: function () {
		let self = this;
		
		let actions = {}

		actions.setRate = {
			name: 'Set Blink Rate',
			options: [
				{
					type: 'number',
					label: 'Rate (ms)',
					id: 'rate',
					default: 1000,
					tooltip: 'The rate in milliseconds at which the buttons will blink. 1000ms = 1 second.'
				}
			],
			callback: async function (action) {
				let rate = parseInt(action.options.rate);
				self.setRate(rate);
			}
		}

		self.setActionDefinitions(actions);
	}
}
