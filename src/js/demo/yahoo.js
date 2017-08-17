require "axios"

var stock_url = "http://finance.yahoo.com/d/quotes.csv?s=AAPL&f=a";

// syntax, export a function for each action type,

axios.get(stock_url)
      .then(function(response, body) {
        var stock_data = body;
    		console.log("Yahoo Finance API: ", stock_data);
      })
      .catch((err) => {
        console.log("Error");
      });



//request.open('GET', stock_url, function(error, response, body) {
//  if (!error && response.statusCode === 200) {
//    var stock_data = body;
//    console.log("Yahoo Finance API: ", stock_data);
//  };
//});
//


let url = 'http://download.finance.yahoo.com/d/quotes.csv?s=COST&f=a';

