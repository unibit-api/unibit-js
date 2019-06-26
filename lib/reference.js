'use strict';

module.exports = config => {
    const utils = require('./utils')(config);

    function getAssetCoverage(params) {
        let exchange;
        if (!params) {
            return new Promise((resolve, reject) => {
                reject("exchange is required!");
            });
        } else if (params && params.exchange) {
            exchange = params.exchange;
        } else {
            return new Promise((resolve, reject) => {
                reject("exchangeis required!");
            });
        }
        return utils.get_data('companylist', "", params)
    }

    return {
        getAssetCoverage,
        getCIKNumber: (ticker, params) => utils.get_data('company/cik/', ticker, params),

    };
};