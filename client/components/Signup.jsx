import {Link} from 'react-router';

export default() => (
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3 signup-form text-center">
        <h1>Sign up!</h1>
        <div className="col-sm-6 col-sm-offset-3">
          <form>
            <label className="text-left">Username:
              <input type='text' placeholder='Username' className="fat-width"/>
            </label>
            <label className="text-left">Password:
              <input type='text' placeholder='Password' className="fat-width"/>
            </label>
              <button type='submit' value='Sign up' className="btn btn-default margin-top-10">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
