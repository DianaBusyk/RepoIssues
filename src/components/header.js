import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./search-form";
import { AppContext } from "../context";
import "./header.css";

const Header = () => {
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
          <SearchForm />
        </div>
      </div>
    </nav>
  );
};

export default Header;
