import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Features.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "AI-Powered Mining",
    description: "Our advanced AI algorithms automatically mine Bitcoin for you 24/7. Simply register and let the technology work while you earn.",
    image: "/ikon1.webp",
  },
  {
    title: "Fast Withdrawals",
    description: "Reach the $6,000 threshold in just 3-4 days and withdraw your earnings instantly. No delays, no hassles.",
    image: "/ikon2.webp",
  },
  {
    title: "Secure & Reliable",
    description: "Bank-level security protects your account and earnings. Our platform ensures safe, transparent mining operations.",
    image: "/ikon3.webp",
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (featuresRef.current) {
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="features" className="features" ref={featuresRef}>
      <div className="features-container">
        <div className="features-header">
          <div className="section-tag">WHY CHOOSE PAYCOIN</div>
          <h2 className="section-title">Mining Made Simple</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;