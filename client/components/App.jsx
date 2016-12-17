'use strict';

import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Dashboard from './Dashboard.jsx';
import WeightLifting from './WeightLifting.jsx';
import HeatMap from './HeatMap.jsx';
import Running from './Running.jsx';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Dashboard}/>
    <Route path='/lifting' component={WeightLifting}/>
    <Route path='/running' component={Running}/>
    <Route path='/heatmap' component={HeatMap}/>
  </Router>
), document.getElementById('app'));
