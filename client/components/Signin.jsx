import { Link } from 'react-router'; //?

export default () =>(
  <div>
    <div>
      <h1>Sign in!</h1>
        <form>
          <label for='user'>Username:</label>
          <input type='text' id='user' placeholder='Username' /><br></br>
          <label for='pass'>Password:</label>
          <input type='text' id='pass' placeholder='Password' /><br></br>
          <input type='submit' value='Submit' />
        </form>
      </div>
    <div>
    <div>
      <form action='/signup'>
        <input type='submit' value='Or sign up!'>
      </form>
    </div>
  </div>
);
