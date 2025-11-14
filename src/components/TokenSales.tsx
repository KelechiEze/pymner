import { useEffect, useRef, useState } from "react";
import { ShoppingCart, Bitcoin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TokenSales.css";

gsap.registerPlugin(ScrollTrigger);

const TokenSales = () => {
  const salesRef = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set end date to 4 months from now
  const getEndDate = () => {
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 4);
    return endDate;
  };

  const [endDate] = useState(getEndDate());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  useEffect(() => {
    if (salesRef.current) {
      gsap.fromTo(
        ".token-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: salesRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const redirectToDashboard = () => {
    window.open("https://pacoinminers.netlify.app/", "_blank");
  };

  return (
    <section id="token" className="token-sales" ref={salesRef}>
      <div className="token-container">
        <div className="token-grid">
          <div className="token-card">
            <h3 className="token-card-title">Mining Event Progress</h3>
            <div className="progress-stats">
              <div className="stat">
                <span className="stat-label">RAISED</span>
                <span className="stat-value">5,723</span>
              </div>
              <div className="stat">
                <span className="stat-label">TOTAL COIN</span>
                <span className="stat-value">3,499,000</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "16%" }}></div>
            </div>
            <div className="cap-stats">
              <div className="cap">
                <span className="cap-label">SOFT CAP</span>
                <span className="cap-value">57,000</span>
              </div>
              <div className="cap">
                <span className="cap-label">HARD CAP</span>
                <span className="cap-value">2,500,000</span>
              </div>
            </div>
            <div className="countdown-section">
              <p className="countdown-label">Mining event ends in:</p>
              <div className="countdown-grid">
                <div className="countdown-item">
                  <div className="countdown-value">{countdown.days}</div>
                  <div className="countdown-unit">Days</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">{countdown.hours}</div>
                  <div className="countdown-unit">Hours</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">{countdown.minutes}</div>
                  <div className="countdown-unit">Minutes</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">{countdown.seconds}</div>
                  <div className="countdown-unit">Seconds</div>
                </div>
              </div>
            </div>
            <button className="register-button" onClick={redirectToDashboard}>
              <ShoppingCart size={20} />
              REGISTER & START MINING
            </button>
          </div>

          <div className="token-card">
            <h3 className="token-card-title">Mining Information</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">EVENT STARTS</span>
                <span className="info-value">NOVEMBER 01, 2025</span>
              </div>
              <div className="info-item">
                <span className="info-label">EVENT ENDS</span>
                <span className="info-value">
                  {endDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  }).toUpperCase()}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">MINING DURATION</span>
                <span className="info-value">3-4 Days</span>
              </div>
              <div className="info-item">
                <span className="info-label">WITHDRAWAL THRESHOLD</span>
                <span className="info-value">$6,000 USD</span>
              </div>
              <div className="info-item">
                <span className="info-label">ACTIVE MINERS</span>
                <span className="info-value">2,500,000+</span>
              </div>
              <div className="info-item">
                <span className="info-label">TOTAL MINED</span>
                <span className="info-value">$57M+</span>
              </div>
              <div className="info-item">
                <span className="info-label">MINING COIN</span>
                <span className="info-value">Bitcoin (BTC)</span>
              </div>
              <div className="info-item">
                <span className="info-label">PAYMENT METHODS</span>
                <span className="info-value accepted-crypto">
                  <span>ETH, BTC, USDT</span>
                  <Bitcoin size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSales;