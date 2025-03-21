import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Cards() {
  return (
    <>
      <div className="section section-cards" id="engineering">
        <Container>
          <Row>
            <Col className="text-center ml-auto mr-auto" md="8">
              <div className="section-description">
                <h2 className="title">Informática y Sistemas</h2>
                <h6 className="category">Tecnologías Emergentes</h6>
                <h5 className="description">
                  Desarrollo e implementación de sistemas empresariales, páginas web, aplicaciones móviles, cualquier herramienta
                  que permita proyectarte a tí y a tu negocio al mundo, ser tendencia y liderar el mercado. Deja de ser un seguidor
                  y conviértete en un líder. Kind Mind es tu aliado.
                  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                </h5>
                
              </div>
              
            </Col>
          </Row>
          {/* <Row>
            <Col md="12">
              <div className="images-container">
                {/* <div className="image-container1 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/stc1.jpg")}
                  ></img>
                </div> 
                <div className="image-container1 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/socializa.png")}
                  ></img>
                </div>
                
                <div className="image-container2 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/stc1.jpg")}
                  ></img>
                </div>
                <div className="image-container3 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/socializa2.png")}
                  ></img>
                </div>
                <div className="image-container4 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/founders1.png")}
                  ></img>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default Cards;
