import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Container,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

function ScrollTransparentNavbar() {
  const location = useLocation();
  const showButton = ["/about-us", "/projects", "/solutions"].includes(location.pathname);

  const [navbarColor, setNavbarColor] = useState(" navbar-transparent");
  const [logoSrc, setLogoSrc] = useState(
    require("assets/img/anima1.png")
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarColor("");
        setLogoSrc(require("assets/img/anima2.png"));
      } else {
        setNavbarColor(" navbar-transparent");
        setLogoSrc(require("assets/img/anima1.png"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItemStyle = {
    lineHeight: "0.8",
    fontWeight: "1000",
    color: "#1c1862",
    marginLeft: "20px",
  };

  const menuOptions = [
    { label: "Acerca de", path: "/about-us" },
    { label: "Contáctanos", path: "/contact-us" },
  ];

  return (
    <>
      {/* CSS embebido */}
      <style>
        {`
          .navbar-logo {
            width: 250px;
            height: auto;
          }

          .navbar-menu-icon {
            width: 80px;
            height: auto;
          }

          @media (max-width: 768px) {
            .navbar-logo {
              width: 160px;
            }

            .navbar-menu-icon {
              width: 50px;
            }
          }
        `}
      </style>

      <Navbar className={`${navbarColor}`} color="white" expand="lg" sticky="top">
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {/* Logo */}
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img src={logoSrc} alt="Logo Principal" className="navbar-logo" />
            </NavbarBrand>
            
            {/* Menú horizontal en escritorio */}
            <Nav className="d-none d-lg-flex align-items-center ml-auto">
              {menuOptions.map((item) => (
                <NavItem key={item.path}>
                  <NavLink tag={Link} to={item.path} style={menuItemStyle}>
                    {item.label}
                  </NavLink>
                </NavItem>
              ))}

              {showButton && (
                <NavItem>
                  <Button
                    style={{
                      backgroundColor: "#fc71f0",
                      border: "2px solid #fc71f0",
                      color: "white",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      borderRadius: "30px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                      transition: "all 0.3s ease",
                      marginLeft: "20px",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "white";
                      e.target.style.color = "#fc71f0";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#fc71f0";
                      e.target.style.color = "white";
                    }}
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1BF2wEKe6fsiUARcnRzR2CjV4-7h5x17XJ0D0MXS71WKgdjC26jsIsXBUhf_kijEqxYh1oWCOQ?gv=true"
                    target="_blank"
                    aria-label="Agendar reunión"
                  >
                    Realiza tu Cita
                  </Button>
                </NavItem>
              )}
            </Nav>

            {/* Menú desplegable solo en móvil */}
            <div className="d-lg-none" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <UncontrolledDropdown nav>
                <DropdownToggle caret color="default" nav>
                  <img
                    src={require("assets/img/cara1.png")}
                    alt="Ícono de Menú"
                    className="navbar-menu-icon"
                  />
                </DropdownToggle>
                <DropdownMenu
                  right
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "5px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {menuOptions.map((item) => (
                    <DropdownItem key={item.path} tag={Link} to={item.path}>
                      <p style={menuItemStyle}>{item.label}</p>
                    </DropdownItem>
                  ))}
                  {showButton && (
                    <DropdownItem divider />
                  )}
                  {showButton && (
                    <DropdownItem
                      tag="a"
                      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2cHr6QweJLZXKEm2eIutWH2S1pB82Slw77iLFpLu6LIx3c5Pz57zto3PMwFIHf2-8bh1Anq4NN"
                      target="_blank"
                    >
                      <p style={{ ...menuItemStyle, color: "#fc71f0" }}>Solo Llámanos</p>
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
