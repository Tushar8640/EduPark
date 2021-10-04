import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../image/logo.png";

const Navbar = () => {
  // navbar
  return (
    <div className=" ">
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white py-1 shadow-sm">
        <div className="container">
          <a className="navbar-brand me-md-4" to="/">
            <img style={{ width: "180px" }} src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="navbar-nav ms-md-auto  fw-bold fs-5">
              <Link className="nav-link me-md-4" aria-current="page" to="/home">
                Home
              </Link>

              <Link className="nav-link me-md-4" to="/instructors">
                Instructors
              </Link>

              <Link className="nav-link me-md-4" to="/services">
                Services
              </Link>

              <Link className="nav-link " to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
