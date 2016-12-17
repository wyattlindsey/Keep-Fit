'use strict';

import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Dashboard from './Dashboard.jsx';
import WeightLifting from './WeightLifting.jsx';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Dashboard}/>
    <Route path='/lifting' component={WeightLifting}/>
  </Router>
), document.getElementById('app'));
