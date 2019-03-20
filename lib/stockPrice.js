'use strict';

module.exports = config => {
  const utils = require('./utils')(config);

  return {
    getPricesRealTime: (ticker) => utils.get_data('realtimestock/', ticker),
    getPricesHistorical: (ticker, params) => utils.get_data('historicalstockprice/', ticker, params)
  };
};