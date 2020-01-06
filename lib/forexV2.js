'use strict';

module.exports = config => {
	const utils = require('./utilsV2')(config);

	function getRealtimeForexRates(params) {
		return utils.get_data('forex/realtime', params);
	}

	function getHistoricalForexRates(params) {
		return utils.get_data('forex/historical', params);
	}

	return {
		getRealtimeForexRates,
		getHistoricalForexRates
	};
};