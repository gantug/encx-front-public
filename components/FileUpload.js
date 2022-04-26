import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [response, setResponse] = useState(null);

  const onClick = (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("myfile", selectedFile);

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200)
      {
        console.log(JSON.parse(this.responseText))
        setResponse(JSON.parse(this.responseText))

      }
    }
    request.open('POST', 'http://164.68.127.240:3000/api/files');
    request.send(formData);
  };

  const changeHandler = (event) => {
    event.preventDefault();

    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const getSize = (bytes) => {
    if (!bytes) {
      return null;
    }
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  };

  const getFileType = (filename) => {
    if (!filename) {
      return null;
    }
    return filename.split(".").pop();
  };

  const copyLink = () => {
    if (response)
      navigator.clipboard.writeText(response.file)
  }

  const fileSelected = () => {
    if (isSelected === false) {
      return (
        <>
          <input onChange={changeHandler} type="file" />
          <i className="fa-solid fa-download fa-5x"></i>
          <div className="caption">
            <div className="file-description">Please, upload your file.</div>
            <div className="file-storage">Maximum file size is 2GB 👀</div>
            <div className="file-duration">
              Your URL link is available for 7 days.
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="selected-file">
            <h1>{selectedFile && selectedFile.name}</h1>
            <div className="file-details">
              <div>{getSize(selectedFile.size)}</div>•
              <div>{getFileType(selectedFile.name)}</div>
            </div>
          </div>
          {response ? (
            <div className="upload-button" onClick={copyLink}>
              Copy Link
            </div>
          ) : ''}
          <br/>
          <div className="upload-button" onClick={onClick}>
            Upload
          </div>
        </>
      );
    }
  };

  return (
    <div className="file-section">
      <Row>
        <Col md={6}>
          <div data-aos="fade-right" className="file-upload">
            <div className="file-container">{fileSelected()}</div>
          </div>
        </Col>
        <Col md={6}>
          <div data-aos="fade-left" className="text-section">
            <div className="texts">
              Upload anything
              <span className="text-aqua-blue"> you want</span> and it is
              <span className="text-red-brand"> the easiest</span> and
              <span className="text-pink-brand">
                {" "}
                prettiest way to file transfer.
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
