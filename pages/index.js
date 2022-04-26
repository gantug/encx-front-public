import { React, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Box from "../components/Box";
import About from "../components/About";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="relative black">
        <div className="container center" id="file">
          <div className="img-container">
            <a href="/">
              <img data-aos="fade-down" className="main-logo" src="/logo.png" />
            </a>
          </div>

          <div className="login-section">
            <a href="/register">
              <div className="register-button">Register</div>
            </a>
            <a href="/login">
              <div className="login-button">Login</div>
            </a>
          </div>

          <div className="file-section">
            <Row>
              <Col md={6}>
                <div data-aos="fade-right" className="file-upload">
                  <div className="file-container">
                    <input type="file"></input>
                    <i class="fa-solid fa-download fa-5x"></i>
                    <div className="caption">
                      <div className="file-description">
                        Please, upload your file.
                      </div>
                      <div className="file-storage">
                        Maximum file size is 2GB 👀
                      </div>
                      <div className="file-duration">
                        Your URL link is available for 7 days.
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div data-aos="fade-left" className="text-section">
                  <div className="texts">
                    Upload anything{" "}
                    <span className="text-aqua-blue">you want</span> and it is{" "}
                    <span className="text-red-brand">the easiest</span> and{" "}
                    <span className="text-pink-brand">
                      prettiest way to file transfer.
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Box />
        <About />
        <Footer />
      </div>
    </>
  );
}
