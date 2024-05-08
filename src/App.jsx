import "./App.css";
import { About } from "./Pages/About/About";
import { ContactForm } from "./Pages/ContactForm";
import Github from "./Pages/Github/Github";

import { Hero } from "./Pages/Hero/Hero";
// import { About } from "./Pages/About";
// import { Hero } from "./Pages/Hero";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="github">
        <Github />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
