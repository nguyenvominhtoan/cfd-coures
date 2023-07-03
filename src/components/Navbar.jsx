import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../config";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__main">
          <li className="navbar__link">
            <a href="./" className="navbar__item active">
              Trang chủ
            </a>
          </li>
          <li className="navbar__link">
            <a href="" className="navbar__item">
              Về CFD Circle
            </a>
          </li>
          <li className="navbar__link">
            <Link to={PATHS.COURSES} className="navbar__item">
              Khoá học
            </Link>
          </li>
          <li className="navbar__link">
            <NavLink to={PATHS.ABOUT} className="navbar__item">
              Bài viết
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink to={PATHS.CONTACT} className="navbar__item">
              Liên hệ
            </NavLink>
          </li>
        </ul>
        <div className="navbar__overlay" />
      </nav>
      <div className="overlay" />
    </>
  );
};

export default Navbar;
