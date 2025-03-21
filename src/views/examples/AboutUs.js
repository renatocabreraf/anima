import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar';
import Footer from 'components/Footers/Footer';

const initialPhotosData = [
  {
    id: 1,
    src: 'https://cdn.kindmindgt.com/assets/img/R.png',
    modalImg: '/r2.jpg',
    title: 'Renato Cabrera',
    subtitle: 'CEO & Fundador',
    description:
      'Renato es Project Manager certificado en SCRUM, ITIL 4, Lean Six Sigma, con experiencia en gerencia y dirección de proyectos tecnológicos...',
    linkedin: 'https://www.linkedin.com/in/renatocabreraf',
  },
  {
    id: 2,
    src: 'https://cdn.kindmindgt.com/assets/img/mro2.png',
    modalImg: '/_25A2716.jpg',
    title: 'María Reneé Ordoñez',
    subtitle: 'CXO',
    description:
      'Experta en desarrollo de negocios y experiencia de usuario. Parte de múltiples equipos dedicados al desarrollo en Guatemala.',
    linkedin: 'https://www.linkedin.com/in/al-grano-con-renee-bb7475b3',
  },
  {
    id: 3,
    src: 'https://cdn.kindmindgt.com/assets/img/j.png',
    modalImg: '/_25A2606.jpg',
    title: 'José Herrera',
    subtitle: 'CIO & Co-Fundador',
    description:
      'Ingeniero en Informática, con experiencia en banca e instrumentos financieros. Experto en Gobernanza y Gestión de Datos.',
    linkedin: 'https://www.linkedin.com/in/joseherrera7/',
  },
  {
    id: 4,
    src: 'https://cdn.kindmindgt.com/assets/img/e.png',
    modalImg: '/_25A2652.jpg',
    title: 'Emmanuel Alvarado',
    subtitle: 'CTO & Co-Fundador',
    description:
      'Senior Developer, experto en servicios en la nube y arquitecturas modernas de software.',
    linkedin: 'https://www.linkedin.com/in/emmanuel-alvarado-jl99/',
  },
  {
    id: 5,
    src: '/chiwi5.png',
    modalImg: '/chiwi4.png',
    title: 'Francisco Alonzo',
    subtitle: 'CDO & Co-Fundador',
    description:
      'Analista de datos y BI. Experto en transformar negocios a través de la interpretación estratégica de datos.',
    linkedin: 'https://www.linkedin.com/in/fjalonzoc/',
  },
];

function AboutUs() {
  const [photos, setPhotos] = useState(initialPhotosData);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  const startAutoScroll = () => {
    if (!isMobile) {
      stopAutoScroll();
      intervalRef.current = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 1.5;
        }
      }, 16);
    }
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isMobile) {
      startAutoScroll();
    }
    return () => clearInterval(intervalRef.current);
  }, [isMobile]);

  const handleClickPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    if (selectedPhoto) {
      setPhotos((prevPhotos) =>
        prevPhotos.map((p) =>
          p.id === selectedPhoto.id
            ? { ...p, src: selectedPhoto.modalImg, modalImg: selectedPhoto.src }
            : p
        )
      );
    }
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper"></div>
      <Container style={{ padding: '30px 0' }}>
        <Row>
          <Col className="text-center">
            <h2 style={{ fontWeight: 'bold', color: '#333' }}>Nuestro Equipo</h2>
            <p style={{ fontSize: '20px', color: '#555' }}>
              Conoce a las mentes detrás de las soluciones.
            </p>
          </Col>
        </Row>

        {/* Sección para escritorio */}
        {!isMobile && (
          <div
            ref={containerRef}
            style={{
              overflowX: 'auto',
              display: 'flex',
              gap: '20px',
              marginTop: '20px',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              touchAction: 'pan-y',
              position: 'relative',
            }}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            {[...photos, ...photos].map((photo, index) => (
              <div
                key={index}
                style={{
                  minWidth: '450px',
                  height: '500px',
                  borderRadius: '15px',
                  backgroundImage: `url(${photo.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => handleClickPhoto(photo)}
              />
            ))}
          </div>
        )}

        {/* Sección para móvil */}
        {isMobile && (
          <div style={{ position: 'relative', marginTop: '20px', height: '500px' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                backgroundImage: `url(${photos[currentIndex].src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
              }}
              onClick={() => handleClickPhoto(photos[currentIndex])}
            />
            <button
              onClick={prevPhoto}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '10px',
                zIndex: 10,
              }}
            >
              ‹
            </button>
            <button
              onClick={nextPhoto}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '10px',
                zIndex: 10,
              }}
            >
              ›
            </button>
          </div>
        )}

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
                  flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                  alignItems: window.innerWidth < 768 ? 'center' : 'flex-start',
                  gap: '20px',
                }}
              >
                <img
                  src={selectedPhoto.modalImg}
                  alt={selectedPhoto.title}
                  style={{ maxWidth: '40%', height: 'auto' }}
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

      {/* Sección de Valores */}
      <div style={{ backgroundColor: 'white', padding: '60px 20px', position: 'relative' }}>
        <Container>
          <Row style={{ marginTop: '50px', borderTop: '1px solid #ccc' }}>
            {[
              {
                letra: 'P',
                titulo: 'Planteamos',
                texto:
                  'Planteamos nuestra opinión, con respeto. Tomamos una posición o defendemos una idea de manera ﬁrme pero respetuosa.',
              },
              {
                letra: 'A',
                titulo: 'Apoyamos',
                texto:
                  'Apoyo mutuo, el equipo se compromete a responsabilizarse por sus acciones, tareas y compromisos.',
              },
              {
                letra: 'T',
                titulo: 'Toma de decisiones',
                texto:
                  'Tomamos decisiones conscientes, actuamos con propósito y basados en la alineación de objetivos del proyecto.',
              },
              {
                letra: 'A',
                titulo: 'Aprendemos',
                texto:
                  'Aprendemos continuamente, buscamos siempre el crecimiento personal y profesional tanto del equipo como de los negocios.',
              },
            ].map((valor, index) => (
              <Col
                key={index}
                md="3"
                style={{ padding: '30px', borderRight: index < 3 ? '1px solid #ccc' : 'none' }}
              >
                <h3 style={{ color: '#1c1862', fontWeight: 'bold', textAlign: 'center' }}>
                  {valor.letra}
                </h3>
                <h5 style={{ color: '#1c1862', textAlign: 'center' }}>{valor.titulo}</h5>
                <p style={{ fontSize: '14px', color: '#555' }}>{valor.texto}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
