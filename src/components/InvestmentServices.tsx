import { useEffect, useRef } from "react";
import { TrendingUp, Shield, Wallet2, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./InvestmentServices.css";

gsap.registerPlugin(ScrollTrigger);

const InvestmentServices = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: TrendingUp,
      title: "Portfolio Management",
      description: "Expert-managed crypto portfolios optimized for maximum returns with minimal risk.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Bank-grade security protocols protecting your investments 24/7 with insurance coverage.",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Wallet2,
      title: "Flexible Plans",
      description: "Choose from multiple investment packages tailored to your financial goals and risk tolerance.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Professional crypto advisors available to guide your investment decisions and strategies.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section id="investment" className="investment-services" ref={sectionRef}>
      <div className="investment-services-container">
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-icon"></span>
            INVESTMENT OPPORTUNITIES
          </div>
          <h2 className="section-title">
            Grow Your Wealth with <span className="gradient-text">Smart Investments</span>
          </h2>
          <p className="section-description">
            Beyond mining, explore our professional cryptocurrency investment services designed to multiply your returns
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  onError={(e) => {
                    // Fallback images in case Unsplash fails
                    const fallbackImages = [
                      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
                      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
                      "https://images.unsplash.com/photo-1639762681865-7f3e7e51a1e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
                      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
                    ];
                    e.currentTarget.src = fallbackImages[index];
                  }}
                />
                <div className="service-icon">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentServices;