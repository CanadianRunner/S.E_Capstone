import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../../scss/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import skLogo from "../../assets/Sean-Keane_LOGO.png";
import LevelUp from "../../assets/level-up.gif";

export const Contact = () => {
  const contactToastId = useRef(null);

  const showSucessAlert = () => {
    if (contactToastId.current === null) {
      contactToastId.current = toast.success("Message sent!", {
        icon: ({ dark, type }) => (
          <img className="notifyGif" src={LevelUp} alt="successGif" />
        ),
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 10000,
        onClose: () => {
          contactToastId.current = null;
        },
      });
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p5sqp5b",
        "template_4pvoxgs",
        form.current,
        "a4YzlKwJPLkvH2eOz"
      )
      .then(
        (result) => {
          console.log(result.text);
          showSucessAlert();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact__card" id="contactCard">
      <Card variant="outlined" className="card" sx={{ background: "#A5C9CA" }}>
        <div className="contact__title">
          <h1>Let's get talking!</h1>
        </div>
        <div className="contact__icons">
          <div className="contact__link">
            <div className="contact__linkedin">
              <a href="https://www.linkedin.com/in/sean-keane-pdx/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#213D58"
                  size="3x"
                  href=""
                />
              </a>
            </div>
          </div>
          <div className="contact__link">
            <div className="contact__github">
              <a href="https://github.com/CanadianRunner">
                <FontAwesomeIcon icon={faGithub} color="#213D58" size="3x" />
              </a>
            </div>
          </div>
          <div className="contact__link">
            <div className="contact__email">
              <a href="mailto: code@sean-keane.com">
                <FontAwesomeIcon icon={faEnvelope} color="#213D58" size="3x" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__input">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <label className="bold">Name: </label>
            <input
              type="text"
              name="user_name"
              className="sm-input-form"
              required="required"
            />
            <label className="bold">Email: </label>
            <input
              type="email"
              name="user_email"
              className="sm-input-form"
              required="required"
            />
            <label className="bold">Message: </label>
            <textarea
              name="message"
              className="textarea-form"
              required="required"
              placeholder="Type message here..."
            />
            {/* <input type="submit" value="Send" className="input-button" /> */}
            <input type="submit" value="Send" onClick={showSucessAlert} className="input-button"/>
          </form>
        </div>
        <div className="contact__logo">
          <img src={skLogo} alt="contact-logo" width={200}></img>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
