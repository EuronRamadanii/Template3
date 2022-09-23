import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/all-images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/header.css";
import { useState } from "react";
import english from "../../assets/all-images/united-kingdom.png";
import deutsch from "../../assets/all-images/germany.png";

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
    display: "Career",
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
  const [isHovering2, setIsHovering2] = useState(false);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const enterDropdown = () => {
    setIsHovering(true);
  };
  const leaveDropdown = () => {
    setIsHovering(false);
  };
  const enterDropdown2 = () => {
    setIsHovering2(true);
  };
  const leaveDropdown2 = () => {
    setIsHovering2(false);
  };
  const navigate = useNavigate();

  const goToClient = () => {
    navigate("/client");
  };
  const goToManagment = () => {
    navigate("/managment");
  };
  const goToProjektierung = () => {
    navigate("/services/project");
  };
  const goToBeratung = () => {
    navigate("/services/beratung");
  };
  const goToSchulungen = () => {
    navigate("/services/schulungen");
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
                <Dropdown
                  className="hover-dropdown"
                  show={isHovering2}
                  onMouseOver={enterDropdown2}
                  onMouseLeave={leaveDropdown2}
                >
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Leistungen
                  </Dropdown.Toggle>
                  <Dropdown.Menu show={isHovering2}>
                    <Dropdown.Item onClick={goToProjektierung}>
                      Projektierung & Umsetzung
                    </Dropdown.Item>
                    <Dropdown.Item onClick={goToBeratung}>
                      Beratung
                    </Dropdown.Item>
                    <Dropdown.Item onClick={goToSchulungen}>
                      Schulungen
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  className="hover-dropdown"
                  show={isHovering}
                  onMouseOver={enterDropdown}
                  onMouseLeave={leaveDropdown}
                >
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Company
                  </Dropdown.Toggle>
                  <Dropdown.Menu show={isHovering}>
                    <Dropdown.Item onClick={goToClient}>Client</Dropdown.Item>
                    <Dropdown.Item onClick={goToManagment}>
                      Managment
                    </Dropdown.Item>
                    {/* <Dropdown.Item onClick={goToLocations}>
                      Locations
                    </Dropdown.Item>
                    <Dropdown.Item onClick={goToActivities}>
                      Company Activities
                    </Dropdown.Item> */}
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
            <div>
              <img
                src={english}
                style={{ height: "20px", marginRight: "10px" }}
                alt=""
              />
              <img src={deutsch} style={{ height: "20px" }} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
