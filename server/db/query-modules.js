var db = require('./index.js');
var mysql = require('mysql');

module.exports = {
  // TODO: check if name already exists
  addUser: function (username, hash, salt) {
    db.query('Insert into users (username, hash, salt) values (?,?,?)', [username, hash, salt], function(error, results, fields){
      if(!error) {
        return "Success";
      }
    });
  },
  getUser: function (username,cb) {
    console.log("Q-M getUser");
    db.query("insert into Users (Username, Hash, Salt) values ('Carl','stringystringstring','SaltySeaDog')", function(error, data) {
      console.log("Inside first query cb")
      if(error) {console.log(error); res.send(error);}
      db.query('Select * from Users where Users.Username = "Carl"', function (error, results, fields) {
        console.log("Inside second query cb")

        if(error) {console.log(error); res.send(error);}
        cb(results);
      });
    });
  }
}