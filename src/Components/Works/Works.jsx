import React from "react";
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/Fiverr.png"
import Amazon from "../../img/Amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { useContext } from "react";
import { themeContext } from "../Context";
import { motion } from "framer-motion";


const Works = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  


  return (
    <div className="works" id="Works">
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode ? 'white': ''}}>Works for All</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          praesentium eveniet
          <br /> quis doloribus eum sunt veniam voluptas offici
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <button className="button s-button">Download CV</button>

        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:"-40px"}}
        transition={{duration:3.5,type:"spring"}}
         className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* Background Circle */}
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
