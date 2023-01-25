import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav navbaar">
          <NavLink
            style={{ color: "white" }}
            className="nav-item nav-link bg-dark navlink"
            to="/"
          >
            Home<span className="sr-only">(current)</span>
          </NavLink>
          <NavLink
            style={{ color: "white" }}
            className="nav-item nav-link bg-dark navlink"
            to="/webdevelopment"
          >
            Web Development
          </NavLink>
          <NavLink
            style={{ color: "white" }}
            className="nav-item nav-link bg-dark navlink" 
            to="/datascience"
          >
            Data Science
          </NavLink>
          <NavLink
            style={{ color: "white" }}
            className="nav-item nav-link bg-dark navlink"
            to="/testing"
          >
            Software Testing
          </NavLink>
          <NavLink
            style={{ color: "white" }}
            className="nav-item nav-link bg-dark navlink"
            to="/digitalmarketing"
          >
            Digital Marketing
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
