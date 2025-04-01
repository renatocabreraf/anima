// PulseBlog.js (versión blog con publicaciones + Instagram)
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import Footer from "components/Footers/Footer";

// Noticias simuladas
const blogPosts = [
  {
    title: "Lanzamiento de nueva app para el agro en Guatemala",
    date: "30 de marzo de 2025",
    summary: "Infinity revoluciona el agro guatemalteco con sensores y predicciones inteligentes.",
    image: "https://source.unsplash.com/random/800x400/?technology,agriculture",
  },
  {
    title: "Kind Mind desarrolla solución para eCommerce en tiempo récord",
    date: "27 de marzo de 2025",
    summary: "Electroman lanza su tienda en línea con un backend robusto y diseño intuitivo.",
    image: "https://source.unsplash.com/random/800x400/?ecommerce,software",
  },
  {
    title: "Nukunem y Kind Mind promueven tecnología en Atitlán",
    date: "25 de marzo de 2025",
    summary: "Se consolida un hub tecnológico en Sololá con impacto social y educativo.",
    image: "https://source.unsplash.com/random/800x400/?lake,technology",
  },
];

function PulseBlog() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", width: "100%", zIndex: 1000 }}>
        <ScrollTransparentNavbar scrolled={scrolled} />
      </div>

      <div
        style={{
          backgroundColor: scrolled ? "white" : "#E1F2F5",
          transition: "background-color 0.5s ease",
          paddingTop: "100px",
          paddingBottom: "60px",
          minHeight: "100vh",
        }}
      >
        <Container>
          <h2 className="text-center mb-5" style={{ fontWeight: "bold" }}>Últimas noticias</h2>
          <Row>
            {blogPosts.map((post, idx) => (
              <Col md="4" key={idx} className="mb-4">
                <div style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)", borderRadius: "10px", overflow: "hidden" }}>
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                  <div style={{ padding: "20px", backgroundColor: "white" }}>
                    <h5 style={{ fontWeight: "bold" }}>{post.title}</h5>
                    <p style={{ fontSize: "0.9rem", color: "gray" }}>{post.date}</p>
                    <p>{post.summary}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Instagram embed */}
        <Container className="text-center mt-5">
          <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>Síguenos en Instagram</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <iframe
              src="https://www.instagram.com/kindmindgt/embed"
              width="400"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              title="Instagram Feed"
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default PulseBlog;