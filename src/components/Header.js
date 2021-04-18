import React, { useEffect, useState } from "react";
import { Link, BrowserRouter as Router,Route} from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
// import {Link} from 'react-scroll';
import { NavDropdown } from "react-bootstrap";
import "./Header.css";
import Home from '../components/Home'
import About from '../components/About'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="header">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i
                class="fa fa-bars"
                style={{ color: "#fff", fontSize: "28px" }}
              ></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="/message"
                >
                  Message
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="#"
                  
                >
                  Faculty
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="#"
                >
                  Course
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="#"
                >
                  Student Profiles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="#"
                >
                  Coordinators
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="#"
                >
                  Recruiters
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="#"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="menu_active"
                  className="nav-link"
                  data-toggle="collapse" data-target=".navbar-collapse.show"
                  to="#"
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="#"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="#"
                  className="nav-link btn btn-outline-light btn-sm"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;