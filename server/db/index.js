var mysql = require('mysql');

var connection = mysql.createConnection({
  // port: '8000',
  user: 'root',
  password: 'chooChung89',
  database: 'keepFit'
});

connection.connect();

module.exports = connection;
