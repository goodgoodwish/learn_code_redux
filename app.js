var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/src'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/src/index.html');
});

const oneUser = {
	user: {
		id: 1,
		name: "Charlie Yi",
		age: 42,
	},
	fetching: false,
	fetched: false,
	error: null,
}

const stocks = [{
  stockName: 'TSLA',
  price: 320.99,
  qty: 58
}, {
  stockName: 'AMZN',
  price: 920.99,
  qty: 10
}, ];

app.get('/user', function (req, res) {
	res.json(oneUser);
});

app.get('/stock', function (req, res) {
	res.json(stocks);
	console.log('retrun stocks.')
});

app.listen(3000, function () {
	console.log('Node.js Express listening to this joint on port 3000.');
});
