'use strict';

const AccessKey = "demo";

/**
 * Main API Module
 */
module.exports = config => {
  // config base url
	config.base_url_v2 = "https://api.unibit.ai/v2/";
	config.base_url = "https://api.unibit.ai/api/";
  // entry point for all modules
	return {
		utils: require("./lib/utils")(config),
		basic: require("./lib/basic")(config),
		stockPrice: require("./lib/stockPrice")(config),
		companyInfo: require("./lib/companyInfo")(config),
		news: require("./lib/news")(config),
		forex: require("./lib/forex")(config),
		crypto: require("./lib/crypto")(config),
		reference: require("./lib/reference")(config),
		utilsV2: require("./lib/utilsV2")(config),
		stockV2: require("./lib/stockV2")(config),
		basicV2: require("./lib/basicV2")(config),
		companyV2: require("./lib/companyV2")(config),
		newsV2: require("./lib/newsV2")(config),
		corporateV2: require("./lib/corporateV2")(config)
	};
};