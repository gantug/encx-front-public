import React from "react";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="additional-info">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Minimal and futuristic.
      </h1>
      <Row>
        <Col md={9}>
          <div className="first-info">
            Emerging technologies, such as industrial robots, artificial
            intelligence, and machine learning, are advancing at a rapid pace.
            These developments can improve the speed, quality, and cost of goods
            and services, but they also displace large numbers of workers.
          </div>
        </Col>
        <Col md={3}>
          <div className="second-info">
            Artificial intelligence (AI) is intelligence demonstrated by
            machines.
          </div>
        </Col>
      </Row>

      <Row className="no-padding">
        <Col>
          <div className="mid-info" />
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <div className="last-info">
            ENCX was founded in 2022, the simplest way to send big files.
          </div>
        </Col>
        <Col md={9}>
          <div className="ending-info">
            As ENCX continues to evolve, creativity remains at the heart of
            everything we do. Because while not every idea will change the
            world, every world-changing idea has to start somewhere cost of
            goods and services, but they also displace large numbers of workers.
          </div>
        </Col>
      </Row>
      <div className="ending-title">
        <div data-aos="fade-right" className="title">
          I think that's enough. Shall we start sharing and transfering files?
        </div>
        <a href="#file">
          <div data-aos="fade-right" className="button">
            Let's do it!
          </div>
        </a>
      </div>
    </div>
  );
}
