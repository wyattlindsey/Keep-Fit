'use strict';

import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
<<<<<<< eec4efc9c7cb24f06b2765d13a2e869fbe2b8eb2
import Signup from './Signup.jsx';
import User from './User.jsx';
import Workout from './Workout.jsx';
import HeatMap from './HeatMap.jsx';
import Running from './Running.jsx';

const App = () => (
  <div>
    <div className="container">
      <div>
        <Link to="/signup">Click here to go to signup</Link>
      </div>
      <div>
        <Link to="/user">Click here to go to User</Link>
      </div>
      <div>
        <Link to="/workout">Click here to go to Workout</Link>
      </div>
      <div>
        <Link to="/heatmap">Click here to go to Heatmap</Link>
      </div>
      <div>
        <Link to="workout/running">Click here to go to Running</Link>
      </div>
    </div>
  </div>
)

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/user' component={User}/>
    <Route path='/workout' component={Workout}/>
    <Route path='/heatmap' component={HeatMap}/>
    <Route path='/workout/running' component={Running}/>
=======
import Dashboard from './Dashboard.jsx';
import WeightLifting from './WeightLifting.jsx';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Dashboard}/>
    <Route path='/lifting' component={WeightLifting}/>
>>>>>>> Add .gitignore
  </Router>
), document.getElementById('app'));
