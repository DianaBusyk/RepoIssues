import React from "react";
import { Link } from "react-router-dom";

const Header = () =>  {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Repo Issues
        </Link>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="users" className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="username"
            />
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="repo"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
