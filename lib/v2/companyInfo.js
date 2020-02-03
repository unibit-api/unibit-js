'use strict';

module.exports = config => {
  const utils = require('./utils')(config);

  function getCompanyFinancials(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }
    return utils.get_data('company/financials', params);
  }

  function getCompanyProfile(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }
    return utils.get_data('company/profile', params);
  }

  function getCompanyFinancialSummary(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }
    return utils.get_data('company/financialSummary', params);
  }

  function getOwnershipStructure(params) {
    if (!params) {
      return new Promise((resolve, reject) => {
        reject("tickers and ownershipType are required!");
      });
    } else if (!params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    } else if (!params.ownershipType) {
      return new Promise((resolve, reject) => {
        reject("ownershipType are required!");
      });
    }

    return utils.get_data('company/ownership', params);
  }

  function getInsiderTransactions(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }
    return utils.get_data('company/insiderTransaction', params);
  }

  function getSECFilingLinks(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }
    return utils.get_data('company/secFilingLink', params);
  }

  function getStockNews(params) {
    if (!params || !params.tickers) {
      return new Promise((resolve, reject) => {
        reject("tickers are required!");
      });
    }
    return utils.get_data('company/news', params);
  }

  function getCorporateSplits(params) {
    if (!params) {
      return new Promise((resolve, reject) => {
        reject("startDate and endDate are required!");
      });
    } else if (!params.startDate) {
      return new Promise((resolve, reject) => {
        reject("startDate is required!");
      });
    } else if (!params.endDate) {
      return new Promise((resolve, reject) => {
        reject("endDate is required!");
      });
    }

    return utils.get_data('company/actions/splits', params);
  }

  function getCorporateDividends(params) {
    if (!params) {
      return new Promise((resolve, reject) => {
        reject("startDate and endDate are required!");
      });
    } else if (!params.startDate) {
      return new Promise((resolve, reject) => {
        reject("startDate is required!");
      });
    } else if (!params.endDate) {
      return new Promise((resolve, reject) => {
        reject("endDate is required!");
      });
    }

    return utils.get_data('company/actions/dividends', params);
  }

  return {
    getCompanyFinancials,
    getCompanyProfile,
    getCompanyFinancialSummary,
    getOwnershipStructure,
    getInsiderTransactions,
    // Obsolete
    // getCIKNumber: (ticker) => utils.get_data('company/cik/', ticker),
    getSECFilingLinks,
    getStockNews,
    getCorporateSplits,
    getCorporateDividends
  };
};