import { useEffect, useRef } from "react";
import { Check, TrendingUp, Zap, Crown, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./InvestmentPlans.css";

gsap.registerPlugin(ScrollTrigger);

const InvestmentPlans = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const plans = [
    {
      icon: Zap,
      name: "Starter Plan",
      range: "$1,000 - $5,000",
      roi: "9% Monthly ROI",
      duration: "3-6 Months",
      features: [
        "Diversified crypto portfolio",
        "Basic market analysis",
        "Monthly withdrawals",
        "24/7 platform access",
      ],
      popular: false
    },
    {
      icon: TrendingUp,
      name: "Growth Plan",
      range: "$5,000 - $15,000",
      roi: "13% Monthly ROI",
      duration: "6-12 Months",
      features: [
        "Advanced portfolio management",
        "Real-time analytics dashboard",
        "Weekly withdrawals",
        "Priority support",
        "Personalized investment strategy"
      ],
      popular: true
    },
    {
      icon: Crown,
      name: "Premium Plan",
      range: "$20,000 - $50,000",
      roi: "20% Monthly ROI",
      duration: "12+ Months",
      features: [
        "Elite portfolio allocation",
        "Dedicated account manager",
        "VIP support 24/7",
        "Exclusive market insights",
        "Risk management tools"
      ],
      popular: false
    },
    {
      icon: Rocket,
      name: "Elite Plan",
      range: "$100,000 - Unlimited",
      roi: "30% Monthly ROI",
      duration: "Long-term Partnership",
      features: [
        "Custom portfolio strategy",
        "Personal investment advisor",
        "Instant withdrawals anytime",
        "White-glove service",
        "Private blockchain access",
        "Quarterly portfolio reviews",
      ],
      popular: false
    }
  ];

  // Function to handle Get Started button click
  const handleGetStarted = () => {
    // Open the external URL in a new tab
    window.open('https://pacoinminers.netlify.app/', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".plan-card");
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section className="investment-plans" ref={sectionRef}>
      <div className="plans-container">
        <div className="plans-header">
          <div className="plans-tag">
            <span className="tag-icon"></span>
            INVESTMENT PLANS
          </div>
          <h2 className="plans-title">
            Choose Your <span className="gradient-text">Investment Tier</span>
          </h2>
          <p className="plans-description">
            Select a plan that matches your investment goals. All plans include professional management, 
            secure custody, and guaranteed returns backed by our expert trading strategies.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
              
              <div className="plan-icon">
                <plan.icon size={32} />
              </div>
              
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-range">{plan.range}</div>
              
              <div className="plan-roi">
                <div className="roi-value">{plan.roi}</div>
                <div className="roi-duration">{plan.duration}</div>
              </div>

              <div className="plan-features">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <Check size={18} className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className="plan-button"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="plans-note">
          <p>
            * All returns are estimates based on historical performance. Cryptocurrency investments carry risk. 
            Actual returns may vary based on market conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;