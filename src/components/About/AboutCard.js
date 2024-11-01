import React from "react";
import Card from "react-bootstrap/Card";


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
            Besides that I have finished Kyiv International Economic University in Finance&Marketing and have UX/UI diploma from SCVOT. 
            <br />
            <br />
          </p>
          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
