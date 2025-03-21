import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import Footer from "components/Footers/Footer";

// Ajusta estas importaciones según la ubicación de tu carpeta /img
import cliente1 from "assets/img/CLIENTE01.png";
import cliente2 from "assets/img/CLIENTE02.png";
import cliente3 from "assets/img/CLIENTE0003.png";
import cliente4 from "assets/img/CLIENTE04.png";
import cliente5 from "assets/img/CLIENTE05.png";
import cliente6 from "assets/img/CLIENTE06.png";
import cliente7 from "assets/img/CLIENTE07.png";
import cliente8 from "assets/img/CLIENTE08.png";
import cliente9 from "assets/img/CLIENTE09.png";
import cliente10 from "assets/img/electro1.png";

import cliente01 from "assets/img/CLIENTES1.png";
import cliente02 from "assets/img/CLIENTES2.png";
import cliente03 from "assets/img/CLIENTES3.png";
import cliente04 from "assets/img/CLIENTES4.png";
import cliente05 from "assets/img/CLIENTES5.png";
import cliente06 from "assets/img/CLIENTES6.png";


// Arreglo de testimonios (la propiedad modalImg se mantiene, pero ahora usaremos src en el modal)
const clientTestimonialsData = [
  {
    id: 1,
    src: cliente05,
    modalImg: cliente06,
    name: "Mustang Club Guatemala",
    feedback: "Desarrollo web perfecto, proyectando el club en todo el mundo, siendo elegibles para ser el club oficial de Guatemala gracias a esta herramienta.",
    feedback2: "Ivan Álvarez, Vice Presidente.",
  },
  {
    id: 2,
    src: cliente04,
    modalImg: cliente03,
    name: "Quedely",
    feedback: "Excelente trabajo de desarrollo, implementaciones exitosas y gran manejo de tecnologías emergentes.",
    feedback2: "Luis Ayala, Gerente de Operaciones.",
  },
  
  {
    id: 3,
    src: cliente03,
    modalImg: cliente04,
    name: "La Finka",
    feedback: "Gran acompañamineto y expertos en tecnología. Observaciones precisas y soluciones reales",
    feedback2: "Juan Carlos Quan, Gerente General.",
  },
  {
    id: 4,
    src: cliente01,
    modalImg: cliente02, // Se usaba anteriormente para el modal, ahora no se utiliza
    name: "Electroman",
    feedback: "Excelente servicio y calidad de desarrollo, nuestra empresa se ha impactado positivamente luego de lanzar nuestro ecommerce.",
    feedback2: "Gary Moran, Gerente Comercial.",
  },
  {
    id: 5,
    src: cliente02,
    modalImg: cliente01,
    name: "GCG",
    feedback: "Resultados inmediatos, agradecidos de escoger a Kind Mind como aliado en tecnología y diseño.",
    feedback2: "Ninoshka Salazar, Contratos Indstriales.",
  },
 
];

