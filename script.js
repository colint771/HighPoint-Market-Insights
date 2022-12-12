showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides-fade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }}
  slideIndex = 0;
  let slides = document.getElementsByClassName("mySlides-fade");
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  

const apiKey = '2259296caamsha3a762d7515a724p19faecjsne57da4f0abd4';

gainers, actives, losers
fetch('https://ms-finance.p.rapidapi.com/market/v2/get-movers?rapidapi-key=' + apiKey)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data)
		let HTML = ""
	// gainers
		for (let i=0; i < data.gainers.length; i++){
			HTML += "<div>" + data.gainers[i].ticker + " " + '$' + data.gainers[i].lastPrice + " " + data.gainers[i].percentNetChange + '%' + "</div>"
		}
		document.getElementById ("gainers").innerHTML += HTML
	})
	.catch((err) => {
		console.error(err)
	});

	//actives
fetch('https://ms-finance.p.rapidapi.com/market/v2/get-movers?rapidapi-key=' + apiKey)
    .then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data)
		let HTML = ""
		for (let i=0; i < data.actives.length; i++){
			HTML += "<div>" + data.actives[i].ticker + " " + '$' + data.actives[i].lastPrice + " " + data.actives[i].percentNetChange + '%' + "</div>"
		}
		document.getElementById ("actives").innerHTML += HTML
	})
	.catch((err) => {
		console.error(err)
	});
	 	//losers
fetch('https://ms-finance.p.rapidapi.com/market/v2/get-movers?rapidapi-key=' + apiKey)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data)
		let HTML = ""
		for (let i=0; i < data.losers.length; i++){
			HTML += "<div>" + data.losers[i].ticker + " " + '$' + data.losers[i].lastPrice + " " + data.losers[i].percentNetChange + '%' + "</div>"
		}
		document.getElementById ("losers").innerHTML += HTML
	})
	.catch((err) => {
		console.error(err)
	});

// // crypto coin list
 fetch('https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list?edition_currency_id=12&time_utc_offset=28800&lang_ID=1&sort=PERC1D_DN&page=1&rapidapi-key=' + apiKey)
 	.then((response) => {
 		return response.json()
 	})
 	.then((data) => {
		console.log(data)
 		let HTML = ""
 		for (let i=0; i < data.data[0].screen_data.crypto_data.length; i++){
// 			HTML += "<div>" + data.data[0].screen_data.crypto_data[i].currency_symbol + " " + data.data[0].screen_data.crypto_data[i].name + " " + data.data[0].screen_data.crypto_data[i].inst_price_usd + " " + data.data[0].screen_data.crypto_data[i].change_percent_1d + "</div>"
 		}
		document.getElementById ("crypto").innerHTML += HTML
 	})
 		.catch((err) => {
 			console.error(err)
 	});

// get global indices
fetch('https://ms-finance.p.rapidapi.com/market/get-global-indices?performanceIds=0P0000OQN8%2C0P000000GY&rapidapi-key=' + apiKey)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data)
		let HTML = ""
		for (let i=0; i < data.gmbIndexDataList.length; i++){
			HTML += "<div>" + data.gmbIndexDataList[i].ticker + " " + data.gmbIndexDataList[i].companyName + " " + "$" + data.gmbIndexDataList[i].lastPrice + " " + data.gmbIndexDataList[i].netChangePer + "%" + "</div>"
	}
		document.getElementById ("indices").innerHTML += HTML
	})
	.catch((err) => {
		console.error(err)
		
	});


// // News
fetch('https://api.marketaux.com/v1/news/all?language=en&api_token=IQFcJSeC8TJ5PhJTmkBFh3wox5cDjhDeBM3bjz9s')
 	.then((response) => {
 		return response.json()
	})
 	.then((data) => {
 		console.log(data)
 		let HTML = ""
 		for (let i=0; i < data.data.length; i++) {
 			HTML += '<ul><a href="' + data.data[i].url + '">' + data.data[i].title + " " + '</a></ul>'
 		}
 		document.getElementById ("news").innerHTML += HTML
 	})
 	.catch((error) => {
 		console.error(error)
 	});


// Unused APIs that we may add later for greater function in the application

// auto fill
// fetch('https://ms-finance.p.rapidapi.com/market/v2/auto-complete?q=SPX&rapidapi-key=' + apiKey)
// //response	
// 	.then((response) => {
//  		return response.json()
//     })
// // complete data stream
// 	.then((data) => {
//         console.log(data)
//     })
// 	.catch((error) => {
//         console.error(error)
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
// fetch('https://ms-finance.p.rapidapi.com/market/v2/get-realtime-data?performanceIds=0P0000OQN8%2C0P000000GY&rapidapi-key=' + apiKey)
// 	.then((response) => {
// 		return response.json()
// 	})
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => {
// 		console.error(err)
// 	});

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
// real time data
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