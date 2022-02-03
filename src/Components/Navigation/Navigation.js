import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Navigation() {
  const [user, setUser] = useState("user");

  return (
    <React.Fragment>
      <div className="nav-section sticky-top">
        <ul className="nav-list">
          <div className="nav-logo">
            <li className="nav-link">
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "rgb(10 48 183)" }}
              >
                Logo
              </NavLink>
            </li>
          </div>
          <div className="nav-links">
            <li className="nav-link">
              <NavLink
                to="/postproperty"
                style={{ textDecoration: "none", color: "rgb(10 48 183)" }}
              >
                Post Property
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/signup"
                style={{ textDecoration: "none", color: "rgb(10 48 183)" }}
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/signin"
                style={{ textDecoration: "none", color: "rgb(10 48 183)" }}
              >
                Login
              </NavLink>
            </li>
            {user && (
              <li className="nav-link">
                <NavLink
                  to="/user"
                  style={{ textDecoration: "none", color: "rgb(10 48 183)" }}
                >
                  User
                </NavLink>
              </li>
            )}
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
}

/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */

/* <nav class="navbar sticky-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Sticky top</a>
</nav> */
