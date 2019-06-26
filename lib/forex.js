'use strict';

module.exports = config => {
    const utils = require('./utils')(config);

    return {
        getRealtimeForexPrice: (base, params) => utils.get_data('forexrealtime/', base, params)

    };
};