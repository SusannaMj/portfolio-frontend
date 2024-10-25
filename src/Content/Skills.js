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
import organisedIcon from "../images/organised-icon.png";
import reasearchIcon from "../images/reasearch-icon.png";
import problemSolvingIcon from "../images/problem-solving-icon.png";
import learningIcon from "../images/learning-icon.png";
import frameworkIcon from "../images/framework-icon.png";

import { useEffect } from "react";
export default function Skills() {
  useEffect(function () {
    const skill = document.querySelectorAll(".skill");
    skill.forEach(function (skill, index) {
      setTimeout(function () {
        skill.classList.add("fall-down");
      }, index * 250);
    });
  }, []);
  return (
    <div className="skills">
      <div className="coding-skills">
        <div className="skill">
          <div>HTML</div>
          <img src={htmlIcon} className="skill-icon" alt="html-icon" />
        </div>
        <div className="skill">
          <div>CSS</div>
          <img src={cssIcon} className="skill-icon" alt="css-icon" />
        </div>
        <div className="skill">
          <div>JavaScript</div>
          <img
            src={javascriptIcon}
            className="skill-icon"
            alt="javascript-icon"
          />
        </div>
        <div className="skill">
          <div>React.js</div>
          <img
            src={reactIcon}
            className="skill-icon react-icon"
            alt="react-icon"
          />
        </div>
        <div className="skill">
          <div>Responsive Design</div>
          <img
            src={responsiveIcon}
            className="skill-icon"
            alt="responsive-icon"
          />
        </div>
        <div className="skill">
          <div>Bootstrap</div>
          <img
            src={frameworkIcon}
            className="skill-icon"
            alt="frameworks-icon"
          />
        </div>
        <div className="skill">
          <div>API integration</div>
          <img src={apiIcon} className="skill-icon" alt="api-icon" />
        </div>
        <div className="skill">
          <div>AI integration</div>
          <img src={aiIcon} className="skill-icon" alt="ai-icon" />
        </div>
      </div>
      <div className="soft-skills">
        <div className="skill">
          <div>Problem Solving</div>
          <img
            src={problemSolvingIcon}
            className="skill-icon"
            alt="problem-solving-icon"
          />
        </div>
        <div className="skill">
          <div>Logical Thinking</div>
          <img src={logicIcon} className="skill-icon" alt="logic-icon" />
        </div>
        <div className="skill">
          <div>Time Management</div>
          <img
            className="skill-icon"
            src={timeManagementIcon}
            alt="time-management-icon"
          />
        </div>
        <div className="skill">
          <div>Organised</div>
          <img
            src={organisedIcon}
            className="skill-icon"
            alt="organised-icon"
          />
        </div>
        <div className="skill">
          <div>Self-motivated</div>
          <img src={learningIcon} className="skill-icon" alt="learning-icon" />
        </div>
        <div className="skill">
          <div>Research</div>
          <img src={reasearchIcon} className="skill-icon" alt="research-icon" />
        </div>
      </div>
      <a href="https://www.freepik.com/search">Icon by Freepik</a>
      <a href="https://www.freepik.com/icon/computer_14054961#fromView=search&page=1&position=8&uuid=9ec9abe9-a233-4081-9147-e0bfa9a870c5">
        <a href="https://www.freepik.com/search">Icon by Kharisma</a>
        <a href="https://www.freepik.com/search">Icon by Super Icons</a>
        <a href="https://www.freepik.com/icon/time-management_7237396#fromView=search&page=1&position=14&uuid=6f17bfdc-ccf0-4cc0-8fd6-faddee8df141">
          <a href="https://www.freepik.com/icon/identification_15710678#fromView=search&page=1&position=31&uuid=84c7c293-1b73-4f3a-a58d-7be4585c73e1">
            Icon by Dewi Sari
          </a>
          <a href="https://www.freepik.com/search">Icon by Eucalyp</a>
          <a href="https://www.freepik.com/icon/tasks_12691924#fromView=search&page=1&position=46&uuid=d320eeae-83e1-4fc3-8383-c094c100315b">
            Icon by Freepik
          </a>
          Icon by Maan Icons
        </a>
        Icon by Roundicons Premium
      </a>
      <a href="https://www.freepik.com/icon/lean_8743769#fromView=search&page=1&position=53&uuid=d22146b2-533f-4cb0-9a49-e156fa282241">
        Icon by Muhammad_Usman
      </a>
    </div>
  );
}
