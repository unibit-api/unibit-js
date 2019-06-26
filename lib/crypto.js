'use strict';

module.exports = config => {
    const utils = require('./utils')(config);

    function getHistoricalCryptoPrice(ticker, params) {
        let range, interval;
        if (!params) {
            return new Promise((resolve, reject) => {
                reject("range and interval are required!");
            });
        }
        else if (params && params.range && params.interval) {
            range = params.range;
            interval = params.interval;
        } else if (!params.range) {
            return new Promise((resolve, reject) => {
                reject("range is required!");
            });
        } else {
            return new Promise((resolve, reject) => {
                reject("interval is required!");
            });
        }

        return utils.get_data('historicalcryptoprice/', ticker, params);
    }
    return {
        getHistoricalCryptoPrice
    };
};