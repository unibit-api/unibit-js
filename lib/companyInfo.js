'use strict';

module.exports = config => {
  const utils = require('./utils')(config);

  return {
    getCompanyFinancials: (ticker, params) => utils.get_data('financials/', ticker, params),
    getCompanyProfile: (ticker) => utils.get_data('companyprofile/', ticker),
    getCompanyFinancialSummary: (ticker) => utils.get_data('financials/summary/', ticker),
    getOwnershipStructure: (ticker, params) => utils.get_data('ownership/', ticker, params),
    getInsiderTransactions: (ticker) => utils.get_data('insidertrading/', ticker),
    getCIKNumber: (ticker) => utils.get_data('company/cik/', ticker),
    getSECFilingLinks: (ticker) => utils.get_data('company/sec/', ticker)
  };
};