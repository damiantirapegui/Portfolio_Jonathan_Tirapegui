//
//
//This component is my Home/Start page. We use parallax for some cool text and scrolling effect.

import { Parallax } from "react-parallax";
import React, { useEffect } from "react";
import "./Hero.css";

export const Hero = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const greetingPhrase = document.querySelector(".greeting-phrase");
    const imJonathanTitle = document.querySelector(".im-jonathan-title");
    const heroParagraph = document.querySelector(".hero-paragraph");

    const scrollY = window.scrollY;

    //Move the text sideways to different direction when scrolling.
    greetingPhrase.style.transform = `translateX(${-scrollY}px)`;
    imJonathanTitle.style.transform = `translateX(${scrollY}px)`;
    heroParagraph.style.transform = `translateX(${-scrollY}px)`;
  };

  return (
    <Parallax>
      <section className="home-body">
        <div className="img-container">
          <img className="profile-img" src="src/assets/profilbild.jpg" alt="" />
        </div>

        <article className="hero-article">
          <h2 className="greeting-phrase">Hi and welcome!</h2>
          <h1 className="im-jonathan-title">I am Jonathan Tirapegui.</h1>
          <p className="hero-paragraph">
            I am a <span>frontend developer</span> student who is hungry for
            challenges and driven to learn new things. I am also a very social
            and nice guy who finds it easy to build new relationships. Want to
            know more about me? Go to the about me section to get to know me
            more. See you there!
          </p>
        </article>
      </section>
    </Parallax>
  );
};
