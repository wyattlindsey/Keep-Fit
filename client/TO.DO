Queries for DB
- get all exercises from exercises. Maybe sorted by type? So we can pre-populate our exercise options.
- get user's previous workouts inc weight/reps for pre-population. (can be done on search from dropdown of workouts)
-

USER DATA:
[ Workout: {
  CreatedAt: 12314,
  Name: fullBody,
  Exercises: [
    { name: Bench press,
      weight: 135,
      reps: 10
      },
    { name: Bench press,
      weight: 145,
      reps: 8
      },
    { name: Squat,
      weight: 155,
      reps: 10},
    { name: Squat,
      weight: 175,
      reps: 8
      }
      ]
  }
]

}[
  { name: Bench press,
    weight: 135,
    reps: 10
    },
  { name: Bench press,
    weight: 145,
    reps: 8
    },
  { name: Squat,
    weight: 155,
    reps: 10},
  { name: Squat,
    weight: 175,
    reps: 8
    }
],
]

USERS
ID Number,
Username VarChar,
PRIMARY KEY ID

WORKOUTS
ID Number,
Name VarChar
PRIMARY KEY ID

EXERCISES
ID Number,
Name VarChar,
Description Text?
PRIMARY KEY ID

USERS_WORKOUTS
ID Number,
ID_Workouts, // FOREIGN KEY Workouts
ID_Exercises, // FOREIGN KEY Exercises
PRIMARY KEY ID

USERS_WORKOUTS_EXERCISES
ID Number Number,
ID_Users_Workouts Number, // FOREIGN KEY Users_Workouts
ID_Workouts_Exercises Number, // FOREIGN KEY Exercises
Weight Number,
Reps Number
PRIMARY KEY ID


var fullBody = [
  { name: Bench press,
    weight: 135,
    reps: 10
    },
  { name: Bench press,
    weight: 145,
    reps: 8
    },
  { name: Squat,
    weight: 155,
    reps: 10},
  { name: Squat,
    weight: 175,
    reps: 8
    }
]



// <div className="workout">
//   Date: Jan 1st. Workout: Legs
// </div>
// <div className="workout">
//   Date: Jan 1st. Workout: Legs
// </div>
// <div className="workout">
//   Date: Jan 1st. Workout: Legs
// </div>
// <div className="workout">
//   Date: Jan 1st. Workout: Legs
// </div>
// <div className="workout">
//   Date: Jan 1st. Workout: Legs
// </div>
// <div className="workout">
//   Date: Jan 1st. Workout: Legs
// </div>
// <div className="workout">
//   Date: Jan 1st. Workout: Legs
// </div>
// <div className="workout">
//   Date: Jan 1st. Workout: Legs
// </div>
// <div className="workout">
//   Date: Jan 1st. Workout: Legs
// </div>
