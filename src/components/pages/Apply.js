import React from "react";
import "../Apply.css";

function Apply() {
  return (
    <div className="apply-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="application-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScOesMzXOrrJUSO0hQUX2mWNO_iA0mVTXFdxenWWJJmPliXJQ/viewform?embedded=true"
          width="640"
          height="849"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          textAlign="center"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Apply;
