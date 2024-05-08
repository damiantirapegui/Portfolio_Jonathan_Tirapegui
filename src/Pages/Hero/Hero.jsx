import "./Hero.css";

export const Hero = () => {
  return (
    <section>
      <div className="img-container">
        <img className="profile-img" src="src/assets/profilbild.jpg" alt="" />
      </div>

      <article className="hero-article">
        <h2 className="greeting-phrase">Hi and welcome!</h2>
        <h1 className="im-jonathan-title">I am Jonathan Tirapegui.</h1>
        <p className="hero-paragraph">
          I am a <span>frontend developer</span> student who is hungry for
          challenges and driven to learn new things. I am also a very social and
          nice guy who finds it easy to build new relationships. Want to know
          more about me? Go to the about me section to get to know me more. See
          you there!
        </p>
      </article>
    </section>
  );
};
