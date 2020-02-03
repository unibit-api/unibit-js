// Please replace the demo key with your own Access Key
const unibit = require("unibit-js")({ AccessKey: "demo" }).v2;

// some APIs require more parameters than just a ticker
let params = {};

/***********************************************
 * Basic
 ***********************************************/
// GET welcome message
unibit.basic.welcomeToUnibit()
  .then((data) => {
    console.log("result 1 is: ", data);
  })
  .catch(error => {
    console.log("error 1 is: ", error);
  });

/***********************************************
 * Stock Price
 ***********************************************/
// 1. GET real time stock price
// params = {
//   tickers: "AMZN",
// }
// unibit.stockPrice.getPricesRealTime(params)
//   .then(data => {
//     console.log("result 2 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 2 is: ", error);
//   });

// 2. GET historical stock price
// params = {
//   tickers: "AMZN"
// };
// unibit.stockPrice.getPricesHistorical(params)
//   .then(data => {
//     console.log("result 3 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 3 is: ", error);
//   });

/***********************************************
 * Company Info
 ***********************************************/
// 3. GET company financials
// params = {
//   tickers: "AMZN"
// };
// unibit.companyInfo.getCompanyFinancials(params)
//   .then(data => {
//     console.log("result 4 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 4 is: ", error);
//   });

// 4. GET company profile
// params = {
//   tickers: "AMZN"
// };
// unibit.companyInfo.getCompanyProfile(params)
//   .then(data => {
//     console.log("result 5 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 5 is: ", error);
//   });

// 5. GET company financial summary
// params = {
//   tickers: "AMZN"
// };
// unibit.companyInfo.getCompanyFinancialSummary(params)
//   .then(data => {
//     console.log("result 6 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 6 is: ", error);
//   });

// 6. GET company ownership structure
// params = {
//   tickers: "AMZN",
//   ownershipType: "majority_holder" // majority_holder, top_institutional_holder, top_mutual_fund_holder
// };
// unibit.companyInfo.getOwnershipStructure(params)
//   .then(data => {
//     console.log("result 7 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 7 is: ", error);
//   });

// 7. GET insider transactions
// params = {
//   tickers: "AMZN"
// };
// unibit.companyInfo.getInsiderTransactions(params)
//   .then(data => {
//     console.log("result 8 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 8 is: ", error);
//   });

// 8. GET company CIK number
// unibit.companyInfo.getCIKNumber("AMZN")
//   .then(data => {
//     console.log("result 9 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 9 is: ", error);
//   });

// 9. GET SEC filing links
// params = {
//   tickers: "AMZN"
// };
// unibit.companyInfo.getSECFilingLinks(params)
//   .then(data => {
//     console.log("result 10 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 10 is: ", error);
//   });

/***********************************************
 * News
 ***********************************************/
// 10. GET latest stock news
// params = {
//   tickers: "AMZN"
// };
// unibit.companyInfo.getStockNews(params)
//   .then(data => {
//     console.log("result 11 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 11 is: ", error);
//   });

// 11. GET stock news and news analysis
// params = {
//   interval: "realtime" // realtime, 1w, 1m, 3m
// };
// unibit.news.getStockNewsAnalysis("AMZN", params)
//   .then(data => {
//     console.log("result 12 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 12 is: ", error);
//   });

/***********************************************
 * Actions
 ***********************************************/
// 12. GET Company Splits
// params = {
//   startDate: "2019-08-25",
//   endDate: "2019-08-26"
// };
// unibit.companyInfo.getCorporateSplits(params)
//   .then(data => {
//     console.log("result 13 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 13 is: ", error);
//   });

// 13. GET Corporate Dividends
// params = {
//   startDate: "2019-08-25",
//   endDate: "2019-08-26"
// };
// unibit.companyInfo.getCorporateDividends(params)
//   .then(data => {
//     console.log("result 13 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 13 is: ", error);
//   });

/***********************************************
 * Analytics
 ***********************************************/
// 14. GET Stock Analyst Ratings
// params = {
//   tickers: "AAPL",
//   startDate: "2020-01-02",
//   endDate: "2020-01-03",
// }
// unibit.analytics.getStockAnalystRatings(params)
//   .then(data => {
//     console.log("result 15 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 15 is: ", error);
//   });

/***********************************************
 * Crypto
 ***********************************************/
// 15. GET Historical Crypto Price
// params = {
//   tickers: "BCH-USD,BNB-USD"
// }
// unibit.crypto.getHistoricalCryptoPrice(params)
//   .then(data => {
//     console.log("result 16 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 16 is: ", error);
//   });

/***********************************************
 * Forex
 ***********************************************/
// 16. GET Realtime Forex Rates
// params = {
//   base: "usd"
// }
// unibit.forex.getRealtimeForexPrice(params)
//   .then(data => {
//     console.log("result 17 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 17 is: ", error);
//   });

// 17. GET Historical Forex Rates
// params = {
//   base: "usd"
// }
// unibit.forex.getHistoricalForexPrice(params)
//   .then(data => {
//     console.log("result 18 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 18 is: ", error);
//   });

/***********************************************
 * Reference
 ***********************************************/
// 18. GET Stock Coverage
// params = {}
// unibit.reference.getStockCoverage(params)
//   .then(data => {
//     console.log("result 19 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 19 is: ", error);
//   });

// 19. GET Futures and Commodities Coverage
// params = {}
// unibit.reference.getFuturesAndCommoditiesCoverage(params)
//   .then(data => {
//     console.log("result 20 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 20 is: ", error);
//   });

// 20. GET Crypto Coverage
// params = {}
// unibit.reference.getCryptoCoverage(params)
//   .then(data => {
//     console.log("result 21 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 21 is: ", error);
//   });