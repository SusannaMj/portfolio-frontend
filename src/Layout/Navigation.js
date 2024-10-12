import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
export default function Navigation() {
  return (
    <div className="content-list">
      <h3>Find out more</h3>
      <nav>
        <ul>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link>Projects</Link>
          </li>
          <ul>
            <li>
              <Link to="project1">Project A</Link>
            </li>
            <li>
              <Link to="project2">Project B</Link>
            </li>
            <li>
              <Link to="project3">Project C</Link>{" "}
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
}
