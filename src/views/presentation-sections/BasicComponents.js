import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function SectionCards() {
  const cards = [
    {
      title: "Conoce a la Licda. Jessica Ovalle",
      img: require("assets/img/aboutus.png"),
      path: "/about-us",
    },
    {
      title: "Contáctanos para más información",
      img: require("assets/img/contacto.png"),
      path: "/contact-us",
    },
  ];

  return (
    <>
      <style>
        {`
          .card-image {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-image:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          .card-title {
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
            color: #000;
            font-size: 1.2rem;
          }

          .card-link {
            text-decoration: none;
          }

          @media (min-width: 768px) {
            .centered-row {
              justify-content: center;
            }
          }
        `}
      </style>

      <Container className="my-5">
        <Row className="centered-row d-flex">
          {cards.map((card, index) => (
            <Col md="5" sm="10" xs="12" className="mb-4" key={index}>
              <Link to={card.path} className="card-link">
                <img src={card.img} alt={card.title} className="card-image" />
                <div className="card-title">{card.title}</div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default SectionCards;