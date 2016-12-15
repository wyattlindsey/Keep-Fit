// GET to /users/${userId}/workouts

// response
var responseValue = [
  {
    name: 'workout 1',
    exercises: [
      {
        name: 'exercise 1',
        metrics: [
          {
            name: 'weight',
            value: 150
          },
          {
            name: 'reps',
            value: 25
          }
        ]
      },
      {
        name: 'exercise 2',
        metrics: [
          {
            name: 'weight',
            value: 150
          },
          {
            name: 'reps',
            value: 25
          }
        ]
      }
    ]
  }
];


// GET to /users/${userId}/workouts/${workoutId}

var responseValueForSingleId = {
  name: 'my workout',
  exercises: [
    {
      name: 'exercise 1',
      metrics: [
        {
          name: 'weight',
          value: 150
        },
        {
          name: 'reps',
          value: 25
        }
      ]
    },
    {
      name: 'exercise 2',
      metrics: [
        {
          name: 'weight',
          value: 150
        },
        {
          name: 'reps',
          value: 25
        }
      ]
    }
  ]
};


// POST to /users/${userId}/workouts


// expects
var a = {
  name: 'blast my quads',
  exercises: [
    {
      name: 'squats',
      metrics: [
        {
          name: 'weight',
          value: 200
        },
        {
          name: 'reps',
          value: 20
        }
      ],
    },
    {
      name: 'leg curls',
      metrics: [
        {
          name: 'weight',
          value: 200
        },
        {
          name: 'reps',
          value: 10
        }
      ]
    }
  ]
};


// PUT to /users/${userId}/workouts/${workoutId}
// for updates to a particular workout
// expects
var b = {
  name: 'modified workout',
  excercises: [
    //... same as above, but updated version
    // send in all new data
  ]
}


// GET to /users/${userId}/workouts/${workoutId}/exercises

// response
var c = [
  {
    name: 'exercise 1',
    metrics: [/* ... */]
  },
  {
    name: 'exercise 2',
    metrics: [/* ... */]
  }
];

// GET to /users/${userId}/workouts/${workoutId}/exercises/${exerciseId}

// to be continued

















