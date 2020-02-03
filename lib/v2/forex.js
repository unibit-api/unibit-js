'use strict';

module.exports = config => {
    const utils = require('./utils')(config);

    function getRealtimeForexPrice(params) {
        if (!params || !params.base) {
            return new Promise((resolve, reject) => {
                reject("base is required!");
            });
        }

        return utils.get_data('forex/realtime', params);
    }
    
    function getHistoricalForexPrice(params) {
        if (!params || !params.base) {
            return new Promise((resolve, reject) => {
                reject("base is required!");
            });
        }

        return utils.get_data('forex/historical', params);
    }

    return {
        getRealtimeForexPrice,
        getHistoricalForexPrice
    };
};