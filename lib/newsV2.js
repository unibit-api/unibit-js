'use strict';

module.exports = config => {
    const utils = require('./utilsV2')(config);

    function getStockNews(params) {
        return utils.get_data('company/news', params);
    }

    return {
        getStockNews
    };
};