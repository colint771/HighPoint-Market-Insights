const apiKey = '2259296caamsha3a762d7515a724p19faecjsne57da4f0abd4';

// auto fill
fetch('https://ms-finance.p.rapidapi.com/market/v2/auto-complete?q=SPX&rapidapi-key=' + apiKey)
//response	
	.then((response) => {
 		return response.json()
    })
// complete data stream
	.then((data) => {
        console.log(data)
    })
	.catch((error) => {
        console.error(error)
	});

fetch('https://ms-finance.p.rapidapi.com/market/v2/get-movers?rapidapi-key=' + apiKey)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data)
		let HTML = ""
		for (let i=0; i < data.gainers.length; i++){
			HTML += "<p>" + data.gainers[i].ticker + " " + data.gainers[i].lastPrice + " " + data.gainers[i].percentNetChange + "</p>"
		}
		document.getElementById ("gainers").innerHTML += HTML
	})
	.catch((err) => {
		console.error(err)
	});

// get movers
// fetch('https://ms-finance.p.rapidapi.com/market/v2/get-movers?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});


// get-returns
// fetch('https://ms-finance.p.rapidapi.com/market/v2/get-returns?performanceIds=0P0000OQN8%2C0P000000GY&rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// get real time data
fetch('https://ms-finance.p.rapidapi.com/market/v2/get-realtime-data?performanceIds=0P0000OQN8%2C0P000000GY&rapidapi-key=' + apiKey)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data)
	})
	.catch((err) => {
		console.error(err)
	});

// // get time series
// fetch('https://ms-finance.p.rapidapi.com/market/v2/get-time-series?performanceIds=0P0000OQN8%2C0P000000GY?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get summary
// fetch('https://ms-finance.p.rapidapi.com/market/get-summary&rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// get global indices
fetch('https://ms-finance.p.rapidapi.com/market/get-global-indices?performanceIds=0P0000OQN8%2C0P000000GY&rapidapi-key=' + apiKey)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data)
	})
	.catch((err) => {
		console.error(err)
	});

// // real time data
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-realtime-data?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	}); 

// // mini - chart - data 
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-mini-chart-realtime-data?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get security info
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-security-info?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get fair value
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-price-fair-value?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get key stats
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-key-stats?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get analysis report
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-analysis-report?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get trailing total returns
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-trailing-total-returns?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get analysit data 
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-analysis-data?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get financials 
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-financials?performanceId=0P0000OQN8&interval=annual&reportType=A?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get splits
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-splits?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get executives
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-executive?performanceId=0P0000OQN8&executive=keyExecutives?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get mini chart quote
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-mini-chart-quote?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get profile
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-profile?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get ownership 
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-ownership?performanceId=0P0000OQN8&ownership=ConcentratedOwners&asset=mutualfund?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get valuation
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-valuation?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});
// // get dividends
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-dividends?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get short interest
// fetch('https://ms-finance.p.rapidapi.com/market/get-global-indices?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get operating perfromance
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-short-interest?performanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get instruments
// fetch('https://ms-finance.p.rapidapi.com/stock/v2/get-instruments?instrumentIds=126.1.TSLA%2C213.1.BMW%2C126.1.F%2C126.1.GM?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get detail
// fetch('https://ms-finance.p.rapidapi.com/stock/get-detail?PerformanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // get histories
// fetch('https://ms-finance.p.rapidapi.com/stock/get-histories?PerformanceId=0P0000OQN8?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// Articles 
// article list
// fetch('https://ms-finance.p.rapidapi.com/articles/list?performanceId=0P0000OQN8&rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 		let HTML = ""
// 		var newsArray = [20];
// 		for (let i=0; i < data.news.length; i++) {
// 			HTML += "<p>" + data.news[i].title + " " + data.news[i].providerName + " " + data.news[i].sourceName + " " + data.news[i].publishedDate + "</p>"
// 		}
// 		document.getElementById ("news").innerHTML += HTML
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // article get details
// fetch('https://ms-finance.p.rapidapi.com/articles/get-details?id=981538?rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// // News
// // news list
fetch('https://ms-finance.p.rapidapi.com/news/list?performanceId=0P0000OQN8&rapidapi-key=' + apiKey)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data)
		let HTML = ""
		for (let i=0; i < data.news.length; i++) {
			HTML += "<p>" + data.news[i].title + " " + data.news[i].providerName + " " + data.news[i].sourceName + " " + data.news[i].publishedDate + "</p>"
		}
		document.getElementById ("news").innerHTML += HTML
	})
	.catch((error) => {
		console.error(error)
	});

// news get detail
// fetch('https://ms-finance.p.rapidapi.com/news/get-details?id=20220217655&sourceId=marketwatch&rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 	var news = []
// 	if (news.length > 0) {
// 		console.log(data)
// 		let HTML = ""
// 		for (let i=0; i < data.news.length; i++) {
// 			HTML += "<p>" + data.news[i].title + " " + data.news[i].providerName + " " + data.news[i].sourceName + " " + data.news[i].publishedDate + "</p>"
// 		}
// 		document.getElementById ("news").innerHTML += HTML
// 	} else {
// 		console.log("Not Available")
// 	}
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

// only fetch on user input or fetch in groupings
