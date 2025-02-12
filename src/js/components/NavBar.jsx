import React from "react";

//include images into your bundle

//create your first component

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid p-5 pt-2 pb-2">
        <div className="col-3">
          <a className="navbar-brand" href="#">
            <img
              src="https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2022/01/14151342/4GeeksAcademyLogo-500x474.jpg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top me-3"
            />
            Start Bootstrap
          </a>
        </div>

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

        <div
          className="col-9 collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
