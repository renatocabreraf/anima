import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Content() {
  return (
    <>
      <div className="section section-content" data-background-color="black" >
        <Container>
          <Row>
            <Col md="6">
              <div className="image-container">
                <img
                  alt="..."
                  className="img img-raised rounded img-comments rellax"
                  data-rellax-speed="1"
                  src={require("assets/img/presentation-page/home-office-4996834.jpg")}
                ></img>
                <img
                  alt="..."
                  className="img img-raised rounded img-blog rellax"
                  data-rellax-speed="4"
                  src={require("assets/img/presentation-page/office-820390.jpg")}
                ></img>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" md="4">
              <div className="section-description">
                <h2 className="title">Diseño Gráfico</h2>
                <h6 className="category">Transformación digital</h6>
                <h5 className="description">
                  Kind Mind reconoce que de la mano del avance tecnológico, es importante tener un diseño atrayente y moderno,
                  que identifique a la organización y la proyecte ante las demás. Es por eso que además de desarrollo tecnológico,
                  Kind Mind crea y diseña el estilo de tu empresa. 
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Content;
