// PulseBlog.js (versión blog con publicaciones + Instagram)
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import FooterBlack from "components/Footers/FooterBlack";
import { Button } from "reactstrap";
function ContactoAnima() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    script.onload = () => {
      if (window.calendar) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1BF2wEKe6fsiUARcnRzR2CjV4-7h5x17XJ0D0MXS71WKgdjC26jsIsXBUhf_kijEqxYh1oWCOQ?gv=true",
          color: "#fc71f0",
          label: "Reserva tu Cita",
          target: document.getElementById("calendar-button")
        });

        // Aplicar estilo personalizado al botón una vez cargado
        setTimeout(() => {
          const calendarBtn = document.querySelector(".Gc__Button");
          if (calendarBtn) {
            calendarBtn.style.backgroundColor = "#fc71f0";
            calendarBtn.style.border = "2px solid #E0C4DF";
            calendarBtn.style.color = "white";
            calendarBtn.style.fontWeight = "bold";
            calendarBtn.style.padding = "10px 20px";
            calendarBtn.style.borderRadius = "30px";
            calendarBtn.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
            calendarBtn.style.transition = "all 0.3s ease";
          }
        }, 500);
      }
    };
  }, []);

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
        <ScrollTransparentNavbar scrolled={scrolled} />
      </div>

      <div
        style={{
          backgroundColor: scrolled ? "white" : "#E1F2F5",
          transition: "background-color 0.5s ease",
          paddingTop: "250px",
          paddingBottom: "60px",
          minHeight: "100vh",
        }}
      >
        <Container>
          <Row>
            <Col md="6" className="mb-5 text-center">
              <img
                alt="Sticker principal"
                src={require("assets/img/6d01b25a-2387-4be7-b21b-bff22917864d.png")}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              />
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
              <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                    Al realizar tu cita, recibirás un correo de confirmación para asegurar el espacio de tu consulta.
                  </p>
            </Col>

            <Col md="6">
              <div >
                
                <div className="description">
                  <h4 className="info-title" style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1c1862" }}>Tu bienestar emocional comienza aquí</h4>
                  <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>Una clínica creada para escucharte, guiarte y acompañarte en tu proceso.</p>
                </div>
              </div>
              <div >
               
                <div className="description">
                  <h4 className="info-title" style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1c1862" }}>Contáctanos directamente</h4>
                  <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>
                    jessyovalle@gmail.com <br />
                    Lunes a Viernes de 3:00 pm a 6:00 pm <br />
                    Sábados de 8:00 am a 12:00 pm <br />
                    Tel: 5834-0613
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
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
      </div>

      <FooterBlack />
    </>
  );
}

export default ContactoAnima;
