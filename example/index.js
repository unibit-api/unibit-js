// Please replace the demo key with your own Access Key
const unibit = require("unibit-js")({ AccessKey: "demo" });

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
// unibit.stockPrice.getPricesRealTime("AMZN")
//   .then(data => {
//     console.log("result 2 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 2 is: ", error);
//   });

// 2. GET historical stock price
// params = {
//   range: "1m", // 1m, 3m, 1y, 3y, 5y, 10y, 20y
//   interval: "1", // 1, 2, 3, 4, 5...
// };
// unibit.stockPrice.getPricesHistorical("AMZN", params)
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
//   type: "income_statement", // income_statement, balance_sheet, cash_flow
//   interval: "annual" // annual, quarterly
// };
// unibit.companyInfo.getCompanyFinancials("AMZN", params)
//   .then(data => {
//     console.log("result 4 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 4 is: ", error);
//   });

// 4. GET company profile
// unibit.companyInfo.getCompanyProfile("AMZN")
//   .then(data => {
//     console.log("result 5 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 5 is: ", error);
//   });

// 5. GET company financial summary
// unibit.companyInfo.getCompanyFinancialSummary("AMZN")
//   .then(data => {
//     console.log("result 6 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 6 is: ", error);
//   });

// 6. GET company ownership structure
// params = {
//   ownership_type: "majority_holder" // majority_holder, top_institutional_holder, top_mutual_fund_holder
// };
// unibit.companyInfo.getOwnershipStructure("AMZN", params)
//   .then(data => {
//     console.log("result 7 is: ", data);
//   })
//   .catch(error => {
//     console.log("error 7 is: ", error);
//   });

// 7. GET insider transactions
// unibit.companyInfo.getInsiderTransactions("AMZN")
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
// unibit.companyInfo.getSECFilingLinks("AMZN")
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
// unibit.news.getLatestStockNews("AMZN")
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
