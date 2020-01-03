'use strict';

module.exports = config => {
	const utils = require('./utilsV2')(config);

	function getRealtimeStockPrice(params) {
		return utils.get_data('stock/realtime', params);
	}
	
	function getHistoricalStockPrice(params) {
		return utils.get_data('stock/historical', params);
	}
	
	return {
		getRealtimeStockPrice,
		getHistoricalStockPrice
	};
};