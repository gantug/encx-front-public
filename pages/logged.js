import { React, useEffect, useState } from "react";
import { Row, Col, Offcanvas, Nav, Tab } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import FileDetails from "../components/FileDetails";
import Password from "../components/Password";
import FileUpload from "../components/FileUpload";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Logged() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />
      <div className="relative black">
        <div className="container center" id="file">
          <div className="img-container">
            <a href="/logged">
              <img data-aos="fade-down" className="main-logo" src="/logo.png" />
            </a>
          </div>

          <div className="login-section">
            <div className="register-button" onClick={handleShow}>
              Gantug Batgerel
            </div>
          </div>
          <Offcanvas show={show} placement="end" onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Gantug Batgerel</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col md={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <FileDetails />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Password />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                  <Col md={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Shared files</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Password and security
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <a href="/">
                      <div className="logout">Logout</div>
                    </a>
                  </Col>
                </Row>
              </Tab.Container>
            </Offcanvas.Body>
          </Offcanvas>

          <FileUpload />
        </div>
        <Footer />
      </div>
    </>
  );
}
