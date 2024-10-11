import React from "react";
import { Outlet } from "react-router-dom";

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
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <ul>
              <li>Project A</li>
              <li>Project B</li>
              <li>Project C</li>{" "}
            </ul>
          </ul>
        </div>
      </div>
      <footer>&copy; susanna2024</footer>
    </div>
  );
}
