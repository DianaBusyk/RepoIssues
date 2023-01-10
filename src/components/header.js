import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          Repo Issues
        </Link>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link active">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="users" class="nav-link">
                Users
              </Link>
            </li>
            <li class="nav-item">
              <Link to="about" class="nav-link">
                About
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="search"
              placeholder="username"
            />
            <input
              class="form-control me-sm-2"
              type="search"
              placeholder="repo"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
