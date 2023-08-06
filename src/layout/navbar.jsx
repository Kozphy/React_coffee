import React from "react";
import { NavLink } from "react-router-dom";

import Announcement from "../pages/Home/anncouncement";

import "../stylesheet/navbar.css";
import fefeIcon from "../image/icon/cup.png";

export default Navbar;

function Icon({ icon, iconShow }) {
  return iconShow ? icon : null;
}

function NavItems() {
  const navItems_data = [
    {
      id: 0,
      className: `nav-link about-FeFe`,
      content: "關於FeFe",
      to: "/",
      icon: null,
      iconShow: false,
    },
    {
      id: 1,
      className: `nav-link FeFe-main-product`,
      content: "FeFe 主打",
      to: "/mainProducts",
      icon: null,
      iconShow: false,
    },
    {
      id: 2,
      className: `nav-link FeFe-traffic`,
      content: "聯絡我們",
      to: "/contactUs",
      icon: null,
      iconShow: false,
    },
    {
      id: 3,
      className: `nav-link shop-cart FeFe-shopping`,
      content: "購物車",
      to: "/shopCart",
      icon: <i className="fa-solid fa-cart-shopping me-1"></i>,
      iconShow: true,
    },
    {
      id: 4,
      className: `nav-link login`,
      content: null,
      to: "/",
      icon: <i className="fas fa-user-alt"></i>,
      iconShow: true,
    },
  ];

  const navItems = navItems_data.map((el) => {
    return (
      <li className="nav-item" key={el.id}>
        <NavLink className={el.className} aria-current="page" to={el.to}>
          <Icon icon={el.icon} iconShow={el.iconShow} />
          {el.content}
        </NavLink>
      </li>
    );
  });
  return navItems;
}

function Navbar() {
  return (
    <>
      <Announcement />
      <header className="header sticky">
        <div className="container-fluid ps-0 pe-0">
          <nav className="navbar navbar-expand-lg bg-body-tertiary px-3">
            <div className="brand d-flex">
              <NavLink className="navbar-brand romantic-text ms-2" to="/">
                <img className="fefe-icon" src={fefeIcon} alt="fefe-icon" />
                FeFe
              </NavLink>
            </div>
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                <NavItems />
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
