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
                src={require("assets/img/check.png")}
                style={{
                  width: "80%",
                  maxWidth: "300px", // Limita el tamaño máximo
                  borderRadius: "10px", // Bordes redondeados
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
                  fontWeight: "800", // Aumenta el grosor de las letras
                  color: "#1c1862", // Color sólido
                }}
              >
                Da el primer paso hacia tu bienestar. Agenda tu cita y empieza a sentirte mejor hoy.
              </p>
              <Button
                style={{
                  backgroundColor: "#fc71f0", // Rosado por defecto
                  border: "2px solid #fc71f0",
                  color: "white",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "30px", // Bordes redondeados
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
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2cHr6QweJLZXKEm2eIutWH2S1pB82Slw77iLFpLu6LIx3c5Pz57zto3PMwFIHf2-8bh1Anq4NN"
                target="_blank"
                aria-label="Agendar reunión"
              >
               Solo Llámanos
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

     
    </>
  );
}

export default Servicios;
