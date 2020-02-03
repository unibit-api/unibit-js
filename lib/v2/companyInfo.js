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

  return {
    getCompanyFinancials,
    getCompanyProfile,
    getCompanyFinancialSummary,
    getOwnershipStructure,
    getInsiderTransactions: (ticker) => utils.get_data('insidertrading/', ticker),
    getCIKNumber: (ticker) => utils.get_data('company/cik/', ticker),
    getSECFilingLinks: (ticker) => utils.get_data('company/sec/', ticker)
  };
};