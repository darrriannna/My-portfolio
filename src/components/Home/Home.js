import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h3 style={{ paddingBottom: 15 }} className="heading">
                Hello, my name is
              </h3>

              <h1 className="heading-name">
                <strong className="main-name"> Daryna Fesyk</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <h4 className="heading">I am a junior front-end developer with a designer soul and huge enthusiasm. 
              I am really passionate about learning and exploring new things in IT world. </h4>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "950px", paddingRight: "20px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
