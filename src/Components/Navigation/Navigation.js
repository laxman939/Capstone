import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Navigation() {
  const [user, setUser] = useState("user");

  return (
    <React.Fragment>
      <ul className="nav-bar">
        <div className="nav-logo">
          <li className="nav-link">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Logo
            </NavLink>
          </li>
        </div>
        <div className="nav-links">
          <li className="nav-link">
            <NavLink to="/postproperty" style={{ textDecoration: "none" }}>
              Post Property
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/signup" style={{ textDecoration: "none" }}>
              Signup
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/signin" style={{ textDecoration: "none" }}>
              Login
            </NavLink>
          </li>
          {user && (
            <li className="nav-link">
              <NavLink to="/user" style={{ textDecoration: "none" }}>
                User
              </NavLink>
            </li>
          )}
        </div>
      </ul>
    </React.Fragment>
  );
}