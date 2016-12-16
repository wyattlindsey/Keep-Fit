// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   render(){
//     return (
//       <div>
//         Hi! I'm a react app!
//       </div>
//     )
//   }
// }
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Signup from './Signup.jsx';
import User from './User.jsx';
import Workout from './Workout.jsx';
import HeatMap from './HeatMap.jsx';
const App = () => (
  <div>
    <div className="container">
      <div>
        Hi I'm stateless but exported!!
      </div>
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
  </Router>
), document.getElementById('app'));
