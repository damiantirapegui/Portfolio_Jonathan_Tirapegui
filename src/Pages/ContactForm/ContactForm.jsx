import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactForm = () => {
  const form = useRef();
  const service = import.meta.env.VITE_SERVICE;
  const template = import.meta.env.VITE_TEMPLATE;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(service);
    console.log(template);
    console.log(publicKey);
    emailjs
      .sendForm(`${service}`, `${template}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          console.log("SUCCESS!");
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
            <input className="submit" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};
