var db = require('./index.js');
var mysql = require('mysql');

module.exports = {
  // TODO: check if name already exists
  signUp: function (username) {
    console.log("Q_M signUp")
    db.query("insert into Users (Username, Hash, Salt) values (?,'Browns','Pepper')",['Perl'], function(error, data) {
      console.log("inside QM adduser")
        if(error) {console.log(error); res.send(error);}
      });
    },
  getUser: function (username,cb) {
    db.query('Select * from Users where Users.Username = ?',['Perl'], function (error, results, fields) {
      if(error) {console.log(error); res.send(error);}
      // use cb from requestHandler to parse results
      cb(results);
    });
  },
  submitWorkout: function (username, workoutName, date) {
    db.query('insert into Workouts (Name) values ("PerlsCurls")');
    db.query('insert into Users_Workouts (id_Users,id_Workouts,Date) values ( (select id from Users where Users.Username = ?), (select id from Workouts where Workouts.Name = ?), ?);',['Perl','PerlsCurls', '2016-09-12'], function(error,data) {
      if(error) {
        console.log(error);

      }
    })
  },
  createWorkout: function (workoutName, exerciseName, exerciseDescription) {
    db.query('insert into Exercises (Name, Description) values (?,?)',["Alohomora","Unlocks Doors (novice)"]);
    db.query('insert into Workouts (Name) values ("Hermoine\'s Spells")');
    //Connect foreign keys of EX & WO
    db.query('insert into Workouts_Exercises (id_Workouts,id_Exercises) values ( (select id from Workouts where Workouts.Name=?), (select id from Exercises where Exercises.Name=?) )',["Hermoine\'s Spells", "Alohomora"])
  },
  //
  getWorkouts: function(username,cb) {
    db.query('select * from Exercises', function(error, results) {cb(results)});
    // db.query('select * from Users_Workouts where id_Users = (select id from Users where Users.username = ?)',['Perl'], function (error, results, fields) {
    //   if(error) {console.log(error);}
    //   // use cb from requestHandler to parse results
    //   cb(results);
    // })
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