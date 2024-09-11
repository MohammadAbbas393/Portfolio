import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import memorygameImage from '../../Assets/Projects/Mg.png';

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
              description="The 'Appartments Scraper' is a web scraping tool designed to automate the extraction of apartment listings from various real estate websites. This project was created to gather and organize apartment data, including details like price, location, and contact info. By using Python along with libraries like BeautifulSoup and Scrapy, the scraper navigates through web pages, extracts relevant information, and compiles it into a structured format such as a CSV file or database."
              ghLink="https://github.com/MohammadAbbas393/Apscraper"
            />
          </Col>
          <Col md={4} className= "projecy-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/Senti.png")}
              isBlog={false}
              title= " Sentiment Classification"
              description= "draft for now"
              ghlink="https://github.com/MohammadAbbas393/Sentiment-Classification-with-Naive-Bayes-Distillbert-and-Bert-main"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memorygameImage}
              isBlog={false}
              title="Memory Card"
              description="The 'Memory game' game is a classic concentration card game where players flip over pairs of cards to find matching pairs. This project was developed to enhance cognitive skills such as memory and concentration. The game features a grid of cards that are shuffled and laid face down, and the player must remember the position of each card to find all the matching pairs."
              ghLink="https://github.com/MohammadAbbas393/Memorycard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/Ap.png")}
              isBlog={false}
              title="Genes Finder"
              description="The 'Genes Finder' is a bioinformatics tool designed to identify and analyze genes within a given DNA sequence. This project was developed to assist researchers in locating specific genes and understanding their functions. By using algorithms and data processing techniques, the Genes Finder can scan DNA sequences, identify gene patterns, and provide detailed information about each gene."
              ghLink="https://github.com/MohammadAbbas393/Genesfinder"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/word game.png")}
              isBlog={false}
              title="Word Game"
              description="The 'Word Game' is a fun and educational game where players guess letters to form a hidden word. This project was created to improve vocabulary and spelling skills. Players are given a word with blank spaces and must guess letters within a limited number of attempts. Incorrect guesses result in a reduction of remaining attempts, adding an element of challenge to the game."
              ghLink="https://github.com/MohammadAbbas393/wordgame"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/Jarvis.png")}
              isBlog={false}
              title="Jarvis"
              description="The 'Jarvis' project is an AI-powered virtual assistant designed to perform various tasks based on voice commands. Inspired by the AI assistant from Iron Man, this project was developed to integrate AI functionalities into everyday tasks. Jarvis can manage schedules, set reminders, search the web, and control smart home devices, making it a versatile and powerful tool for personal assistance."
              ghLink="https://github.com/MohammadAbbas393/Jarvis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
