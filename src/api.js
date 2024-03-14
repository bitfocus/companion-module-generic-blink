const { InstanceStatus } = require('@companion-module/base')

module.exports = {
	startInterval: function() {
		let self = this;
		self.stopInterval();

		self.INTERVAL = setInterval(() => {
			self.boolValue = !self.boolValue;
			self.checkFeedbacks();
		}, self.config.rate);
	},

	stopInterval: function() {
		let self = this;
		clearInterval(self.INTERVAL);
		self.INTERVAL = null;
	},

	setRate: function(rate) {
		let self = this;
		self.config.rate = rate;
		self.checkVariables();
		self.saveConfig(self.config);
		self.startInterval();
	},
}