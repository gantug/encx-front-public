import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Box() {
  return (
    <div className="four-sections">
      <Row>
        <Col md={3}>
          <div className="branding ">
            <i class="fa-solid fa-download fa-3x"></i>
            <p>The most flexible way to transfer files.</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="branding ">
            <i class="fa-solid fa-coins fa-3x"></i>
            <p>It's free to use.</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="branding ">
            <i class="fa-solid fa-rocket fa-3x"></i>
            <p>Way too fast, way too quick.</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="branding ">
            <i class="fa-solid fa-globe fa-3x"></i>
            <p>You can use it anywhere and anytime.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
