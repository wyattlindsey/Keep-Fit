import {Link} from 'react-router';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {Workout: {
        CreatedAt: '1234565',
        Name: 'fullBody',
        Exercises: [
          {
            name: 'Bench Press',
            weight: 135,
            reps: 10
          }, {
            name: 'Bench Press',
            weight: 135,
            reps: 9
          }, {
            name: 'Bench Press',
            weight: 135,
            reps: 8
          }
        ]
      }},
      {Workout: {
        CreatedAt: '1234565',
        Name: 'fullBody',
        Exercises: [
          {
            name: 'Bench Press',
            weight: 135,
            reps: 10
          }, {
            name: 'Bench Press',
            weight: 135,
            reps: 9
          }, {
            name: 'Bench Press',
            weight: 135,
            reps: 8
          }
        ]
      }},
      {Workout: {
        CreatedAt: '1234565',
        Name: 'fullBody',
        Exercises: [
          {
            name: 'Bench Press',
            weight: 135,
            reps: 10
          }, {
            name: 'Bench Press',
            weight: 135,
            reps: 9
          }, {
            name: 'Bench Press',
            weight: 135,
            reps: 8
          }
        ]
      }},
      {Workout: {
        CreatedAt: '1234565',
        Name: 'fullBody',
        Exercises: [
          {
            name: 'Bench Press',
            weight: 135,
            reps: 10
          }, {
            name: 'Bench Press',
            weight: 135,
            reps: 9
          }, {
            name: 'Bench Press',
            weight: 135,
            reps: 8
          }
        ]
      }}
    ];
  }

  render() {
    return (
      <div className="container">
        <div className="col-sm-6">
          <div className="profile">
            <div>
              <img className="pull-left profile-img" src="http://assets.schwarzenegger.com/images/img-2.jpg"/>
              <b>Axeman Muscleface</b>
            </div>
            <div>Some data goes here, maybe last workout, or friends or something. Activated charcoal helvetica irony tote bag adipisicing. Kickstarter tattooed accusamus selvage, brooklyn coloring book la croix. Echo park typewriter bushwick tumeric poutine, disrupt nesciunt. Tempor 3 wolf moon dolore ea master cleanse, messenger bag jianbing seitan. Nulla eiusmod nisi, tattooed assumenda franzen venmo fashion axe ethical pop-up woke heirloom. Vaporware shabby chic wayfarers activated charcoal brooklyn. Ugh crucifix messenger bag nisi pork belly.</div>
          </div>
          <div className="graphs">
            Graphs go here:
            <div><img src="http://www.learnersdictionary.com/media/ld/images/legacy_print_images/bar_graph.gif"/></div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="workouts">
            <Link className="add-workout text-center text-white"  to="/workout">
              Add a New Workout!
            </Link>
            List of recent workouts goes here.

            {this.data.map((i, k)=>{
              return <div className="workout" key={k}>
                      Date: {i.Workout.CreatedAt}
                      Name: {i.Workout.Name}
                    </div>
            })}

          </div>
        </div>

      </div>
    )
  }

}
//
// export default () =>
