/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function Marcas() {
  return (
    <>
      <div className="section section-icons" data-background-color="dark-blue">
        <Container fluid>
          <Row>

            <Col className="text-center" md="12">
              <h2 className="title">Nuestras Marcas</h2>
            </Col>
            <Col md="6" to="/pulse" tag={Link}>
              <img src="https://cdn.kindmindgt.com/assets/img/pulseweb.png"></img>
            </Col>
            <Col md="6">
              <img src="https://cdn.kindmindgt.com/assets/img/iNFINITY PROX.png"></img>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Marcas;
