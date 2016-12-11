var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'keepFit'
});

connection.connect();

module.exports = connection;
