import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/all-images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/header.css";
import { useState } from "react";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  // {
  //   path: "/about",
  //   display: "Company",
  // },
  {
    path: "/cars",
    display: "Team",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  // {
  //   path: "/client",
  //   display: "Company",
  // },
];

const Header = () => {
  const menuRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const enterDropdown = () => {
    setIsHovering(true);
  };
  const leaveDropdown = () => {
    setIsHovering(false);
    console.log(isHovering);
  };
  const navigate = useNavigate();

  const goToClient = () => {
    navigate("/blogs");
  };
  const goToManagment = () => {
    navigate("/managment");
  };
  const goToLocations = () => {
    navigate("/locations");
  };
  const goToActivities = () => {
    navigate("/activities");
  };

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +49 (0)89 35477460
                </span>
              </div>
            </Col>

            {/* <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row style={{ justifyContent: "space-between" }}>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    {/* <i class="ri-car-line"></i> */}
                    {/* <span>
                      <br />
                      Context
                    </span> */}
                    <Col>
                      <Row>
                        <img
                          src={logo}
                          alt=""
                          style={{ height: "100px", width: "200px" }}
                        />
                      </Row>
                    </Col>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  {/* <h4>Bangladesh</h4> */}
                  <h6>Lorem Ipsum</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            {/* <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col> */}
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}

                {/* <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div> */}

                <Dropdown
                  className="hover-dropdown"
                  onMouseOver={enterDropdown}
                  onMouseLeave={leaveDropdown}
                >
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Dropdown Button
                  </Dropdown.Toggle>
                  <Dropdown.Menu show={isHovering}>
                    {/* <NavLink
                      to="/blogs"
                      style={{ color: "#1e2125" }}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item link"
                      }
                    > */}
                    <Dropdown.Item onClick={goToClient}>Client</Dropdown.Item>
                    {/* </NavLink> */}
                    <Dropdown.Item onClick={goToManagment}>
                      Managment
                    </Dropdown.Item>
                    <Dropdown.Item onClick={goToLocations}>
                      Locations
                    </Dropdown.Item>
                    <Dropdown.Item onClick={goToActivities}>
                      Company Activities
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
