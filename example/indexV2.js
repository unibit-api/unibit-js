const unibit = require("unibit-js")({ AccessKey: "demo" });

/*
Version 2 test cases
*/
// let params = {
// 	tickers: "AAPL",
// 	startDate: "2019-10-30",
// 	endDate: "2019-10-30",
// 	startMinute: "09:30:00",
// 	endMinute: "16:00:00",
// 	selectedField: "all"
// }

// unibit.stockV2.getRealtimeStockPrice(params)
// 	.then((data) => {
// 		console.log("result 1 is: ", data);
// 	})
// 	.catch(error => {
// 		console.log("error 1 is: ", error);
// 	});
//
//let params = {
//	tickers: "AAPL,WORK",
//	startDate: "2019-10-30",
//	endDate: "2019-10-30",
//	interval: 1,
//	selectedField: "all"
//}
//
//unibit.stockV2.getHistoricalStockPrice(params)
//	.then((data) => {
//		console.log("result 1 is: ", data);
//	})
//	.catch(error => {
//		console.log("error 1 is: ", error);
//	});
//
//let params = {
//	tickers: "AAPL,WORK",
//	startDate: "2019-03-25",
//	endDate: "2019-08-30",
//	statement: "all",
//	interval: "quarterly",
//	selectedField: "all"
//}
//
//unibit.companyV2.getCompanyFinancials(params)
//	.then((data) => {
//		console.log("result 1 is: ", data);
//	})
//	.catch(error => {
//		console.log("error 1 is: ", error);
//	});
//
//let params = {
//	tickers: "AAPL,WORK",
//	selectedField: "all"
//}
//
//unibit.companyV2.getCompanyProfile(params)
//	.then((data) => {
//		console.log("result 1 is: ", data);
//	})
//	.catch(error => {
//		console.log("error 1 is: ", error);
//	});
//
//let params = {
//	tickers: "AAPL,WORK",
//	selectedField: "all"
//}
//
//unibit.companyV2.getCompanyFinancialSummary(params)
//	.then((data) => {
//		console.log("result 1 is: ", data);
//	})
//	.catch(error => {
//		console.log("error 1 is: ", error);
//	});
//
//let params = {
//	tickers: "AAPL,WORK",
//	startDate: "2019-07-25",
//	endDate: "2019-08-30",
//	selectedField: "all"
//}
//
//unibit.companyV2.getSECFilingLink(params)
//	.then((data) => {
//		console.log("result 1 is: ", data);
//	})
//	.catch(error => {
//		console.log("error 1 is: ", error);
//	});

let params = {
	tickers: "AAPL,WORK",
	genre: "partnership",
	sector: "technology",
	selectedField: "all"
}

unibit.newsV2.getStockNews(params)
	.then((data) => {
		console.log("result 1 is: ", data);
	})
	.catch(error => {
		console.log("error 1 is: ", error);
	});