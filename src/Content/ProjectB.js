import React from "react";

import "./ProjectB.css";
import gymWebsite from "../images/gym-website.png";

export default function ProjectB() {
  return (
    <div>
      <h4 style={{ fontSize: "50px", marginTop: "0" }}>Pet-adoption-App</h4>
      <div className="projectB-container">
        <div className="projectB-description">
          A responsive web application, built to play around with all thing CSS,
          creating an interactive website showcasing a gym.{" "}
        </div>{" "}
        <img
          className="projectB-picture"
          src={gymWebsite}
          style={{ borderRadius: "15px" }}
        />
      </div>
    </div>
  );
}
