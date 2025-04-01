import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

function Servicios() {
  const cintilloText = "100% Kind 100% Mind";

  return (
    <>
      {/* Contenido central */}
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 0",
        }}
      >
        <Container fluid>
          <Row className="align-items-center">
            {/* Columna izquierda: Imagen */}
            <Col
              xs="12"
              md="6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="Sticker principal"
                src={require("assets/img/cara1.png")}
                style={{
                  width: "80%",
                  maxWidth: "300px",
                  borderRadius: "10px",
                }}
              />
            </Col>

            {/* Columna derecha: Texto */}
            <Col
              xs="12"
              md="6"
              style={{
                padding: "20px",
                color: "#1c1862",
              }}
            >
              <p
                style={{
                  lineHeight: "1.3",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.8rem)",
                  fontWeight: "800",
                  color: "#1c1862",
                }}
              >
                Tu mente en armonía, tu vida en equilibrio.
              </p>
              <Button
                style={{
                  backgroundColor: "#fc71f0",
                  border: "2px solid #E0C4DF",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
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
            </Col>
          </Row>
        </Container>
      </div>

      {/* Incrustado de Instagram */}
      <Container className="text-center my-5">
        <h2 style={{ fontWeight: "bold", marginBottom: "30px", color: "#1c1862" }}>
          Síguenos en Instagram
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://www.instagram.com/_anima.psicologia/embed"
            width="400"
            height="480"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            title="Instagram Anima Psicología"
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
      </Container>
    </>
  );
}

export default Servicios;
