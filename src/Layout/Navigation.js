import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
export default function Navigation() {
  return (
    <div className="content-list-container">
      <h3
        style={{
          fontSize: "40px",
          marginBottom: "30px",
          fontWeight: "350",
          position: "relative",
          left: "10px",
        }}
      >
        More
      </h3>
      <nav className="navigation">
        <ul className="content-list">
          <li>
            <Link to="/about" className="navigation-link">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <div>Projects</div>
          </li>
          <ul className="project-list">
            <li>
              <Link to="project1">Project A</Link>
            </li>
            <li>
              <Link to="project2">Project B</Link>
            </li>
            <li>
              <Link to="project3" className="hidden">
                Project C
              </Link>{" "}
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
}
