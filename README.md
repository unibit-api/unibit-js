# unibit

*A Javascript module to get stock data and news from the UniBit API*

UniBit is a free API that provides real time and historical financial data, as well as financial news. This SDK is a quick starter for the UniBit API (https://www.unibit.ai) which has Javascript functions (return a Promise) for each available API call. For the UniBit API documentation, visit (https://unibit.ai/docs/V2.0/introduction)

To get started, sign up at (https://unibit.ai/signin) to request a free access key. With a free key, all non-news API features are available with generous rate limits.

The UniBit Stock News API requires a premium account, but in return gives a wealth of news articles on all 8000 US-listed companies. Along with this, UniBit provides analyses on each news article. With deep learning, each article is classified into a comprehensive genre list, and named entities and sentiment are also extracted. 

## Install
To install UniBit, type:
```shell
npm install --save unibit-js
```

## Examples

Get the real time price of Apple (AAPL)

```javascript
const unibit = require("unibit-js")({ AccessKey: "demo" }).v2;

params = {
  tickers: "AAPL",
}
unibit.stockPrice.getPricesRealTime(params)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

Get Apple's Company Profile

```javascript
const unibit = require("unibit-js")({ AccessKey: "demo" }).v2;

params = {
  tickers: "AAPL"
};
unibit.companyInfo.getCompanyProfile(params)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

Get the latest news on Apple

```javascript
const unibit = require("unibit-js")({ AccessKey: "demo" }).v2;

params = {
  tickers: "AAPL"
};
unibit.companyInfo.getStockNews(params)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```
## Contribute

In the UniBit Javascript SDK, we not only want to wrap the UniBit API, but open source methods of stock analysis, be it with some fancy quantitative strategy, with graphing, or with machine learning. Propose something in an issue or contact me at chenfeng@unibit.ai if you want to help!
