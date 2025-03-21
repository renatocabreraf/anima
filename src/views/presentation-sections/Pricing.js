import React from "react";
import { Container, Row, Col } from "reactstrap";

function Pricing() {
  return (
    <>
      <div
        style={{
          //padding: "1px",
          //margin: "2px auto",
        }}
      >
        <div style={{ backgroundColor: "#929292", padding: "20px 0" }}>
          <Container fluid>
            <Row>
              <Col
                md="4"
                xs="12"
                style={{
                  display: "flex",
                  
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  gap: "20px",
                }}
              >
                <span>info@kindmindgt.com</span>
                
              </Col>
              <Col
                md="4"
                xs="12"
                style={{
                  display: "flex",
                  
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  gap: "20px",
                }}
              >
                
                <a
                  href="https://wa.me/50247516077?text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Tel: +502 4751-6077
                </a>
              </Col>
              <Col
                md="4"
                xs="12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "15px",
                  flexWrap: "wrap",
                  fontWeight: "bold",
                }}
              >
                <a
                  href="https://www.linkedin.com/company/92917090/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <i
                    className="fab fa-linkedin"
                    style={{
                      fontSize: "2rem",
                      color: "white",
                      borderRight: "2px solid darkblue",
                      paddingRight: "10px",
                    }}
                  />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61569560279035"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <i
                    className="fab fa-facebook"
                    style={{
                      fontSize: "2rem",
                      color: "white",
                      borderRight: "2px solid darkblue",
                      paddingRight: "10px",
                    }}
                  />
                </a>

                <a
                  href="https://www.instagram.com/kindmindgt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <i
                    className="fab fa-instagram"
                    style={{
                      fontSize: "2rem",
                      color: "white",
                      borderRight: "2px solid darkblue",
                      paddingRight: "10px",
                    }}
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@kindmindgt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <i
                    className="fab fa-tiktok"
                    style={{
                      fontSize: "2rem",
                      color: "white",
                    }}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Pricing;
