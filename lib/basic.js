'use strict';

module.exports = config => {
  const utils = require('./utils')(config);

  return {
    welcomeToUnibit: () => utils.get_data()
  };
};