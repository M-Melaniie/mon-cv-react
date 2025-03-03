import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import MentionsLegales from "./pages/MentionsLegales";
import Footer from "./components/Footer";
import GitHubProfile from "./pages/GitHubProfile.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>À propos</h1>} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/github-profile" element={<GitHubProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;