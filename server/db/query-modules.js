var db = require('./index.js');
var mysql = require('mysql');

module.exports = {
  getUser: function (username) {
    db.query('Select * from users where users.username = ?', [username], function (error, results, fields) {
      return results;
    });
  },
  // TODO: check if name already exists
  addUser: function (username, hash, salt) {
    db.query('Insert ? into users (username, hash, salt) values (?,?,?)', [username, hash, salt], function(error, results, fields){
      if(!error) {
        return "Success";
      }
    });
  }

}