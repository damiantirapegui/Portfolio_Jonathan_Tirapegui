import "./Nav.css";

export const Nav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" }); //Scroll function for scroll smoothness
  };

  return (
    <header className="nav-container">
      <div className="logo-container">
        <p className="logo">About</p>
      </div>

      <ul className="nav-bar">
        <li className="nav-menu">
          <a href="#home" onClick={() => scrollToSection("home")}>
            Home
          </a>
        </li>
        <li className="nav-menu">
          <a href="#about" onClick={() => scrollToSection("about")}>
            About
          </a>
        </li>
        <li className="nav-menu">
          <a href="#github" onClick={() => scrollToSection("home")}>
            Github
          </a>
        </li>
        <li className="nav-menu">
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};
