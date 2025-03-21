import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Image() {
  return (
    <>
      <div
        className="section features-7 section-image"
        id="features"
        style={{
          backgroundImage: "url(" + require("assets/img/laptop-2620118.jpg") + ")"
        }}
      >
        <Container fluid>
          <Row>
            <Col className="px-0" md="6">
              <Col sm="12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons business_money-coins"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Ahorra Tiempo y Dinero</h5>
                    <p className="description">
                      Kind Mind se encargará de cumplir tus requerimientos en el menor tiempo posible, con la mejor calidad
                      del mercado y garantizando que tu empresa resalte sobre las demás. Kind Mind ofrece a los ingenieros y
                      diseñadores más preparados para resolver tus necesidades y sobrepasar tus expectativas.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                  <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Métricas e Indicadores</h5>
                    <p className="description">
                      Junto a tu solución, ofrecemos el servicio de entregar métricas, indicadores y comparadores de resultados,
                      para que puedas visualizar el avance que tu empresa tendrá gracias a la innovación en tecnología y
                      diseño.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="now-ui-icons education_paper"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Documentación</h5>
                    <p className="description">
                      Todo trabajo realizado por Kind Mind será documentado, para que tu empresa tenga un archivo histórico
                      del trabajo realizado y puedas auditar de mejor manera los resultados obtenidos.
                    </p>
                  </div>
                </div>
              </Col>
            </Col>
            <Col md="6">
              <div className="image-container">
                <img alt="..." src={require("assets/img/ipad3.png")}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Image;
