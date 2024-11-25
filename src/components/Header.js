import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
// import { useRef } from "react";
import logo from "../assets/MovieFlixLogo.png";
import { useDispatch } from "react-redux";
import { getSearchQuery } from "../store/slices/searchslice";

export default function Header() {
  var x1 = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(x1.current.value);
    dispatch(getSearchQuery(x1.current.value));
    navigate("/search");
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/popular">
            <img src={logo} alt="MovieFlix Logo" className="image" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menus">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/popular">
                  Popular
                </Link>
              </li>
              <li className="nav-item n1">
                <Link className="nav-link" to="/upcoming">
                  Upcoming
                </Link>
              </li>
              <li className="nav-item n1">
                <Link className="nav-link" to="/toprated">
                  TopRated
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={x1}
              />
              <button
                className="btn btn-outline-success search"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
