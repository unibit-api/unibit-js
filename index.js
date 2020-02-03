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
    utils: require("./lib/utils")(config_v1),
    basic: require("./lib/basic")(config_v1),
    stockPrice: require("./lib/stockPrice")(config_v1),
    companyInfo: require("./lib/companyInfo")(config_v1),
    news: require("./lib/news")(config_v1),
    forex: require("./lib/forex")(config_v1),
    crypto: require("./lib/crypto")(config_v1),
    reference: require("./lib/reference")(config_v1)
  };
};