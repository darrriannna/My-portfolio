import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import AlienCrush from "../../Assets/Projects/AlienCrush.png";
import nova from "../../Assets/Projects/nova.png";
import Genesis from "../../Assets/Projects/Genesis.png";
import edi from "../../Assets/Projects/Edi-me.png";
import taskManager from "../../Assets/Projects/taskManager.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent Works
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlienCrush}
              isBlog={false}
              title=" New intepretation of whack-a-mole old-school game in cosmo style"
              ghLink="https://github.com/darrriannna/Group-React-Game"
              
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edi}
              isBlog={false}
              title="EDI.ME is an e-commerce website for wireless headphones"
              ghLink="https://github.com/darrriannna/Edu.me-e-commerce"
              
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskManager}
              isBlog={false}
              title="Task Manager"
              description="Personal task manager app made with JavaScript to keep you thoughts and grocery list in order."
              ghLink="https://github.com/darrriannna/TaskManager"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Genesis}
              isBlog={false}
              title="A website-portfolio for AI-artist"
              ghLink="https://github.com/darrriannna/GENESIS-website"
              demoLink="https://darrriannna.github.io/GENESIS-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nova}
              isBlog={false}
              title="A professional website for MRI-clinic made with Bootstrap"
              ghLink="https://github.com/darrriannna/NOVA"
              demoLink="https://darrriannna.github.io/NOVA/#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
