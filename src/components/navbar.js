import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles.css";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/add5" activeClassName="nav-link-active">
          Add 5
        </NavLink>

        <NavLink exact to="/alphastr" activeClassName="nav-link-active">
          Alphabatized string
        </NavLink>

        <NavLink exact to="/evenodd" activeClassName="nav-link-active">
          Even or odd
        </NavLink>

        <NavLink exact to="/firstlast" activeClassName="nav-link-active">
          Remove first & last character
        </NavLink>

        <NavLink exact to="/pal" activeClassName="nav-link-active">
          Palindrome
        </NavLink>

        <NavLink exact to="/revsent" activeClassName="nav-link-active">
          Reverse a sentence
        </NavLink>

        <NavLink exact to="/revstr" activeClassName="nav-link-active">
          Reverse a string
        </NavLink>
      </div>
    );
  }
}
