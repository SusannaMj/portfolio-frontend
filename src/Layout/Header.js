import React from "react";
import "../Layout/Header.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="contact">
      <a href="#" rel="noreferrer" target="_blank">
        <FaGithub
          style={{ color: "var(--grey-white)" }}
          className="contact-icon"
        />
      </a>
      <a href="#" rel="noreferrer" target="_blank">
        <FaEnvelope
          style={{ color: "var(--grey-white)" }}
          className="contact-icon"
        />
      </a>
      <a href="#" rel="noreferrer" target="_blank">
        <FaLinkedinIn
          style={{ color: "var(--grey-white)" }}
          className="contact-icon"
        />
      </a>
    </header>
  );
}
