import { React, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/footer";
import Box from "../components/Box";
import About from "../components/About";
import FileUpload from "../components/FileUpload";
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
          <FileUpload />
        </div>
        <Box />
        <About />
        <Footer />
      </div>
    </>
  );
}
