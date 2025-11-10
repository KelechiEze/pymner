import { Sparkles, Twitter, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Sparkles className="logo-icon" />
              <span>Paycoin</span>
            </div>
            <p className="footer-description">
              Leading AI-powered Bitcoin mining platform. Start mining today and 
              withdraw after reaching $6,000 in just 3-4 days.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Platform</h4>
            <a href="#home">Start Mining</a>
            <a href="#features">Features</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#token">Mining Event</a>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">Help Center</a>
            <a href="#">Mining Guide</a>
            <a href="#">FAQ</a>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get mining updates and tips directly to your inbox.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <p className="footer-copyright">
            © 2025 Paycoin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
