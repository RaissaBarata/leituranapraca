import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import "./App.css";
import EventsSection from "./components/EventsSection/EventsSection";
import Footer from "./components/Footer/Footer";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="page-wrapper">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HeroSection />
        <AboutSection />
      </div>
      <MobileMenu open={menuOpen} closeMenu={closeMenu} />
      <ProjectsSection />
      <EventsSection />
      <Footer />
    </>
  );
}
