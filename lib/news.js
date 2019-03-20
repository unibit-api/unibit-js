'use strict';

module.exports = config => {
  const utils = require('./utils')(config);

  return {
    getLatestStockNews: (ticker) => utils.get_data('news/latest/', ticker),
    getStockNewsAnalysis: (ticker, params) => utils.get_data('news/', ticker, params),
  };
};