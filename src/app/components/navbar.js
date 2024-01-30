"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import navbarStyle from "../styles/navbar.module.scss";

export default function navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Clicked outside the navbar, close the menu
        const navbarToggler = document.getElementById("navbarNavDropdown");
        if (navbarToggler) {
          navbarToggler.classNameList.remove("show");
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
      <div>
        <nav
          className={`navbar ${navbarStyle.navbarExpandLg} `}
          ref={navbarRef}
        >
          <a className={navbarStyle.navbarLogo} href="/">
            <Image src={logo} className={navbarStyle.logoImg} />
          </a>
          <button
            className={navbarStyle.navbarToggler}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className={(navbarStyle.togglerIcon, navbarStyle.topBar)}
            ></span>
            <span
              className={(navbarStyle.togglerIcon, navbarStyle.middleBar)}
            ></span>
            <span
              className={(navbarStyle.togglerIcon, navbarStyle.bottomBar)}
            ></span>
          </button>
          <div
            className={`collapse ${navbarStyle.navbarCollapse} `}
            id={navbarStyle.navbarNavDropdown}
          >
            <ul className={`ml-auto  ${navbarStyle.navbarNav} `}>
              <div className={navbarStyle.horiSelector}>
                <div className={navbarStyle.left}></div>
                <div className={navbarStyle.right}></div>
              </div>
              <li className={`three-d ${navbarStyle.navItem}`}>
                <Link className="nav-link" href="/">
                  HOME
                </Link>
              </li>
              <li className={`three-d ${navbarStyle.navItem}`}>
                <Link className="nav-link" href="/about-us">
                  ABOUT US
                </Link>
              </li>

              <li className={`three-d dropdown ${navbarStyle.navItem}`}>
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
                  <li className={`three-d ${navbarStyle.dropdownList}`}>
                    <Link className="dropdown-item" href="/programs/hackathon">
                      HACKATHON
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`three-d ${navbarStyle.navItem}`}>
                <Link className="nav-link" href="/dao-roadmap">
                  DAO ROADMAP
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
