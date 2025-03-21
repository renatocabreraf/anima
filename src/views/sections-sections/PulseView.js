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
import PulseHeader from "components/Headers/PulseHeader.js";
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
                    <h2 className="title">Innovamos la manera de transmitir información.</h2>
                    <h4 className="description">
                      En Kind Mind, estamos comprometidos con el desarrollo humano, empresarial
                      y tecnológico. Es por eso que hemos creado Pulse, un servicio dedicado a
                      la transmisión de datos por medio de Códigos QR, facilitando operaciones empresariales
                      ahorrando costos de impresión y siendo ecológicos con el medio ambiente.
                    </h4>
                    
                  </Col>
                  
                </Row>
                <Row>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-primary icon-circle">
                        <i className="now-ui-icons business_badge"></i>
                      </div>
                      <h4 className="info-title">Tarjetas de presentación Virtuales</h4>
                      <p className="description">
                        Manejar tarjetas de presentación en papel, es algo elegante, profesional
                        y llamativo, pues es dar a conocerte en un ámbito profesional, sin embargo,
                        es sabido por todos que hoy en día mucha de esa información se vuelve irrelevante
                        si se encuentra en papel, pues se desecha facilmente y la atención se pierde por completo.
                        Es por ello que Pulse te ofrece el manejo de tus tarjetas de presentación por medio de
                        Códigos QR, ahorrándote costos de impresión, asegurando que la información
                        sea recibida y almacenada en el celular y siendo amigables con el medio ambiente
                        (Proximamente disponible en Apple Wallet). 
                      </p>
                    </div>
                    <Col md="12">
              <img style={{
                display: "flex",
                position: "relative"

              }}
              src="https://cdn.kindmindgt.com/assets/img/Renato Cabrera - Presentation Card-2.png"></img>
            </Col>
                  </Col>
                 
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-info icon-circle">
                        <i className="now-ui-icons shopping_shop"></i>
                      </div>
                      <h4 className="info-title">Restaurantes</h4>
                      <p className="description">
                        Kind Mind tiene al rededor de 5 años de experiencia con trabajo en restaurantes y
                        es un factor común de todos ellos 2 aspectos: Menús y Wi-Fi.
                        Pulse adelanta a los restaurantes a la innovación ofreciendo compartir tu Menú por medio
                        de Códigos QR, los cuales se colocan directamente en tu mesa y tus clientes pueden leerlos
                        con sus dispositivos móviles, agilizando el proceso de atención y dando una atención diferenciada
                        sobre los competidores.
                        También puedes compartir internet por medio de códigos QR, ahorrando tiempo al momento
                        de dar acceso a tu red de visitantes y promoviendo la facilidad de contacto en tu 
                        establecimeinto.
                      </p>
                    </div>
                    <Col md="12">
              <img style={{
                display: "flex",
                position: "relative"

              }}
              src="https://cdn.kindmindgt.com/assets/img/Carlos & Carlos Antigua Guatemala - English.png"></img>
            </Col>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-success icon-circle">
                        <i className="now-ui-icons tech_watch-time"></i>
                      </div>
                      <h4 className="info-title">Documentos y Enlaces</h4>
                      <p className="description">
                        Dentro de nuestro día a día, la demanda de priorizar la organización
                        y aprovechar el tiempo al máximo es nuestra meta, poder realizar tareas 
                        en un tiempo rápido, que garantice los mismos resultados es una misión del día a día. 
                        En Kind Mind, podemos mejorar tus tiempos al convertir links, documentos y archivos multimedia
                        en Códigos QR, facilitando así la transmisión de datos, postear en cualquier parte
                        la información y tener un medio virtual por el cual tus colaboradores
                        puedan intercambiar conjuntos de información. Compartir y generar innovación es
                        nuestra misión, Kind Mind te lleva al futuro y hace que tu empresa crezca junto a 
                        tus colaboradores.
                        
                      </p>
                    </div>
                    <Col md="12">
                      <img style={{
                        display: "flex",
                        position: "relative"

                      }}
                      src="https://cdn.kindmindgt.com/assets/img/Pulse - Ejemplo de Imagen.png"></img>
                    </Col>
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
              src="https://cdn.kindmindgt.com/assets/img/MARCAS PULSE V1.png"></img>
            </Col>
            
          </Row>
        </Container>
      </div>
          <div className="separator-line bg-info"></div>
          <div className="projects-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">¿Cómo puedes trabajar con Pulse?</h2>
                  
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/650_1200.jpg") + ")"
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h2"></CardTitle>
                      <p className="card-description">
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Ponte en contacto con nosotros
                      </h4>
                      <p className="description">
                        Comunicate con nosotros, para que nos puedas comentar tu idea y nos indiques si ya tienes el
                        material listo o deseas que lo construyamos de 0.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons business_bulb-63"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Analizamos el Diseño Final</h4>
                      <p className="description">
                        Con nuestra experiencia podremos indicarte si es un buen material para publicar en tu
                        QR y procedemos a crear tu código. Tu código puede ser personalizado con colores y fondos
                        distintos, añadiendo el logo de tu empresa para darle identidad. 
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons ui-1_check"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">¡Hemos terminado!</h4>
                      <p className="description">
                        Te mostramos el resultado y te lo compartimos para que puedas iniciar con tu transformación
                        digital.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
           
          
          
        </div>
        <Footer />
      </>
  );
}

export default PulseViews;
