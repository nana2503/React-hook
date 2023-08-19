import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/form" activeClassName="active">
            Form
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" activeClassName="active">
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink to="/dataCovid" activeClassName="active">
            Data about Covid
          </NavLink>
        </li>
        <li>
          <NavLink to="/timer" activeClassName="active">
            Timer app
          </NavLink>
        </li>
      </ul>
    </>
  );
}
