'use strict';

module.exports = config => {
	const utils = require('./utilsV2')(config);

	function getHistoricalCryptoPrice(params) {
		return utils.get_data('crypto/historical', params);
	}

	return {
		getHistoricalCryptoPrice
	};
};