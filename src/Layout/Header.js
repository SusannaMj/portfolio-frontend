import React from "react";
import "../Layout/Header.css";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="contact">
      <div className="home-icon" style={{ paddingLeft: "10px" }}>
        <Link to="/">
          <FaHouseUser
            style={{
              color: "var(--grey-white)",
            }}
            className="contact-icon"
          />
        </Link>
      </div>
      <div className="contact-right" style={{ marginRight: "40px" }}>
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
      </div>
    </header>
  );
}
