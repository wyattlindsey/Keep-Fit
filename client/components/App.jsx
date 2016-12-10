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
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

const App = () => (
  <div>
    Hi I'm stateless but exported!
  </div>
)

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
), document.getElementById('app'));
