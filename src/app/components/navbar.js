"use client";
import React from "react";
import { useEffect, useRef } from "react";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Clicked outside the navbar, close the menu
        const navbarToggler = document.getElementById("navbarNavDropdown");
        if (navbarToggler) {
          navbarToggler.classList.remove("show");
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg " ref={navbarRef}>
        <a className="navbar-brand navbar-logo" href="/">
          <Image src={logo} className="logo-img" />
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto ">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item three-d">
              <Link className="nav-link" href="/">
                HOME
              </Link>
            </li>
            <li className="nav-item three-d">
              <Link className="nav-link" href="/about-us">
                ABOUT US
              </Link>
            </li>

            <li className="nav-item dropdown three-d">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PROGRAM
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-list three-d">
                  <Link className="dropdown-item" href="/programs/hackathon">
                    HACKATHON
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item three-d">
              <Link className="nav-link" href="/dao-roadmap">
                DAO ROADMAP
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
