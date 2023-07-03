import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../config";

const Header = () => {
  return (
    <header className="header --bgwhite">
      <div className="container-fluid">
        <div className="header__humburger">
          <div className="header__humburger-button">
            <span />
            <span />
            <span />
          </div>
          <div className="header__humburger-text">
            <span>Menu</span>
            <span>Đóng</span>
          </div>
        </div>
        <div className="header__logo">
          <Link to="/">
            <svg
              viewBox="0 0 354 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M333.561 29.3571H351.921V20.0714H333.561V9.42857H353.654V0H324V50H354V40.5714H333.561V29.3571Z"
                fill="black"
              />
              <path d="M300.541 0H291V50H319V40.5714H300.541V0Z" fill="black" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M274.963 17C272.268 12.745 267.704 10 262.5 10C254.492 10 248 16.7157 248 25C248 33.2843 254.492 40 262.5 40C267.613 40 272.312 37.146 275.041 33H286C284.523 37.9393 281.61 42.1772 277.262 45.3228C272.913 48.441 268.126 50 262.903 50C259.812 50 256.708 49.3791 253.59 48.1374C250.499 46.8681 247.832 45.1435 245.59 42.9636C243.101 40.5353 241.214 37.7621 239.928 34.644C238.643 31.5259 238 28.2009 238 24.6689C238 17.8532 240.421 12.0447 245.262 7.24338C250.13 2.41446 255.983 0 262.821 0C267.962 0 272.762 1.58664 277.221 4.75993C281.679 7.93322 284.605 11.9503 286 17H274.963Z"
                fill="black"
              />
              <path
                d="M236 50L225.24 31.1429C230.863 28.5 234.612 22.7857 234.612 16.5714C234.612 12 233.015 8.07143 229.891 4.85714C226.767 1.64286 222.949 0 218.437 0H199V50H208.58V32.6429H215.869L225.657 50H236ZM218.437 9.21429C222.047 9.21429 225.032 12.5 225.032 16.5714C225.032 20.6429 222.047 24 218.437 24H208.58V9.21429H218.437Z"
                fill="black"
              />
              <path d="M184 50H194V0H184V50Z" fill="black" />
              <path d="M63 20H74V30H63V20Z" fill="black" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.963 17C34.2678 12.745 29.7041 10 24.5 10C16.4919 10 10 16.7157 10 25C10 33.2843 16.4919 40 24.5 40C29.6134 40 34.3125 37.146 37.0415 33H48C46.5231 37.9393 43.6103 42.1772 39.2615 45.3228C34.9128 48.441 30.1265 50 24.9026 50C21.812 50 18.7077 49.3791 15.5897 48.1374C12.4991 46.8681 9.83248 45.1435 7.58974 42.9636C5.10085 40.5353 3.21368 37.7621 1.92821 34.644C0.642735 31.5259 0 28.2009 0 24.6689C0 17.8532 2.42051 12.0447 7.26154 7.24338C12.1299 2.41446 17.9829 0 24.8205 0C29.9624 0 34.7624 1.58664 39.2205 4.75993C43.6786 7.93322 46.6051 11.9503 48 17H36.963Z"
                fill="black"
              />
              <path
                d="M83.4211 0V50H99.0461C114.946 50 126.621 39.225 126.621 24.6C126.621 9.825 115.596 0 99.6961 0H83.4211ZM99.6211 9.15C109.596 9.15 116.271 14.85 116.271 24.6C116.271 34.125 109.596 40.35 99.6211 40.35H93.5461V9.15H99.6211Z"
                fill="black"
              />
              <path
                d="M84 1.52771e-05L53 0V50H63.385L63.4625 30.7119V21.5509V9.16099L84 9.16097V1.52771e-05Z"
                fill="black"
              />
              <path
                id="rect"
                d="M168.463 19.9025H179V30.4391H168.463V19.9025Z"
                fill="#00AFAB"
              />
              <path
                id="ccenter"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M168.463 17C165.768 12.745 160.704 10 155.5 10C147.492 10 141 16.7157 141 25C141 33.2843 147.492 40 155.5 40C160.613 40 165.734 37.5118 168.463 33.3659H179C177.523 38.3051 174.61 42.1772 170.262 45.3228C165.913 48.4409 161.126 50 155.903 50C152.812 50 149.708 49.3791 146.59 48.1374C143.499 46.8681 140.832 45.1435 138.59 42.9636C136.101 40.5353 134.214 37.7621 132.928 34.644C131.643 31.5259 131 28.2009 131 24.6689C131 17.8532 133.421 12.0447 138.262 7.24338C143.13 2.41446 148.983 0 155.821 0C160.962 0 165.762 1.58664 170.221 4.75993C174.679 7.93322 177.605 11.9503 179 17H168.463Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        {/* <div class="header__auth">
				<a href="javascript:void(0)" class="btn btn--transparent btnmodal" data-modal="mdlogin">
					<span>Đăng ký /&nbsp;</span><span>Đăng nhập</span>
				</a>
			</div> */}
        {/* user logged */}
        <div className="header__logged">
          <div className="userlogged">
            <div
              className="userlogged__avatar user"
              data-dropdown="userlogged__dropdown"
            >
              <div className="userlogged__avatar-img user__img">
                <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
              </div>
              <i className="userlogged__avatar-icon">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3.5L7.00003 10.5L14 3.5H0Z" fill="white" />
                </svg>
              </i>
            </div>
            <div className="userlogged__dropdown dropdown">
              <div className="userlogged__dropdown-info">
                <div className="user__img">
                  <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <Link to="/profile" className="user__info">
                  <p className="title --t4">
                    <strong>Trần Nghĩa</strong>
                  </p>
                  <span className="email">Thông tin tài khoản</span>
                </Link>
              </div>
              <div className="userlogged__dropdown-list">
                <Link to={PATHS.COURSES}>Khóa học của tôi</Link>
                <Link to={PATHS.PROFILE.PAYMENT}>Lịch sử thanh toán</Link>
                <Link to={PATHS.CONTACT}>Hỗ trợ</Link>
                <a href="#">
                  Đăng xuất{" "}
                  <i>
                    <img src="/img/iconlogout.svg" alt="" />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