function PulseViews() {
  // Estado de los testimonios (se mantiene sin modificar al cerrar el modal)
  const [testimonials, setTestimonials] = useState(clientTestimonialsData);

  // Estado para el modal (cliente seleccionado)
  const [selectedClient, setSelectedClient] = useState(null);

  // Índice para el carrusel móvil
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Referencias para el auto-scroll en escritorio
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Detectar si es móvil o escritorio (por ancho de pantalla)
  const isMobile = window.innerWidth <= 768;

  // Funciones para auto-scroll en escritorio
  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1.5;
      }
    }, 16);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isMobile) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    return () => clearInterval(intervalRef.current);
  }, [isMobile]);

  // Funciones de navegación para versión móvil
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Al cerrar el modal, se cierra sin intercambiar imágenes
  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  return (
    <>
      <ScrollTransparentNavbar />

      {/* SECCIÓN: "Escogidos por:" */}
      <Container style={{ marginTop: "50px", marginBottom: "80px" }}>
        <Row>
          <Col className="text-center">
            <h2 style={{ fontWeight: "bold", color: "#333", marginBottom: "40px" }}>
              Escogidos por:
            </h2>
          </Col>
        </Row>

        <Row style={{ alignItems: "center" }}>
          <Col md="4" xs="12" className="text-center">
            <img
              src={cliente1}
              alt="Cliente"
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          <Col md="8" xs="12">
            <h3>Electroman</h3>
            <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
            Empresa guatemalteca de venta y distribución de electrodomésticos 
            y tecnología con un gran compromiso por llevar productos de 
            calidad a los hogares guatemaltecos. 
            clientes.
            <br/><br/>
            Ecommerce.
            </p>
          </Col>
        </Row>
        <br />
        <Row style={{ alignItems: "center" }}>
          <Col md="4" xs="12" className="text-center">
            <img
              src={cliente2}
              alt="Cliente"
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          <Col md="8" xs="12">
            <h3>GCG</h3>
            <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
            Empresa dedicada a brindar soluciones gastronómicas de excelencia 
            y alta confiabilidad. Presentes en más de 20 países en el Caribe, 
            América Central y América del Sur y conforman un equipo de más 
            de 2000 personas.
            <br/><br/>
            Consultoría, Asesoría y Diseño de Imagen.
            </p>
          </Col>
        </Row>
        <br />
        <Row style={{ alignItems: "center" }}>
          <Col md="4" xs="12" className="text-center">
            <img
              src={cliente3}
              alt="Cliente"
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          <Col md="8" xs="12">
            <h3>La Finka</h3>
            <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
            Cadena de restaurantes temáticos en Guatemala.
            <br/><br/>
            ERP, Consultoría, Asesoría.
            </p>
          </Col>
        </Row>
        <br />
        <Row style={{ alignItems: "center" }}>
          <Col md="4" xs="12" className="text-center">
            <img
              src={cliente8}
              alt="Cliente"
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "10px",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          <Col md="8" xs="12">
            <h3>Nukunem</h3>
            <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
            Nukunem es una organización no lucrativa que tiene como meta 
            convertir a Atitlán en un Centro de Impacto Tecnológico para 
            ofrecer una red de profesionales de alto nivel.
            <br/><br/>
            Web.
            </p>
          </Col>
        </Row>
        <br />
        
        {/* Repite la estructura para los demás clientes según necesites */}
      </Container>

      {/* SECCIÓN: "Lo que dicen de nosotros" */}
      <Container style={{ marginTop: "50px", marginBottom: "80px" }}>
        <Row>
          <Col className="text-center">
            <h2 style={{ fontWeight: "bold", color: "#333", marginBottom: "40px" }}>
              Lo que dicen de nosotros
            </h2>
          </Col>
        </Row>

        {isMobile ? (
          // Versión móvil: mostrar una sola imagen con flechas para navegar
          <div style={{ position: "relative", marginTop: "20px", height: "500px" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "15px",
                backgroundImage: `url(${testimonials[currentTestimonialIndex].src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
              onClick={() =>
                setSelectedClient(testimonials[currentTestimonialIndex])
              }
            />
            <button
              onClick={prevTestimonial}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.5)",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "10px",
                zIndex: 10,
              }}
            >
              ‹
            </button>
            <button
              onClick={nextTestimonial}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.5)",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                padding: "10px",
                zIndex: 10,
              }}
            >
              ›
            </button>
          </div>
        ) : (
          // Versión escritorio: carrusel infinito con auto-scroll
          <div
            ref={containerRef}
            style={{
              overflowX: "auto",
              display: "flex",
              gap: "20px",
              paddingBottom: "20px",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              touchAction: "pan-y",
            }}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            {[...testimonials, ...testimonials].map((client, index) => (
              <div
                key={index}
                style={{
                  minWidth: "450px",
                  height: "500px",
                  borderRadius: "15px",
                  backgroundImage: `url(${client.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
                onClick={() => setSelectedClient(client)}
              />
            ))}
          </div>
        )}
      </Container>

      {/* MODAL DEL TESTIMONIO */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={handleCloseModal}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              padding: "10px",
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "15px",
                maxWidth: "600px",
                maxHeight: "80vh",
                width: "90%",
                display: "flex",
                flexDirection: window.innerWidth < 768 ? "column" : "row",
                alignItems: window.innerWidth < 768 ? "center" : "flex-start",
                gap: "20px",
              }}
            >
              {/* Ahora se muestra la imagen clickeada, usando selectedClient.src */}
              <img
                src={selectedClient.src}
                alt={selectedClient.name}
                style={{
                  maxWidth: "40%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
              <div>
                <h3>{selectedClient.name}</h3>
                <p>{selectedClient.feedback}</p>
                <p>{selectedClient.feedback2}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default PulseViews;
