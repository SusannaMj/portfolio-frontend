import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="body">
      <header className="contact">
        <a href="#" rel="noreferrer" target="_blank">
          Github
        </a>
        <a href="#" rel="noreferrer" target="_blank">
          Email
        </a>
        <a href="#" rel="noreferrer" target="_blank">
          Linkedin
        </a>
      </header>
      <div className="main-content-container">
        <main className="main-content">
          <Outlet />
        </main>
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
      </div>
      <footer>&copy; susanna2024</footer>
    </div>
  );
}
