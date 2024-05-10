//
//
//This is my hidden component for when send button in contactForm is pressed.

import React, { useState, useEffect, useRef } from "react";
import "./ThankYou.css";
import { useNavigate } from "react-router-dom";

//We use useState to make the page not visible as default.

const ThankYou = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const thankYouRef = useRef(null);

  useEffect(() => {
    setVisible(true);

    if (thankYouRef.current) {
      thankYouRef.current.scrollIntoView({ behavior: "smooth" });
    }
    //After 5 seconds we want the setVisible to be removed and navigate me back to the contactForm
    const timeout = setTimeout(() => {
      window.close();
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  useEffect(() => {
    if (visible) {
      thankYouRef.current.scrollIntoView({ behavior: "smooth" }); //If thankyou component is visible then scroll down automaticly with smoot behavior.
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="thank-you-body" ref={thankYouRef}>
      <div className="message-container">
        <h2>🎉Thank you for your message🎉</h2>
        <h3 className="center-text">I'll reply as soon as possible</h3>
      </div>
    </div>
  );
};

export default ThankYou;
