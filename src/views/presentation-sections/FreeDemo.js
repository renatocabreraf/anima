import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function FreeDemo() {
  return (
    <>
      <div className="section section-free-demo" id="plans">
        <Container>
          <Row>
            <Col lg="7" md="12">
              <div className="section-description">
                
                <h2 className="title">Planes de Trabajo</h2>
                <h5 className="description">
                  Kind Mind ofrece dos formas de trabajo, para que te sientas cómodo y seguro. Confía en nosotros y nosotros 
                  te recompenzaremos. Kind Mind innova y avanza hacia el futuro.
                </h5>
                <div className="github-buttons">
                  <Button
                    className="btn-round"
                    color="info"
                    href="/contact-us"
                    target="_blank"
                  >
                    ¡Contáctanos!
                  </Button>
                  
                </div>
                <div className="clearfix"></div>
              </div>
              <Row>
                <Col className="pt-5" md="6">
                  <Card
                    className="card-pricing card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/project1.jpg") + ")"
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h3">Trabajo por Hora</CardTitle>
                      <ul>
                        <li>
                          <b>Facturación</b> de horas trabajadas
                        </li>
                        <li>
                          <b>Pagas</b> por lo que deseas hacer
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_simple-remove text-danger"></i>{" "}
                          Trabajo Personalizado
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_simple-remove text-danger"></i>{" "}
                          Atención Limitada
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_simple-remove text-danger"></i>{" "}
                          Soporte por medio de tickets
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="pt-5" md="6">
                  <Card
                    className="card-pricing card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/pricing1.jpg") + ")"
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h3">Fee Mensual</CardTitle>
                      <ul>
                        <li>
                          <b>Facturación</b> Mensual
                        </li>
                        <li>
                          <b>Atención</b> Permanente
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_check text-success"></i>{" "}
                          Trabajo Personalizado
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_check text-success"></i>{" "}
                          Atención Ilimitada
                        </li>
                        <li>
                          <i className="now-ui-icons ui-1_check text-success"></i>{" "}
                          Soporte Inmediato
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="5" md="12">
              <div className="github-background-container">
                <i className="far fa-handshake"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FreeDemo;
