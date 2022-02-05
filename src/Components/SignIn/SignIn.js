import { Link } from "react-router-dom";

import "./style.css";

export default function SignIn() {
  return (
    <div>
      <form action="/">
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" class="avatar" />
        </div>
        <label for="myCheck">Checkbox:</label>
        <input type="checkbox" id="myCheck" onclick="myFunction()" />
        <div className="container">
          <label htmlfor="uname">
            <b>Username</b>
          </label>
          <input
            type="mail"
            placeholder="Enter your Mail"
            name="uname"
            required
          />
          <br />
          <label htmlfor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>

        <button type="submit">Login</button>
        <div className="container">
          <span className="psw">
            Forgot <a href="/">password?</a>
          </span>
        </div>
      </form>
      <div>
        Click here for <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
