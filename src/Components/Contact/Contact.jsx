import {React, useState} from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useContext } from "react";
import { themeContext } from "../Context";


const Contact = () => {
  const form = useRef();
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

const [done,setDone]= useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form" >
      <div className="w-left">
        <div className="awesome" id="Contact">
          <span style={{color:darkMode?'white':''}}>Get in touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blurl"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for contacting me"}</span>
          <div
            className="blur c-blurl"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
