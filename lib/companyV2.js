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

    return {
        getCompanyFinancials,
        getCompanyProfile,
        getCompanyFinancialSummary
    };
};