'use strict';

const AccessKey = "demo";

/**
 * Main API Module
 */
module.exports = config => {
  // config Object
  let config_v1 = {
    ...config,
    base_url : "https://api.unibit.ai/api/"
  };

  let config_v2 = {
    ...config, 
    base_url : "https://api.unibit.ai/v2/"
  }
  // config.base_url = "https://api.unibit.ai/api/";f

  // entry point for all modules
  return {
    v1: {
      utils: require("./lib/utils")(config_v1),
      basic: require("./lib/basic")(config_v1),
      stockPrice: require("./lib/stockPrice")(config_v1),
      companyInfo: require("./lib/companyInfo")(config_v1),
      news: require("./lib/news")(config_v1),
      forex: require("./lib/forex")(config_v1),
      crypto: require("./lib/crypto")(config_v1),
      reference: require("./lib/reference")(config_v1)
    },
    v2: {
      utils: require("./lib/v2/utils")(config_v2),
      basic: require("./lib/v2/basic")(config_v2),
      stockPrice: require("./lib/v2/stockPrice")(config_v2),
      companyInfo: require("./lib/v2/companyInfo")(config_v2),
      analytics: require("./lib/v2/analytics")(config_v2),
      // news: require("./lib/v2/news")(config_v2),
      // forex: require("./lib/forex")(config_v2),
      // crypto: require("./lib/crypto")(config_v2),
      // reference: require("./lib/reference")(config_v2)
    }
  };
};