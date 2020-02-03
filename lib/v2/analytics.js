'use strict';

module.exports = config => {
  const utils = require('./utils')(config);

  return {
    getStockAnalystRatings: (params) => utils.get_data('analytics/us', params)
  };
};