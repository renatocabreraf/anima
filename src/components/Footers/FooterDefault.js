/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function FooterDefault() {
  return (
    <>
     <footer className="footer footer-big footer-white">
            <Container>
              <div className="content">
                <Row>
                  <Col md="4">
                    <h5>About Us</h5>
                    <p>
                      Creative Tim is a startup that creates design tools that
                      make the web development process faster and easier.
                    </p>
                    <p>
                      We love the web and care deeply for how users interact
                      with a digital product. We power businesses and
                      individuals to create better looking web projects around
                      the world.
                    </p>
                  </Col>
                  <Col md="4">
                    <h5>Social Feed</h5>
                    <div className="social-feed">
                      <div className="feed-line">
                        <i className="fab fa-twitter"></i>
                        <p>
                          How to handle ethical disagreements with your clients.
                        </p>
                      </div>
                      <div className="feed-line">
                        <i className="fab fa-twitter"></i>
                        <p>
                          The tangible benefits of designing at 1x pixel
                          density.
                        </p>
                      </div>
                      <div className="feed-line">
                        <i className="fab fa-facebook-square"></i>
                        <p>
                          A collection of 25 stunning sites that you can use for
                          inspiration.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="4">
                    <h5>Instagram Feed</h5>
                    <div className="gallery-feed">
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/olivia.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/james.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/michael.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/emily.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/marie.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/usher.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/mike.jpg")}
                      ></img>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/julie.jpg")}
                      ></img>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <ul className="pull-left">
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Presentation
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Discover
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Payment
                  </a>
                </li>
                <li>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="copyright pull-right">
                Copyright © {new Date().getFullYear()} Creative Tim All Rights
                Reserved.
              </div>
            </Container>
          </footer>
    </>
  );
}


export default FooterDefault;
