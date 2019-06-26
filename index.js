'use strict';

const AccessKey = "demo";

/**
 * Main API Module
 */
module.exports = config => {
  // config base url
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
    reference: require("./lib/reference")(config)
  };
};