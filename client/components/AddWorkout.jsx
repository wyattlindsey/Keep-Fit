'user strict';

import WeightLifting from './WeightLifting.jsx';
import Running from './Running.jsx';

export default class AddWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
            <div className="flex-center">
              <h2>Add A Workout</h2>
            </div>
            <div className="col-md-6">
              <WeightLifting />
            </div>
            <div className="col-md-6">
              <Running />
            </div>
        </div>
      </div>
    )
  };
}
