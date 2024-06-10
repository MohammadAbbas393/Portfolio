import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              imgPath={require("./Cleaner.png")}
              isBlog={false}
              title="Downloads Cleaner"
              description="Code that can organize your downloads folder instead of having them shuffled, they will go to multiple folders (Text,Audio,Pics,Programming, and Uncategorized). Under each folder you have subfolders like in text you have (PDF, WORD) in Programming you have (Pyhton,Java)."
              ghLink="https://github.com/MohammadAbbas393/Downloads-folder-cleaner"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
            <ProjectCard
              imgPath={require("src/Assets/Projects/Electricbg")}
              isBlog={false}
              title="Electric Background"
              description="this idea of the code was actually taken from codepen but I developed the code by my self the idea of doing that is I had a project to build an ITS website for Middlebury college especially the Digital Learning and Inquiry department so I needed some tech in the header"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
