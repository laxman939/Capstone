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
