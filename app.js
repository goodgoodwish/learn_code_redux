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

app.get('/user', function (req, res) {
	res.json(oneUser);
});

app.listen(3000, function () {
	console.log('Node.js Express listening to this joint on port 3000.');
});
