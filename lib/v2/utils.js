'use strict';

const axios = require('axios');

module.exports = config => {
  /**
   * Construct URL from api_url, ticker and other params
   */
  const construct_url = (api_url, query_params) => {
    api_url = api_url || "";

    query_params = Object.keys(query_params || {})
      .map(key => {
        let value = query_params[key];
        if (value !== undefined) {
          return `&${key}=${value}`;
        }
        return undefined;
      })
      .filter(value => value !== undefined)
      .join('');

    return `${config.base_url + api_url}?accessKey=${config.AccessKey}${query_params}`;
  };

  /**
   * Request Template Function
   */
  const get_data = (api_url, ticker, params) => {
    return new Promise((resolve, reject) => {
      axios.get(construct_url(api_url, ticker, params))
        .then(response => {
          // handle success
          resolve(response.data);
        })
        .catch(error => {
          // handle error
          reject(error.response.data);
        });
    })
  };

  return {
    construct_url,
    get_data
  };
};