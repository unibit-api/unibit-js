'use strict';

module.exports = config => {
  const utils = require('./utilsV2')(config);

  return {
    welcomeToUnibit: () => utils.get_data()
  };
};