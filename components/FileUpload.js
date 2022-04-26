import React from "react";

export default function FileUpload() {
  return (
    <div className="file-section">
      <Row>
        <Col md={6}>
          <div data-aos="fade-right" className="file-upload">
            <div className="file-container">
              <input type="file" />
              <i class="fa-solid fa-download fa-5x"></i>
              <div className="caption">
                <div className="file-description">
                  Please, upload your file.
                </div>
                <div className="file-storage">Maximum file size is 2GB 👀</div>
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
              Upload anything
              <span className="text-aqua-blue">you want</span> and it is
              <span className="text-red-brand">the easiest</span> and
              <span className="text-pink-brand">
                prettiest way to file transfer.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
