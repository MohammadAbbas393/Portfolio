import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Abbas </span>
            from <span className="purple"> Haifa, Palestine.</span>
            <br />
            I am looking for a job. I have pursing a degree in Computer Science and minoring in Math  at Middlebury
            College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gym Rat
            </li>
            <li className="about-activity">
              <ImPointRight /> Soccer Club
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohammad Abbas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
