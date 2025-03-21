import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function PulseHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/cloud-2946152.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <img src="https://cdn.kindmindgt.com/assets/img/GENIUS.png"></img>
              <h1 className="title">El Almacenamiento del Mañana</h1>
              <h4>
                Almacena tus datos de forma segura, económica y accede a ellos
                con rapidez
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default PulseHeader;
