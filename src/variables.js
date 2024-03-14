module.exports = {
	initVariables: function () {
		let self = this;
		
		let variables = []
		variables.push({ variableId: 'rate', name: 'Blink Rate' })
		self.setVariableDefinitions(variables);
	},

	checkVariables: function () {
		let self = this;

		try {

			variableValues = {};
			variableValues['rate'] = self.config.rate;
			self.setVariableValues(variableValues);
		}
		catch(error) {
			self.log('error', 'Error setting Variables: ' + String(error))
			console.log(error);
		}
	}
}
