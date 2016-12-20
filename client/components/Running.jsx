import { Link, browserHistory }from 'react-router';

export default class Running extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      distance: 0,
      workoutName: '',
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.addWorkout = this.addWorkout.bind(this);
    this.handleWorkoutChange = this.handleWorkoutChange.bind(this);
  }

  handleWorkoutChange(e) {
    this.setState({workoutName: e.target.value});
  }

  handleTimeChange(e) {
    this.setState({time: e.target.value});
  }

  handleDistanceChange(e) {
    this.setState({distance: e.target.value});
  }

  // Submits packaged workout obj to db as x-www-form data.
  addWorkout(e) {
    e.preventDefault();
    var run = {
      time: this.state.time,
      distance: this.state.distance
      //grographical data
    };
    var exercises = [run];

    var newWorkout = {};
    var userId = window.sessionStorage.user;

    newWorkout.type = 'running';
    newWorkout.name = this.state.workoutName;
    newWorkout.exercises = JSON.stringify(exercises);
    $.post(`/api/users/${userId}/pending`, newWorkout, (resp)=>{
      if(resp) {
        console.log('The following workout has been submitted to pending: ' + resp);
        $.post(`/api/users/${userId}/workouts`, newWorkout, (resp)=>{
          if(resp) {
            console.log('The following workout has been submitted to workouts: ' + resp);
          } else {
            console.log('Your workout cannot be submitted at this time. ');
          }
        });
      } else {
        console.log('Your workout cannot be submitted at this time. ');
      }
    });
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 signup-form text-center">
            <h2>Add A Run!</h2>
            <div className="col-sm-8 col-sm-offset-2">
              <form>
                <label className="text-left">Run Name:
                  <input
                    type='text'
                    placeholder='Workout Name'
                    className="fat-width"
                    onChange={this.handleWorkoutChange}
                    />
                </label>
                <table>
                  <thead>
                    <tr>
                      <td>Time</td>
                      <td>Distance</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="number" className="thin-width" value={this.state.time} onChange={this.handleTimeChange}/>  minutes</td>
                      <td><input type="number" className="thin-width" id="distanceField"  value={this.state.distance} onChange={this.handleDistanceChange} />  miles</td>
                    </tr>
                  </tbody>
                </table>
                <button
                  type='submit'
                  value='Add Workout'
                  className="btn btn-default margin-top-10"
                  onClick={this.addWorkout}
                  >
                  Complete Workout
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div id='runningRoute'></div>
          </div>
        </div>
      </div>
    )
  };

  //Map to be embedded under form table
}
