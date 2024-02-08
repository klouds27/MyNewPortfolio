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
              description="This project allowed me to dive deep into the MERN stack, advanced authentication methods, Firebase integration, Google OAuth, and more. The journey was not just about creating a real estate application but about mastering the tools and technologies that power modern web development."
              ghLink="https://github.com/klouds27/mern-estate"
              demoLink="https://mern-estate-jpde.onrender.com/"          
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BuberBreakfast}
              isBlog={false}
              title="BuberBreakfast"
              description="CRUD REST API from scratch using .NET 6. The backend system supports Creating, Reading, Updating and Deleting breakfasts."
              ghLink="https://github.com/klouds27/buberBreakfast"
              
            />
          </Col>

  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hilinkTravel}
              isBlog={false}
              title="hilinkTravel"
              description="This project allowed me to implement cutting-edge technologies and best practices, including Next.js 13, React.js, Tailwind CSS, TypeScript, and a mobile-first approach. The result is a fully responsive, feature-rich travel company website that showcases my skills in UI/UX design and web development."
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
