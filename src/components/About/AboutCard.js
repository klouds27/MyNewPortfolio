import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, soy <span className="purple">Adolfo</span> de <span className="purple">Sevilla, España.</span>
            <br /> 
            Full Stack Dev
            <br />
            Apasionado por crear aplicaciones web fluidas y amigables para el usuario
            <br />
            Experimentado en el stack MERN (MongoDB, Express.js, React.js, Node.js).
            <br />
            Habilidades en Next.js para aplicaciones React
            <br />
            Experiencia en Python para desarrollo backend y scripting
            <br />
            Contribuyente activo a proyectos de código abierto.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Any program is only as good as it is useful"{" "}
          </p>
          <footer className="blockquote-footer">Linus Torvalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
