import React from "react";
import { useAlert } from 'react-alert'
import axios from 'axios';
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import Footer from "components/Footers/Footer.js";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import FooterBlack from "components/Footers/FooterBlack";

function ContactUs() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [numberFocus, setNumberFocus] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  const alert = useAlert()
  const handleSubmit = (e) => {
    axios.post('https://a2giloiaf7.execute-api.us-east-1.amazonaws.com/default/SendContactEmail', {senderName: name, senderEmail:email, senderPhone:number , message: message})
      .then(response => {
        response.status === 200 ? alert.show("Mensaje enviado correctamente") : alert.show("Ha ocurrido un error al enviar el mensaje");
          return response.data;      
      })
      .catch(error => {
        console.log(error.response);
        alert.show("Lo sentimos, el mensaje no pudo ser enviado");
      })
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
    e.preventDefault();
  }

  React.useEffect(() => {
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">Envíanos un mensaje</h2>
                  <p className="description">
                    Puedes contactarnos con cualquier consulta respecto a nuestros servicios.
                    Nos pondremos en contacto contigo lo más pronto posible. <br></br>
                    <br></br>
                  </p>
                  <Form id="contact-form" role="form" onSubmit={e => handleSubmit(e)}>
                    <label>Tu nombre</label>
                    <InputGroup
                      className={nameFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Tu nombre..."
                        autoComplete="name"
                        placeholder="Tu nombre..."
                        type="text"
                        value={name}
                        onFocus={() => setNameFocus(true)}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => setNameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Email</label>
                    <InputGroup
                      className={emailFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Email..."
                        autoComplete="email"
                        placeholder="Email..."
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Teléfono</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="number"
                        placeholder="Teléfono ..."
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>
                    <FormGroup>
                      <label>Tu mensaje</label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></Input>
                    </FormGroup>
                    <div className="submit text-center">
                      <Button
                        className="btn-raised btn-round"
                        color="info"
                        defaultValue="Contact Us"
                        type="submit"
                      >
                        Enviar
                      </Button>
                    </div>
                  </Form>
                </Col>
                <Col className="ml-auto mr-auto" md="5"
              >
                  <div className="info info-horizontal mt-5">
                    <div className="icon icon-info">
                      <i className="now-ui-icons business_bulb-63"></i>
                    </div>
                    <div className="description"
                    >
                      <h4 className="info-title"
                      >Materializamos tus ideas</h4>
                      <p
                      >
                        Listanos tus requerimientos, <br></br>
                        envíanos tus ideas, <br></br>
                        disfruta el resultado.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">¿Tienes una pregunta? Ponte en contacto con nosotros</h4>
                      <p>
                        info@kindmindgt.com <br></br>
               
                        Lunes - Domingo, 9:00-22:00
                        +502 4751-6077
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="business_briefcase-24 now-ui-icons"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Ficha de Negocio</h4>
                      <p>
                        Kind Mind Technologies, Sociedad Anónima. <br></br>
                        NIT: 120340747 <br></br>
                        Ciudad de Guatemala <br></br>
                       
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div style={{ backgroundColor: "#929292", padding: "20px 0" }}>
            <Container fluid>
              <Row>
                <Col
                  md="4"
                  xs="12"
                  style={{
                    display: "flex",
                    
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    gap: "20px",
                  }}
                >
                  <span>info@kindmindgt.com</span>
                  
                </Col>
                <Col
                  md="4"
                  xs="12"
                  style={{
                    display: "flex",
                    
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    gap: "20px",
                  }}
                >
                  
                  <a
                    href="https://wa.me/50247516077?text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Tel: +502 4751-6077
                  </a>
                </Col>
                <Col
                  md="4"
                  xs="12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                    flexWrap: "wrap",
                    paddingTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/company/92917090/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <i
                      className="fab fa-linkedin"
                      style={{
                        fontSize: "2rem",
                        color: "white",
                        borderRight: "2px solid darkblue",
                        paddingRight: "10px",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61569560279035"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <i
                      className="fab fa-facebook"
                      style={{
                        fontSize: "2rem",
                        color: "white",
                        borderRight: "2px solid darkblue",
                        paddingRight: "10px",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/kindmindgt"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <i
                      className="fab fa-instagram"
                      style={{
                        fontSize: "2rem",
                        color: "white",
                        borderRight: "2px solid darkblue",
                        paddingRight: "10px",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.tiktok.com/@kindmindgt"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <i
                      className="fab fa-tiktok"
                      style={{
                        fontSize: "2rem",
                        color: "white",
                      }}
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <FooterBlack />
      </div>
    </>
  );
}

export default ContactUs;

