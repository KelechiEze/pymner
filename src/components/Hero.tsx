import { useEffect, useRef } from "react";
import { Pickaxe, Wallet, X } from "lucide-react";
import gsap from "gsap";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        ".hero-tag",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      );
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4 }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5 }
      );
      gsap.fromTo(
        ".hero-buttons",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6 }
      );
      gsap.fromTo(
        ".hero-image",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.7 }
      );
    }
  }, []);

  const openModal = () => {
    if (modalRef.current) {
      // Show modal
      modalRef.current.style.display = "flex";
      
      // GSAP animation for modal
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      // GSAP animation for closing
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          if (modalRef.current) {
            modalRef.current.style.display = "none";
          }
        }
      });
    }
  };

  const redirectToDashboard = () => {
    window.open("https://paycoin-dashboard.netlify.app/", "_blank");
  };

  return (
    <>
      <section id="home" className="hero" ref={heroRef}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="tag-icon"></span>
              AI-POWERED CRYPTO MINING
            </div>
            <h1 className="hero-title">
              Start Mining
              <br />
              <span className="gradient-text">Bitcoin</span> Today
            </h1>
            <p className="hero-subtitle">
              Register, connect your account, and let our AI mine Bitcoin for you. 
              Withdraw after reaching $6,000 in just 3-4 days.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary pulse-on-click"
                onClick={redirectToDashboard}
              >
                <Pickaxe size={20} />
                START MINING NOW
              </button>
              <button 
                className="btn-secondary"
                onClick={openModal}
              >
                <Wallet size={20} />
                VIEW EARNINGS
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/avengers.webp" alt="Mining Technology" />
          </div>
        </div>
      </section>

      {/* Earnings Modal */}
      <div className="modal-overlay" ref={modalRef} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            <X size={20} />
          </button>
          <div className="modal-icon">
            <Wallet size={48} />
          </div>
          <h3 className="modal-title">View Your Earnings</h3>
          <p className="modal-description">
            To view your earnings and track your mining progress, you need to register first. 
            Join thousands of successful miners today!
          </p>
          <div className="modal-buttons">
            <button 
              className="modal-primary-btn"
              onClick={redirectToDashboard}
            >
              Register Now
            </button>
            <button 
              className="modal-secondary-btn"
              onClick={closeModal}
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;