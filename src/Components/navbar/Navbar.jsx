import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import logo from '../../Assets/Logo/logo.png'
import './navbar.css'
const Navbar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg bg navbar-fixed-top">
  <div className="container nav-bar" id="navBar">
    <NavLink className="navbar-brand" to="/"><img src={logo} className="w-75" alt="Logo"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-lg-5 ">
        <li className="nav-item">
          <Link className="nav-link" to="home" spy={true} activeClass="active" smooth={true} offset={-100} duration={500}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about" spy={true} activeClass="active" smooth={true} offset={-150} duration={500}>About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Explore_Foods" spy={true} activeClass="active" smooth={true}  offset={-90} duration={500}>Explore Foods</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Reviews" spy={true} activeClass="active" smooth={true} offset={-90} duration={500}>Reviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="FAQ" spy={true} activeClass="active" smooth={true} offset={-130} duration={500}>FAQ</Link>
        </li>
        <li className="nav-item">
         <a href="tel:+2001277025404" className="nav-link ms-lg-5 " id="tel">01277025404</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar;