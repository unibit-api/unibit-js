'use strict';

module.exports = config => {
    const utils = require('./utils')(config);

    function getHistoricalCryptoPrice(params) {
        if (!params || !params.tickers) {
            return new Promise((resolve, reject) => {
                reject("tickers are required!");
            });
        }

        return utils.get_data('crypto/historical', params);
    }
    return {
        getHistoricalCryptoPrice
    };
};