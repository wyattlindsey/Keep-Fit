'user strict';

import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';


export default NewWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render {
    return (
      <Panel header="Create A Workout">
        <form>
          <FormGroup>
            <FormControl>
              <div>Hello</div>
            </FormControl>
          </FormGroup>
        </form>
      </Panel>
    )
  }
}
