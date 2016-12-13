var mysql = require('mysql');

var database = {
  local: {
      user: 'root',
      password: '1214',
      database: 'keepFit'
  },
  jawsDB: {
      port: 3306,
      host: 'o61qijqeuqnj9chh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'vuwj03rkzz9ne7y2',
      password: "mxix1dljwmsa0gb4",
      database: "x1umy5wiiptejbuo"
  }
}

var connection = mysql.createConnection(database.jawsDB);


connection.connect();

module.exports = connection;
