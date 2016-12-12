var db = require('./index.js');
var mysql = require('mysql');

module.exports = {
  // TODO: check if name already exists
  signUp: function () {
    console.log("Q_M signUp")
    db.query("insert into Users (Username, Hash, Salt) values ('Carl','stringystringstring ','Treasure')", function(error, data) {
      console.log("inside QM adduser")
        if(error) {console.log(error); res.send(error);}
      });
    },
  // function (username, hash, salt) {
  //   db.query('Insert into users (username, hash, salt) values (?,?,?)', [username, hash, salt], function(error, results, fields){
  //     if(!error) {
  //       return "Success";
  //     }
  //   });
  // },
  getUser: function (username,cb) {
    db.query('Select * from Users where Users.Username = "Carl"', function (error, results, fields) {
      if(error) {console.log(error); res.send(error);}
      // use cb from requestHandler to parse results
      cb(results);
    });
  },
  submitWorkout: function () {
    db.query('insert into Workouts (Name) values ("Lower bodyParser")', function(error,data) {
      if(error) {
        console.log(error);
        res.send(error);
      }
    })
  },
  getWorkouts: function(username,cb) {
    db.query('Select * from Workouts', function (error, results, fields) {
      if(error) {console.log(error); res.send(error);}
      // use cb from requestHandler to parse results
      cb(results);
    })
  },
  submitExercise: function () {
    db.query('insert into Exercises (Name, Description) values ("Potato Toss", "Toss a ParrotPotatoe!")', function(error,data) {
      if(error) {
        console.log(error);
        res.send(error);
      }
    })
  },
  getExercises: function(username,cb) {
    db.query('Select * from Exercises', function (error, results, fields) {
      if(error) {console.log(error); res.send(error);}
      // use cb from requestHandler to parse results
      cb(results);
    })
  }
}