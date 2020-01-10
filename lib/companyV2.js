'use strict';

module.exports = config => {
    const utils = require('./utilsV2')(config);

    function getCompanyFinancials(params) {
        return utils.get_data('company/financials', params);
    }

    function getCompanyProfile(params) {
        return utils.get_data('company/profile', params);
    }

    function getCompanyFinancialSummary(params) {
        return utils.get_data('company/financialSummary', params);
    }

    function getOwnershipStructure(params) {
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
        return utils.get_data('company/ownership', params);
    }

    function getInsiderTransaction(params) {
        return utils.get_data('company/insiderTransaction', params);
    }

    function getSECFilingLink(params) {
        return utils.get_data('company/secFilingLink', params);
    }

    return {
        getCompanyFinancials,
        getCompanyProfile,
        getCompanyFinancialSummary,
        getOwnershipStructure,
        getInsiderTransaction,
        getSECFilingLink
    };
};