import React from "react";

export default function FileDetails() {
  return (
    <div className="transfers">
      <div className="title">Shared files</div>
      <div className="date">April 2022</div>
      <div className="box">
        <div className="file-name">Gantug's file.docx</div>
        <div className="file-details">
          <div>1 file</div>
          <div>2.6 MB</div>
          <div>4 April 2022</div>
        </div>
        <div className="file-modules">
          <div>Download</div>
          <div>Copy</div>
          <div>Edit</div>
          <div>Update</div>
          <div>Delete</div>
        </div>
      </div>
    </div>
  );
}
