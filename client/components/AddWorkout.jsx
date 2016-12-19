'user strict';


export default class AddWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 signup-form text-center">
            <h2>Add A Workout</h2>
            <div className="col-sm-8 col-sm-offset-2">
              <form>
                <label className="text-left">Your Saved Workouts:
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="">
                    </label>
                  </div>
                </label>
                <button
                  type='submit'
                  value='Add Workout'
                  className="btn btn-default margin-top-10"
                  onClick={this.addWorkout}
                  >Add Workout</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  };
}
