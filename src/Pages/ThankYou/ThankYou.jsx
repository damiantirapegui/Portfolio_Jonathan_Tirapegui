import React, { useState, useEffect, useRef } from "react";
import "./ThankYou.css";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const thankYouRef = useRef(null);

  useEffect(() => {
    setVisible(true);

    if (thankYouRef.current) {
      thankYouRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const timeout = setTimeout(() => {
      window.close();
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  useEffect(() => {
    if (visible) {
      thankYouRef.current.scrollIntoView({ behavior: "smooth" });
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
