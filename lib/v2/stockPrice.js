'use strict';

module.exports = config => {
  const utils = require('./utils')(config);

  function getPricesRealTime(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }
    return utils.get_data('stock/realtime', params)
  }

  function getUsPricesRealTime(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }
    return utils.get_data('stock/us/realtime', params)
  }

  function getPricesHistorical(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }

    return utils.get_data('stock/historical', params);
  }

  function getCompanyFinancials(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }
    return utils.get_data('company/financials', params);
  }

  return {
    getPricesRealTime,
    getUsPricesRealTime,
    getPricesHistorical,
    getCompanyFinancials,
  };
};