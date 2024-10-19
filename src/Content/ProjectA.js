import React from "react";
import "./ProjectA.css";
import petProject from "../images/pet-project-homepage.png";

export default function ProjectA() {
  return (
    <div>
      <h4 style={{ fontSize: "50px", marginTop: "0" }}>Pet-adoption-App</h4>
      <div className="projectA-container">
        <img
          className="projectA-picture"
          src={petProject}
          style={{ borderRadius: "15px" }}
        />
        <div className="projectA-description">
          A responsive web application built to find your new best friend, with
          the help of two different API´s and Open AI.{" "}
        </div>
      </div>
    </div>
  );
}
