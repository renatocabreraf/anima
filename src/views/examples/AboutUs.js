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
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, sapien eget efficitur facilisis, neque purus dignissim turpis, vitae tincidunt justo quam non nisi.',
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
            <h2 style={{ fontWeight: 'bold', color: '#333' }}>Sobre Jessica Ovalle</h2>
            <p style={{ fontSize: '20px', color: '#555' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec justo vel justo scelerisque faucibus.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          {[1, 2, 3, 4].map((i) => (
            <Col key={i} md="3" className="mb-4 d-flex justify-content-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  width: '100%',
                  height: '300px',
                  borderRadius: '15px',
                  backgroundImage: `url(/photo${i}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Col>
          ))}
        </Row>

        <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              width: '300px',
              height: '400px',
              borderRadius: '15px',
              backgroundImage: `url(${jessicaProfile.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
            }}
            onClick={() => handleClickPhoto(jessicaProfile)}
          />
        </div>

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
