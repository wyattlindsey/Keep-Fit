import {Link} from 'react-router';

export default() => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3 signup-form text-center">
        <h1>Add Workout!</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <form>
            <label className="text-left">Workout Name:
              <input type='text' placeholder='Workout Name' className="fat-width"/>
            </label>
            <button type='submit' value='Add Workout' className="btn btn-default margin-top-10">Add Workout</button>
          </form>
          <form>
            <table>
              <tbody>
              <tr>
                <td>Exercise:</td>
                <td><input type='text' placeholder='Exercise'/></td>
                <td><input type="number" className="thin-width"/></td>
                <td><input type="number" className="thin-width"/></td>
                <td>
                  <span className="glyphicon glyphicon-plus plus-btn"></span>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
);
