const unibit = require("unibit-js")({ AccessKey: "MSALfY3RdKes9bAx6aXxv9s7jRakbE00" });

// /* SUCCESS */
// unibit.stockPrice.getPricesRealTime("AAPL", { datatype: "csv" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCESS */
// unibit.stockPrice.getPricesHistorical("FB", { range: "1m", interval: "10" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCCESS  */
// unibit.stockPrice.getTechnicalIndicators("AAPL", { function: "SMA", interval: "10", range: "10", data_point: "5", series_type: "High" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCESS */
// unibit.stockPrice.getCompanyFinancials("AAPL", { range: "1m", interval: "annual", type: "income_statement" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCESS  */
// unibit.stockPrice.getCompanyProfile("AAPL", { datatype: "csv" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCESS */
// unibit.stockPrice.getCompanyFinancialSummary("AAPL", { datatype: "json" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });


// /* SUCCESS */
// unibit.stockPrice.getOwnershipStructure("AAPL", { ownership_type: "top_mutual_fund_holder" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCESS */
// unibit.stockPrice.getInsiderTransaction("AAPL", { size: "10", datatype: "json" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

/* SUCCESS */
unibit.stockPrice.getSECFilingLink("AAPL")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


// /* SUCCESS */
// unibit.stockPrice.getOwnershipStructure("AAPL", { ownership_type: "majority_holder" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });


// /* SUCCESS */
// unibit.stockPrice.getStockNewsByClassification("AAPL", { event_genre: "M&A", range: "1w" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCESS */
// unibit.stockPrice.getStockNewsByNameEntities("AAPL", { range: "1m" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCESS */
// unibit.forex.getRealtimeForexPrice("USD", { currency: "CNY", amount: "100", size: "20" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCESS */
// unibit.crypto.getHistoricalCryptoPrice("LTC", { range: "3m", interval: "10" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// unibit.reference.getAssetCoverage({ exchange: "ASX" })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// /* SUCCESS */
// unibit.reference.getCIKNumber("AAPL")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });