import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components
import gcgLogo from "../../assets/img/gcg-logo.png";
import doncarlos from "../../assets/img/Captura de pantalla 2024-03-10 a la(s) 00.14.57.png"
import cc from "../../assets/img/antigua_logo_cc.png";
import finka from "../../assets/img/descarga.jpeg";
import quedely from "../../assets/img/images.jpeg"
const items = [
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src="https://cdn.shopify.com/s/files/1/0605/4317/2763/files/L8_e705978d-3349-4ce5-bddd-d6d8cd58617d.png?v=1662491257&width=500"
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Organización, diseño y entrega excelente. Mi página web me ha ayudado para proyectarme
            a más personas al rededor del mundo."
          </h5>
          <CardTitle tag="h4">Shipping TC</CardTitle>
          <h6 className="category text-muted">Agencia de Carga e Importadora de Productos</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={gcgLogo}
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Excelente diseño de artes y rápida entrega. Estamos satisfechos con los resultados de Kind Mind.
            Colaboraremos en el futuro."
          </h5>
          <CardTitle tag="h4">GCG Guatemala</CardTitle>
          <h6 className="category text-muted">Catering Services</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={cc}
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Inicio de la transformación digital de mi restaurante, mis menús
            ahora están disponibles desde códigos QR desde la mesa."
          </h5>
          <CardTitle tag="h4">Carlos & Carlos Antigua Guatemala</CardTitle>
          <h6 className="category text-muted">Restaurante</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={finka}
            ></img>
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Acompañamiento y asesoramiento preciso en la implementación de Odoo para
            los restaurantes, con excelente atención 24/7."
          </h5>
          <CardTitle tag="h4">La Finka</CardTitle>
          <h6 className="category text-muted">Restaurantes</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={doncarlos}
              
            ></img>
         
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Creación de contenido de calidad, excelente trabajo para proyectarme en el exterior.
            Profesionales en el desarrollo de material de marketing, tanto en inglés como en español."
          </h5>
          <CardTitle tag="h4">Hacienda Don Carlos</CardTitle>
          <h6 className="category text-muted">Finca de Café en Guatemala</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
              src={quedely}
              
            ></img>
         
          </a>
        </div>
        <CardBody>
          <h5 className="card-description">
            "Soporte administrado de calidad, desarrollo e implementación de herramientas y búsqueda de
            soluciones rápidas y acertadas."
          </h5>
          <CardTitle tag="h4">Quedely</CardTitle>
          <h6 className="category text-muted">Cadena de Restaurantes de Comida Rápida</h6>
          <CardFooter>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning mr-1"></i>
            <i className="fa fa-star text-warning"></i>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: "",
  },
  
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div
        className="section section-testimonials"
        data-background-color="black"
        id="testimonials"
      >
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Clientes Satisfechos</h2>
            <h5 className="description">
              Kind Mind ha desarrollado más de <b>1,000,000 de líneas de código</b> y diseñado al rededor de{" "}
              <b>500 proyectos</b>. Algunos de nuestros clientes satisfechos opinan lo siguiente:
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <div className="testimonials-people">
              <img
                alt="..."
                className="left-first-person img-raised rellax"
                data-rellax-speed="1"
                src="https://cdn.shopify.com/s/files/1/0605/4317/2763/files/L8_e705978d-3349-4ce5-bddd-d6d8cd58617d.png?v=1662491257&width=500"
              ></img>
              <img
                alt="..."
                className="left-second-person img-raised rellax"
                data-rellax-speed="3"
                src={gcgLogo}
              ></img>
              
              
              <img
                alt="..."
                className="left-fifth-person img-raised rellax"
                data-rellax-speed="7"
                src={cc}
              ></img>
            </div>
          </Col>
          <Col md="8">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={key}
                  >
                    {item.content}
                  </CarouselItem>
                );
              })}
              <a
                className="left carousel-control carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <span className="now-ui-icons arrows-1_minimal-right" />
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </Col>
          <Col md="2">
            <div className="testimonials-people">
              <img
                alt="..."
                className="right-first-person img-raised rellax"
                data-rellax-speed="5"
                src={finka}
              ></img>
              <img
                alt="..."
                className="right-second-person img-raised rellax"
                data-rellax-speed="1"
                src={quedely}
              ></img>
              <img
                alt="..."
                className="left-fourth-person img-raised rellax"
                data-rellax-speed="5"
                src={doncarlos}
              ></img>
             
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Testimonials;
