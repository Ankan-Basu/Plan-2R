import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";

import { Link } from "react-router-dom";

export default function Navbar() {
  $(".navTrigger").click(function () {
    $(this).toggleClass("active");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  });

  return (
    <>
      <nav className="nav">
        <div className="container-fluid">
          <div className="logo">
            <Link to="/">Plan-2R</Link>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Login/Register</Link>
              </li>
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
      <section className="home"></section>
      <div style={{ height: "1000px" }}>
        <p className="myP">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          ratione facere animi impedit rem labore
        </p>
      </div>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
};
