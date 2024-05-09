import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./Pages/About/About";
import { ContactForm } from "./Pages/ContactForm/ContactForm";
import Github from "./Pages/Github/Github";
import { Hero } from "./Pages/Hero/Hero";
import { Nav } from "./components/Nav";
import ThankYou from "./Pages/ThankYou/ThankYou";

function App() {
  return (
    <Router>
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
        <Routes>
          <Route path="/thank-you" element={<ThankYou />} />{" "}
          {/* Route för ThankYou-sidan */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
