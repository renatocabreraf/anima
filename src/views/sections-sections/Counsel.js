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
import PulseHeader from "components/Headers/CounselHeader";
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
                    <h2 className="title">Generamos Confianza</h2>
                    <h4 className="description">
                      Parte de la misión de Kind Mind es acompañar a las
                      empresas en su transformación digital. Es por ello
                      que entendiendo que no todeas las empreas tienen
                      un departamento de tecnología, ponemos a la
                      disposición de tu empresa asesorías y consultorías
                      profesionales, generando de esta manera confianza
                      en el manejo de tu sistema, aplicación, herramienta
                      o web, asegurando así tu crecimiento.
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="info info-hover">
                      <div className="icon icon-primary icon-circle">
                        <i className="now-ui-icons business_briefcase-24"></i>
                      </div>
                      <h4 className="info-title">Asesorías y Consultorías</h4>
                      <p className="description">
                        Al contarnos tus necesidades, mostrarnos tus herramientas
                        e indicarnos cuales son tus deseos, el equipo de
                        asesorías y consultorías de Kind Mind se encarga de
                        realizar una guía de proyecto, acompañarte en
                        capacitaciones, desarrollos y generación de material
                        para asegurar que puedas seguir adelante con tu proyecto
                        empresarial sin limitarte por el desconocimiento del
                        manejo tecnológico.
                      </p>


                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-hover">
                      <div className="icon icon-info icon-circle">
                        <i className="now-ui-icons ui-1_zoom-bold"></i>
                      </div>
                      <h4 className="info-title">Auditorías</h4>
                      <p className="description">
                        Si tu deseo es conocer vulnerabilidades en tus herramientas
                        tecnológicas, así como asegurar que tu equipo de trabajo
                        actúa correctamente bajo las normas de seguridad impuestas
                        en tu empresa, Kind Mind puede realizar auditorías que
                        te permitan conocer los puntos débiles en materia de
                        tecnología y reforzarlos, para resguardar tu seguridad y
                        la de los datos.
                      </p>
                      <br />




                    </div>
                  </Col>

                </Row>
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>

          <Container >
            <Row>

              <Col className="text-center" md="12">
                <h2 className="title">Clientes Satisfechos</h2>
              </Col>
              <Col md="12">
                <img style={{
                  display: "flex",
                  position: "relative"

                }}
                  src="https://cdn.kindmindgt.com/assets/img/CounselClientes.png"></img>
              </Col>

            </Row>
          </Container>
        </div>
        <div className="separator-line bg-info"></div>

      </div>




      <Footer />
    </>
  );
}

export default PulseViews;
