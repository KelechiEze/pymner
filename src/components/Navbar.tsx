import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import gsap from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { x: "100%" },
        { x: 0, duration: 0.4, ease: "power3.out" }
      );
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Sparkles className="logo-icon" />
          <span>Paycoin</span>
        </div>

        <div className="navbar-links">
          <button onClick={() => handleNavClick("home")}>HOME</button>
          <button onClick={() => handleNavClick("features")}>FEATURES</button>
          <button onClick={() => handleNavClick("roadmap")}>ROADMAP</button>
          <button onClick={() => handleNavClick("token")}>TOKEN</button>
          <button onClick={() => handleNavClick("advisors")}>TEAM</button>
        </div>

        <button className="navbar-cta">START MINING</button>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
          <div className="mobile-menu">
            <button className="mobile-close" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
            <button onClick={() => handleNavClick("home")}>HOME</button>
            <button onClick={() => handleNavClick("features")}>FEATURES</button>
            <button onClick={() => handleNavClick("roadmap")}>ROADMAP</button>
            <button onClick={() => handleNavClick("token")}>TOKEN</button>
            <button onClick={() => handleNavClick("advisors")}>TEAM</button>
            <button className="mobile-cta" onClick={() => handleNavClick("home")}>START MINING</button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
