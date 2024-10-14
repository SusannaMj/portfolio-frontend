import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-container">
      <h1>
        <Typewriter
          words={["Hi There."]}
          cursor
          cursorStyle=""
          typeSpeed={150}
          delaySpeed={1000}
        />
      </h1>
      <p style={{ lineHeight: "1.6", fontSize: "17px" }}>
        My name is Susanna, I am a front-end and aspiring backend developer from
        Germany, based in Australia. My coding journey started a about a year
        ago, with no end in side. I love to learn and am looking to eventually
        be able to build software that can make a change, implementing my
        knowledge from previos professions and studies as well.{" "}
      </p>
    </div>
  );
}
