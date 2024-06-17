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
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/Cleaner.png")}
              isBlog={false}
              title="Downloads Cleaner"
              description="Code that can organize your downloads folder instead of having them shuffled, they will go to multiple folders (Text, Audio, Pics, Programming, and Uncategorized). Under each folder, you have subfolders like in text you have (PDF, WORD) in Programming you have (Python, Java)."
              ghLink="https://github.com/MohammadAbbas393/Downloads-folder-cleaner"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/Ap.png")}
              isBlog={false}
              title="Appartments Scraper"
              description="This idea of the code was actually taken from CodePen but I developed the code by myself. The idea of doing that is I had a project to build an ITS website for Middlebury College especially the Digital Learning and Inquiry department so I needed some tech in the header."
              ghLink="https://github.com/MohammadAbbas393/Apscraper"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/Electricbg.png")}
              isBlog={false}
              title="Electric Background"
              description="This idea of the code was actually taken from CodePen but I developed the code by myself. The idea of doing that is I had a project to build an ITS website for Middlebury College especially the Digital Learning and Inquiry department so I needed some tech in the header."
              ghLink="https://github.com/MohammadAbbas393/electricbg"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("src/Assets/Projects/Memorygame.png")}
              isBlog={false}
              title="Memory Card"
              description="This idea of the code was actually taken from CodePen but I developed the code by myself. The idea of doing that is I had a project to build an ITS website for Middlebury College especially the Digital Learning and Inquiry department so I needed some tech in the header."
              ghLink="https://github.com/MohammadAbbas393/Memorycard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/Ap.png")}
              isBlog={false}
              title="Genes Finder"
              description="This idea of the code was actually taken from CodePen but I developed the code by myself. The idea of doing that is I had a project to build an ITS website for Middlebury College especially the Digital Learning and Inquiry department so I needed some tech in the header."
              ghLink="https://github.com/MohammadAbbas393/Genesfinder"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/word game.png")}
              isBlog={false}
              title="Word Game"
              description="This idea of the code was actually taken from CodePen but I developed the code by myself. The idea of doing that is I had a project to build an ITS website for Middlebury College especially the Digital Learning and Inquiry department so I needed some tech in the header."
              ghLink="https://github.com/MohammadAbbas393/wordgame"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/Jarvis.png")}
              isBlog={false}
              title="Jarvis"
              description="This idea of the code was actually taken from CodePen but I developed the code by myself. The idea of doing that is I had a project to build an ITS website for Middlebury College especially the Digital Learning and Inquiry department so I needed some tech in the header."
              ghLink="https://github.com/MohammadAbbas393/Jarvis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
