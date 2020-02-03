'use strict';

module.exports = config => {
    const utils = require('./utils')(config);
    
    return {
        getStockCoverage: (params) => utils.get_data("ref/companyList", params),
        getFuturesAndCommoditiesCoverage: (params) => utils.get_data("ref/commodityList", params),
        getCryptoCoverage: (params) => utils.get_data("ref/cryptoList", params),
    };
};