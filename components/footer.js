import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Row>
          <Col md={3}>
            <div className="left-side">
              <img className="footer-logo" src="/logo.png" />
            </div>
          </Col>

          <Col md={9}>
            <div className="right-side">
              <i className="fa-brands fa-facebook fa-2x"></i>
              <i className="fa-brands fa-twitter fa-2x"></i>
              <i className="fa-brands fa-youtube fa-2x"></i>
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
