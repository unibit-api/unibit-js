'use strict';

module.exports = config => {
  const utils = require('./utils')(config);

  function getPricesHistorical(ticker, params) {
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

    return utils.get_data('historicalstockprice/', ticker, params);
  }

  function getTechnicalIndicators(ticker, params) {
    let functionName, interval, range, data_point, series_type;
    if (!params) {
      return new Promise((resolve, reject) => {
        reject("function, interval, range, data_point, series_type are required!");
      });
    } else if (params && params["function"] && params.interval && params.range && params.data_point && params.series_type) {
      range = params.range;
      interval = params.interval;
      functionName = params["function"];
      data_point = params.data_point;
      series_type = params.series_type;
      /* what if the parameter is "function" */
    } else if (!params["function"]) {
      return new Promise((resolve, reject) => {
        reject("function is required!");
      });
    } else if (!params.interval) {
      return new Promise((resolve, reject) => {
        reject("interval is required!");
      });
    } else if (!params.range) {
      return new Promise((resolve, reject) => {
        reject("range is required!");
      });
    } else if (!params.data_point) {
      return new Promise((resolve, reject) => {
        reject("data_point is required!");
      });
    } else {
      return new Promise((resolve, reject) => {
        reject("series_type is required!");
      });
    }
    return utils.get_data('technicalindicators/', ticker, params);
  }

  function getCompanyFinancials(ticker, params) {
    let type, range, interval;
    if (!params) {
      return new Promise((resolve, reject) => {
        reject("type, range and interval are required!");
      });
    } else if (params && params.type && params.range && params.interval) {
      range = params.range;
      interval = params.interval;
    } else if (!params.range) {
      return new Promise((resolve, reject) => {
        reject("range is required!");
      });
    } else if (!params.type) {
      return new Promise((resolve, reject) => {
        reject("type is required!");
      });
    } else {
      return new Promise((resolve, reject) => {
        reject("interval is required!");
      });
    }

    return utils.get_data('financials/', ticker, params);
  }
  function getOwnershipStructure(ticker, params) {
    let ownership_type;
    if (!params) {
      return new Promise((resolve, reject) => {
        reject("ownership_type is required!");
      });
    } else if (params && params.ownership_type) {
      ownership_type = params.ownership_type;
    } else if (!params.ownership_type) {
      return new Promise((resolve, reject) => {
        reject("ownership_type is required!");
      });
    }
    return utils.get_data('ownership/', ticker, params);
  }

  function getStockNewsByClassification(ticker, params) {
    let range;
    if (!params) {
      return new Promise((resolve, reject) => {
        reject("range is required!");
      });
    } else if (params && params.range) {
      range = params.range;
    } else {
      return new Promise((resolve, reject) => {
        reject("range is required!");
      });
    }

    return utils.get_data('news/classification/', ticker, params)
  }

  function getStockNewsByNameEntities(ticker, params) {
    let range;
    if (!params) {
      return new Promise((resolve, reject) => {
        reject("range is required!");
      });
    } else if (params && params.range) {
      range = params.range;
    } else {
      return new Promise((resolve, reject) => {
        reject("range is required!");
      });
    }

    return utils.get_data('news/entities/', ticker, params)
  }
  return {
    getPricesRealTime: (ticker, params) => utils.get_data('realtimestock/', ticker, params),
    getPricesHistorical,
    getTechnicalIndicators,
    getCompanyFinancials,
    getCompanyProfile: (ticker, params) => utils.get_data('companyprofile/', ticker, params),
    getCompanyFinancialSummary: (ticker, params) => utils.get_data('financials/summary/', ticker, params),
    getOwnershipStructure,
    getInsiderTransaction: (ticker, params) => utils.get_data('insidertrading/', ticker, params),
    getSECFilingLink: (ticker) => utils.get_data('company/sec/', ticker, params),
    getLatestStockNews: (ticker, params) => utils.get_data('news/latest/', ticker, params),
    getStockNewsByClassification,
    getStockNewsBySentiment: (ticker, params) => utils.get_data('news/sentiment/', ticker, params),
    getStockNewsByNameEntities,

  };
};