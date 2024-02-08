import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BuberBreakfast from "../../Assets/Projects/BuberBreakfast.png"; 
import hilinkTravel from "../../Assets/Projects/hilinkTravel.png";
import kloudEstate from "../../Assets/Projects/kloudEstate.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kloudEstate}
              isBlog={false}
              title="kloudEstate"
              description="Este proyecto me permitió sumergirme en el stack MERN, métodos avanzados de autenticación, integración de Firebase, Google OAuth y más. El viaje no solo se trató de crear una aplicación inmobiliaria, sino de dominar las herramientas y tecnologías que impulsan el desarrollo web moderno."
              ghLink="https://github.com/klouds27/mern-estate"
              demoLink="https://mern-estate-jpde.onrender.com/"          
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BuberBreakfast}
              isBlog={false}
              title="BuberBreakfast"
              description="API REST CRUD desde cero utilizando .NET 6. El sistema backend soporta la Creación, Lectura, Actualización y Eliminación de desayunos."
              ghLink="https://github.com/klouds27/buberBreakfast"
              
            />
          </Col>

  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hilinkTravel}
              isBlog={false}
              title="hilinkTravel"
              description="Este proyecto me permitió implementar tecnologías de vanguardia y mejores prácticas, incluyendo Next.js 13, React.js, Tailwind CSS, TypeScript y un enfoque de diseño móvil primero. El resultado es un sitio web de una empresa de viajes completamente receptivo y rico en funciones que muestra mis habilidades en diseño de interfaz de usuario y desarrollo web."
              ghLink="https://github.com/klouds27/travel_app"
              demoLink="hilink-alpha.vercel.app"              
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MintyHost}
              isBlog={false}
              title="Minty Host Apartments Showcase"
              description="Este proyecto me permitió sumergirme en Vue.js, explorando la creación de componentes reutilizables y diseñando una experiencia de usuario intuitiva."
              ghLink="https://github.com/klouds27/minty-casop"
              demoLink="https://minty-casop.vercel.app"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
