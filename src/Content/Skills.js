import React from "react";
import "./Skills.css";
import cssIcon from "../images/CSS-icon.png";
import apiIcon from "../images/API-icon.png";
import htmlIcon from "../images/html-icon.png";
import javascriptIcon from "../images/javascript-icon.png";
import reactIcon from "../images/React-icon.png";
import responsiveIcon from "../images/Responsive-icon.png";
import timeManagementIcon from "../images/time-management-icon.png";
import logicIcon from "../images/logic-icon.png";
import aiIcon from "../images/AI-icon.png";
export default function Skills() {
  return (
    <div className="skills">
      <div className="coding-skills">
        <div className="skill">
          <div>HTML</div>
          <img src={htmlIcon} className="skill-icon" />
        </div>
        <div className="skill">
          <div>CSS</div>
          <img src={cssIcon} className="skill-icon" />
        </div>
        <div className="skill">
          <div>JavaScript</div>
          <img src={javascriptIcon} className="skill-icon" />
        </div>
        <div className="skill">
          <div>React.js</div>
          <img src={reactIcon} className="skill-icon react-icon" />
        </div>
        <div className="skill">
          <div>Responsive Design</div>
          <img src={responsiveIcon} className="skill-icon" />
        </div>
        <div className="skill">Bootstrap</div>
        <div className="skill">
          <div>API integration</div>
          <img src={apiIcon} className="skill-icon" />
        </div>
        <div className="skill">
          <div>AI integration</div>
          <img src={aiIcon} className="skill-icon" />
        </div>
      </div>
      <div className="soft-skills">
        <div className="skill">Problem Solving</div>
        <div className="skill">
          <div>Logical Thinking</div>
          <img src={logicIcon} className="skill-icon" />
        </div>
        <div className="skill">
          <div>Time Management</div>
          <img className="skill-icon" src={timeManagementIcon} />
        </div>
        <div className="skill">Organised</div>
        <div className="skill">Self-motivated</div>
        <div className="skill">Research</div>
      </div>
      <a href="https://www.freepik.com/search">Icon by Freepik</a>
      <a href="https://www.freepik.com/icon/computer_14054961#fromView=search&page=1&position=8&uuid=9ec9abe9-a233-4081-9147-e0bfa9a870c5">
        <a href="https://www.freepik.com/search">Icon by Kharisma</a>
        <a href="https://www.freepik.com/search">Icon by Super Icons</a>
        <a href="https://www.freepik.com/icon/time-management_7237396#fromView=search&page=1&position=14&uuid=6f17bfdc-ccf0-4cc0-8fd6-faddee8df141">
          Icon by Maan Icons
        </a>
        Icon by Roundicons Premium
      </a>
    </div>
  );
}
