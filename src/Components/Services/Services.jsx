import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import "./Services.css";
import Card from "../Card/Card";
import Resume from "./resume.pdf"
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  const transition = {duration:1, type: "spring" }


  return (
    <div className="services" id="Services" >

      {/* left side */}
      <div className="awesome">
        <span style={{color:darkMode ?'white':''}}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          praesentium eveniet<br /> quis doloribus eum sunt veniam voluptas officiis
          dolores,  accusamus molestiae <br /> nemo atque, id voluptate possimus!
          Id eos aliquam maxime?
        </span>
        <a href={Resume} download>

        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      
      {/* right side */}
      <div className="cards">
        <motion.div
        initial={{left:'25rem'}}
        whileInView={{left:'14rem'}}
        transition={transition}
        style={{left:"14rem"}}>

        <Card emoji={HeartEmoji}
        heading={'Design'}
        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"} />
        </motion.div>

      {/* second Card */}
        <motion.div 
        initial ={{left:'-11rem', top:'12rem'}}
        whileInView={{left:'-4rem'}}
        transition={transition}
        style={{top:"12rem",
      left:"-4rem"}} >

        <Card emoji={Glasses}
        heading={'Developer'}
        detail={"Html, Css, JavaScript, React"} />
        </motion.div>

      {/* third Card */}
        <motion.div 
        initial={{left:'25rem', top:'19rem'}}
        whileInView={{left:'12rem'}}
        style={{top:"19rem",
      left:"12rem"}}>

        <Card emoji={Humble}
        heading={'UI/UX'}
        detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibuspraesentium eveniet"} />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>
    </div>
  );
};

export default Services;
