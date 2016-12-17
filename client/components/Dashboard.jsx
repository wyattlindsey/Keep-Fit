import {Link} from 'react-router';
import Home from './Home.jsx';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        {<Home />}
        <div className="container">
          
          <div className="col-md-4">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  Panel title
                </h3>
              </div>
              <div class="panel-body">
                Panel content
              </div>
              <div class="panel-footer">
                Panel footer
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
