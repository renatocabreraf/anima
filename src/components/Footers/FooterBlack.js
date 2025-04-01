/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function FooterBlack() {
  return (
    <>
      {/* CSS embebido */}
      <style>
        {`
          .footer-link {
            color: white;
            font-weight: 600;
            margin: 0 15px;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-link:hover {
            color: #ffb6f9;
          }

          .social-icon {
            width: 40px;
            height: 40px;
            margin: 0 10px;
            transition: transform 0.3s ease;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.12);
            padding: 5px;
            object-fit: contain;
            filter: brightness(1.1);
          }

          .social-icon:hover {
            transform: scale(1.1);
            background-color: rgba(255, 255, 255, 0.25);
          }

          .footer-menu {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          @media (max-width: 768px) {
            .footer-menu {
              justify-content: center;
              margin-top: 20px;
              flex-direction: column;
            }

            .footer-link {
              margin: 5px 0;
            }
          }

          .footer-bottom {
            text-align: center;
            color: white;
            font-size: 0.9rem;
            margin-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            padding-top: 15px;
          }
        `}
      </style>

      <footer
        className="footer"
        style={{
          backgroundColor: "#580e80",
          padding: "30px 0 10px 0",
        }}
      >
        <Container fluid>
          <Row className="align-items-center">
            {/* Redes sociales centradas */}
            <Col md="4" className="text-center mb-3 mb-md-0">
              <a
                href="https://www.instagram.com/_anima.psicologia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" // ícono cuadrado gris claro
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jessica-ovalle-76083022b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" // ícono cuadrado gris claro
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            </Col>

            {/* Menú horizontal a la derecha */}
            <Col md="8" className="footer-menu">
              <Link to="/about-us" className="footer-link">
                Acerca de
              </Link>
             
              <Link to="/contact-us" className="footer-link">
                Contáctanos
              </Link>
            </Col>
          </Row>

          {/* Línea y copyright centrado */}
          <Row>
            <Col className="footer-bottom">
              ©Copyright {new Date().getFullYear()} Anima Psicología. Developed by Kind Mind Technologies, S.A.
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
