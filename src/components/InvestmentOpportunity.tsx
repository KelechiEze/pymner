import { useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, DollarSign, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./InvestmentOpportunity.css";

gsap.registerPlugin(ScrollTrigger);

const InvestmentOpportunity = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Unsplash images for investment opportunity section
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
      alt: "Investment Management"
    },
    {
      url: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
      alt: "Crypto Analysis"
    },
    {
      url: "https://images.unsplash.com/photo-1639762681865-7f3e7e51a1e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
      alt: "Portfolio Growth"
    },
    {
      url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Expert Team"
    }
  ];

  // Fallback images in case Unsplash fails
  const fallbackImages = [
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
    e.currentTarget.src = fallbackImages[index];
  };

  useEffect(() => {
    gsap.fromTo(
      ".opportunity-content",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".opportunity-images",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section className="investment-opportunity" ref={sectionRef}>
      <div className="opportunity-container">
        <div className="opportunity-content">
          <div className="opportunity-tag">
            <span className="tag-icon"></span>
            MAXIMIZE YOUR RETURNS
          </div>
          <h2 className="opportunity-title">
            Professional Crypto
            <br />
            <span className="gradient-text">Investment Services</span>
          </h2>
          <p className="opportunity-description">
            Join thousands of investors who trust Paycoin for their cryptocurrency investment needs. 
            Our expert team manages diversified portfolios across Bitcoin, Ethereum, and emerging altcoins 
            to ensure optimal returns while minimizing risk.
          </p>

          <div className="opportunity-features">
            <div className="feature-item">
              <div className="feature-icon">
                <TrendingUp size={20} />
              </div>
              <div className="feature-text">
                <h4>15-25% Monthly Returns</h4>
                <p>Consistent growth with proven strategies</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <DollarSign size={20} />
              </div>
              <div className="feature-text">
                <h4>Minimum $500 Investment</h4>
                <p>Start building wealth with low entry</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Shield size={20} />
              </div>
              <div className="feature-text">
                <h4>100% Secure & Insured</h4>
                <p>Your investments are fully protected</p>
              </div>
            </div>
          </div>

          <button className="opportunity-btn">
            Start Investing Today
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="opportunity-images">
          <div className="image-grid">
            <div className="grid-item grid-item-1">
              <img 
                src={heroImages[0].url} 
                alt={heroImages[0].alt}
                loading="lazy"
                onError={(e) => handleImageError(e, 0)}
              />
            </div>
            <div className="grid-item grid-item-2">
              <img 
                src={heroImages[1].url} 
                alt={heroImages[1].alt}
                loading="lazy"
                onError={(e) => handleImageError(e, 1)}
              />
              <div className="play-button">
                <div className="play-icon"></div>
              </div>
            </div>
            <div className="grid-item grid-item-3">
              <img 
                src={heroImages[2].url} 
                alt={heroImages[2].alt}
                loading="lazy"
                onError={(e) => handleImageError(e, 2)}
              />
            </div>
            <div className="grid-item grid-item-4">
              <img 
                src={heroImages[3].url} 
                alt={heroImages[3].alt}
                loading="lazy"
                onError={(e) => handleImageError(e, 3)}
              />
            </div>
            <div className="grid-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunity;