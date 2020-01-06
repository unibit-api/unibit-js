'use strict';

module.exports = config => {
	const utils = require('./utilsV2')(config);

	function getStockCoverage(params) {
		return utils.get_data('ref/companyList', params);
	}

	function getCryptoCoverage(params) {
		return utils.get_data('ref/cryptoList', params);
	}

	return {
		getStockCoverage,
		getCryptoCoverage
	};
};