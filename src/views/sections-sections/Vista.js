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
import VistaHeader from "components/Headers/VistaHeader";
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
        <VistaHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Mejoramos la VISTA</h2>
                    <h4 className="description">
                      Junto al Desarrollo de Software, Programación de Páginas Web y 
                      el Ecommerce, Kind Mind entiende que la experiencia del usuario
                      es parte fundamental del éxito de una aplicación hoy en día. Es
                      por este motivo que nos preocupamos por entregar productos visualmente 
                      atractivos, en donde la interacción de la  herramienta, junto con
                      su funcionalidad vayan siempre de la mano, encantando al usuario
                      final.
                    </h4>
                  </Col>
                </Row>
                <Col className="ml-auto mr-auto" lg="7" xl="6">
                  <Card className="card-profile card-plain">
                    <Row>
                      <Col md="5">
                        <div className="card-image">
                          
                            <img
                              alt="..."
                              className="img img-raised rounded"
                              src="https://cdn.kindmindgt.com/assets/img/Founders/4.png"
                            ></img>
                         
                        </div>
                      </Col>
                      <Col md="7">
                        <CardBody>
                          <CardTitle tag="h4">Melanie Padilla</CardTitle>
                          <h6 className="category">Communications and Image Development Manager</h6>
                          <p className="card-description">
                            Profesional de comunicaciones y diseño gráfico, encargada del equipo
                            de diseñadores, UI & UX de Kind Mind. 
                          </p>
                          <CardFooter>
                            <a href="https://www.linkedin.com/in/fernanda-padilla-02b0141ab/"><Button
                              className="btn-icon btn-neutral"
                              color="linkedin"
                              href="https://www.linkedin.com/in/fernanda-padilla-02b0141ab/"
                             
                            >
                              <i className="fab fa-linkedin"></i>
                            </Button></a>

                            
                          </CardFooter>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                </Col>
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
                      src="https://cdn.kindmindgt.com/assets/img/VistaClientes.png"></img>
                    </Col>
                  </Row>
                </Container>
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
