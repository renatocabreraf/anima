import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  link,
  Row,
  Col
} from "reactstrap";

// core components
import PulseHeader from "components/Headers/GeniusCloudHeader";
import Footer from "components/Footers/Footer.js";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";

function PulseViews() {
  const [specialitySelect, setSpecialitySelect] = React.useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <PulseHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">El Futuro de los Datos</h2>
                    <h4 className="description">
                      Toda empresa cuenta con un activo importante que define el éxito
                      de su paso sobre la competencia: el correcto manejo
                      de los datos. Es por ello que en Kind Mind hemos Desarrollador
                      estructuras de datos y almacenaje de información seguro de la mano de
                      AWS,
                      con el fin de ofrecer soluciones individuales, o bien en
                      conjunto con otros servicios de Kind Mind, asegurando la calidad del
                      producto y la seguridad de la información.
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md="2"></Col><Col md="2"></Col>
                  <Col md="4">
                    <img style={{
                      display: "flex",
                      position: "relative"

                    }}
                      src={require("assets/img/PB_AWS_logo_RGB.61d334f1a1a427ea597afa54be359ca5a5aaad5f-2.png")}></img>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>


        </div>

      </div>




      <Footer />
    </>
  );
}

export default PulseViews;
