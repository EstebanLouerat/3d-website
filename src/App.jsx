import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams
} from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const HomePage = () => {
  const { lang } = useParams();
  const validLangs = ["en", "fr", "jp"];

  if (!validLangs.includes(lang)) {
    return <Navigate to="/en" />;
  }

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:lang" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/en" />} />
      </Routes>
    </Router>
  );
};

export default App;
