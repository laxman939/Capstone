import {Link} from 'react-router-dom';

import "./style.css"

export default function SingUp() {
  return (
    <div>
      <form action="/" style={{ border: "1px solid #ccc" }}>
        <div className="container">
          
          {/* <label for="myCheck">Checkbox:</label> */}
          <input type="checkbox" id="myCheck" onclick="myFunction()" />
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label Htmlfile="Firstname">
            <b>First Name</b>
       
          <input type="text" placeholder="Enter First Name" name="Firstname" required />
          </label>
          <label Htmlfile="lastName">
            <b>Last Name</b>
       
          <input type="text" placeholder="Enter Last Name" name="lastName" required />
          </label>
          <br/>
          <label Htmlfile="nmbr">
            <b>Mobile</b>
       
          <input type="tel" placeholder="Enter Number" name="nmbr" required />
          </label>
         
          <label Htmlfile="email">
            <b>Email</b>
       
          <input type="mail" placeholder="Enter Email" name="email" required />
          </label>
          <br/>
          <label htmlFor="psw">
            <b>Password</b>
         
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </label>
          <label Htmlfor="psw-repeat">
            <b>Repeat Password</b>
       
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />
          </label>
          {/* <label>
            <input
              type="checkbox"
              checked="checked"
              name="remember"
              style={{ marginBottom: "15px" }}
            />{" "}
            Remember me
          </label> */}

     

          <div class="clearfix">
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div>
   If you have account. Click here for <Link to="/signin">Signin</Link>
      </div>
    </div>
  );
}
