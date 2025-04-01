import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar';
import Footer from 'components/Footers/Footer';

const jessicaProfile = {
  id: 1,
  src: '/jessica.jpg',
  modalImg: '/jessica-modal.jpg',
  title: 'Jessica Ovalle',
  subtitle: 'Licenciada en Psicología',
  description:
    'Jessica Mirella Ovalle Morales es Licenciada en Psicología Clínica con más de cinco años de experiencia en el ámbito de la salud mental. Su formación sólida y su pasión por el bienestar emocional la han llevado a trabajar con distintas poblaciones, especialmente con niñez y adolescencia, donde ha dejado una huella significativa. Además de su práctica clínica, ha sido catedrática universitaria, guiando y formando nuevas generaciones de profesionales desde un enfoque ético, empático y transformador.\n\nÁnima surge como el reflejo de su vocación: brindar un espacio seguro, cálido y profesional donde cada persona pueda sentirse escuchada, comprendida y acompañada. Se distingue por su compromiso humano y profundo respeto por la individualidad de cada historia, marcando una diferencia que trasciende lo clínico y conecta desde lo auténtico.',
  linkedin: 'https://www.linkedin.com/in/jessicaovalle',
};

function AboutJessica() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div
      style={{
        backgroundColor: scrolled ? '#fff' : '#E1F2F5',
        transition: 'background-color 0.4s ease-in-out',
        minHeight: '100vh',
      }}
    >
      <ScrollTransparentNavbar />
      <div className="wrapper"></div>
      <Container style={{ padding: '30px 0' }}>
        <Row>
          <Col className="text-center">
            <h2 style={{ fontWeight: 'bold', color: '#333' }}>Sobre la Licda. Jessica Ovalle</h2>
            <img
              alt="Sticker principal"
              src={require("assets/img/grad.png")}
              style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
            />
            <br /><br />
           
            <p style={{ fontSize: '20px', color: '#555' }}>
              Jessica Mirella Ovalle Morales es Licenciada en Psicología Clínica con más de cinco años de experiencia trabajando en pro de la salud mental. Ha dedicado gran parte de su trayectoria al acompañamiento psicológico de niños, adolescentes y adultos, y su labor como docente ha sido ampliamente reconocida por su sensibilidad, claridad y vocación.
              <br /><br />
             
              Ánima nace desde esa experiencia y sensibilidad, como una clínica que ofrece mucho más que consultas: un espacio donde cada persona encuentra comprensión, profesionalismo y calidez. En Ánima, cada historia importa, y cada proceso es acompañado con respeto, ética y humanidad.
            </p>
            <img
                alt="Sticker principal"
                src={require("assets/img/ppin.png")}
                style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
              />
            <img
                alt="Sticker principal"
                src={require("assets/img/cara2.png")}
                style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
              />
              <br /><br />
          </Col>
        </Row>

       
        

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={handleCloseModal}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                padding: '10px',
              }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  maxWidth: '600px',
                  maxHeight: '80vh',
                  width: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                }}
              >
                <img
                  src={selectedPhoto.modalImg}
                  alt={selectedPhoto.title}
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
                />
                <div>
                  <h3>{selectedPhoto.title}</h3>
                  <h5>{selectedPhoto.subtitle}</h5>
                  <p>{selectedPhoto.description}</p>
                  <a
                    href={selectedPhoto.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
      <Footer />
    </div>
  );
}

export default AboutJessica;