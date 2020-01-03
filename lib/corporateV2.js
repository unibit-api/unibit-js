'use strict';

module.exports = config => {
	const utils = require('./utilsV2')(config);

	function getCorporateSplits(params) {
//	    let startDate;
//	    let endDate;
	    if (!params) {
	        return new Promise((resolve, reject) =>{
	            reject("startDate and endDate are required!");
	        });
	    } else if (!params.startDate || !params.endDate) {
	        return new Promise((resolve, reject) =>{
            	reject("startDate and endDate are required!");
            });
	    }
		return utils.get_data('company/actions/splits', params);
	}

	function getCorporateDividends(params) {
	    if (!params) {
    	    return new Promise((resolve, reject) =>{
    	         reject("startDate and endDate are required!");
    	    });
    	} else if (!params.startDate || !params.endDate) {
    	    return new Promise((resolve, reject) =>{
                 reject("startDate and endDate are required!");
            });
    	}
		return utils.get_data('company/actions/dividends', params);
	}

	return {
		getCorporateSplits,
		getCorporateDividends
	};
};