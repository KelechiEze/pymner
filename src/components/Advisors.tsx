import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Advisors.css";

gsap.registerPlugin(ScrollTrigger);

const advisorData = [
  { label: "Total Active Miners", amount: "2,500,000", color: "#9370DB" },
  { label: "Daily Earnings Generated", amount: "$11,500,000", color: "#6495ED" },
  { label: "Successful Withdrawals", amount: "423,000", color: "#4169E1" },
  { label: "Bitcoin Mined (BTC)", amount: "23,000", color: "#1E90FF" },
];

const Advisors = () => {
  const advisorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (advisorsRef.current) {
      gsap.fromTo(
        ".advisor-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: advisorsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="advisors" className="advisors" ref={advisorsRef}>
      <div className="advisors-container">
        <div className="advisors-content">
          <div className="advisors-image">
            <img src="/avengers.webp" alt="Advisors" />
          </div>
          <div className="advisors-info">
            <div className="section-tag">PLATFORM STATS</div>
            <h2 className="section-title">Trusted by Millions</h2>
            <div className="advisors-list">
              {advisorData.map((item, index) => (
                <div key={index} className="advisor-item">
                  <div className="advisor-label">{item.label}</div>
                  <div className="advisor-amount" style={{ color: item.color }}>
                    {item.amount}
                  </div>
                  <div className="advisor-bar">
                    <div
                      className="advisor-bar-fill"
                      style={{
                        width: `${(parseInt(item.amount.replace(/,/g, "")) / 500000000) * 100}%`,
                        background: item.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisors;