import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import "./App.css";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="page-wrapper">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HeroSection />
      </div>
      <MobileMenu open={menuOpen} closeMenu={closeMenu} />
    </>
  );
}
