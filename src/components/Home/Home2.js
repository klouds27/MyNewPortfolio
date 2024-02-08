import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Sobre  <span className="purple"> Mi:  </span> 
            </h1>
            <p className="home-about-body">
              Me enamoré de la programación hace un par de años y he tomado la decisión de dedicarme profesionalmente a ella.
              <br />
              <br />Estoy familiarizado con
              <i>
                <b className="purple"> Python, Javascript y SQL . </b>
              </i>
              <br />
              <br />
             Me apasiona construir con &nbsp;
              <i>
                <b className="purple"> Nuevas tecnologías y productos web, </b> así como explorar áreas relacionadas con{" "}
                <b className="purple">
                  la ciberseguridad y la inteligencia artificial.
                </b>
              </i>
              <br />
              <br />
            disfruto desarrollar productos con <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  bibliotecas y frameworks modernos de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN </h1>
            <p>
             Siéntete libre de <span className="purple"> contactarme </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/klouds27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kobaad27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adolfo-gonzález-del-corral-pérez-381106206/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kbs.ad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
