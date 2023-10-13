import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import {themeContext} from "../../Context"
import { useContext } from "react";
import {motion} from 'framer-motion';


function Services() {
  const transition ={duration: 1,type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{color:darkMode?"white":""}}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
          Tempore aliquid neque corrupti aut tenetur mollitia!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
        whileInView={{left:'14rem'}}
        initial={{left:'25rem'}}
        transition={transition}
         style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Nextjs, Python, Wordpress, MongoDB"}
          />
        </div>
        {/* 3 card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tempore aliquid  "
            }
          />
        </div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
