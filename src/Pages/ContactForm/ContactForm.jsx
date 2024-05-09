import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactForm = () => {
  const form = useRef();
  const service = import.meta.env.VITE_SERVICE;
  const template = import.meta.env.VITE_TEMPLATE;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const navigate = useNavigate();

  const [clickedSubmit, setClickedSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(service);
    console.log(template);
    console.log(publicKey);
    setClickedSubmit(true);
    emailjs
      .sendForm(`${service}`, `${template}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setTimeout(() => {
            setClickedSubmit(false);
            navigate("/thank-you"); // Dirigera till tack-sidan
          }, 100);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="contact-me-container">
        <h1 className="contact-me-title">Feel free to contact me &#128512; </h1>
      </div>
      <div className="form-card">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className="input-field" type="text" name="user_name" />
          <label>Email</label>
          <input className="input-field" type="email" name="user_email" />
          <label>Message</label>
          <textarea className="message" name="message" />
          <div className="submit-container">
            <input
              className={`submit ${clickedSubmit ? "clicked" : ""}`}
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
