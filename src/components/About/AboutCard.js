import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adolfo  </span>
            from <span className="purple"> Sevilla, España.</span>
            <br /> 
            I am a Full Stack Developer.
            <br />
            I am passionate about creating seamless and user-friendly web applications.
            <br />
            I am proficient in MERN stack (MongoDB, Express.js, React.js, Node.js).
            <br />
            I am skilled in Next.js for server-rendered React applications.
            <br />
            I am experienced in Python for backend development and scripting.
            <br />
            I am an active contributor to open source projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Make Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Bug Hunting
            </li>
          </ul>

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