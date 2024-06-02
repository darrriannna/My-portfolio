import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daryna Fesyk </span>
            from <span className="purple"> Kyiv, Ukraine.</span>
            <br />
            
            <br />
            I have moved to Sweden two years ago and finished a course of IT- Front-end in Sundsgården. 
            Besides that I have finished Kyiv International Economic University in Finance&Marketing and have Graphic design diploma from Udemy. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing logos
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
