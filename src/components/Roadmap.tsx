import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Roadmap.css";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { date: "JANUARY 21, 2025", title: "Platform launch & AI mining system activated" },
  { date: "FEBRUARY 01, 2025", title: "First 10,000 miners successfully onboarded" },
  { date: "MARCH 29, 2025", title: "Global mining event begins worldwide" },
  { date: "MAY 15, 2025", title: "Mobile app launch for iOS & Android" },
  { date: "AUGUST 10, 2025", title: "Advanced mining dashboard & analytics" },
  { date: "OCTOBER 25, 2025", title: "Instant withdrawal feature activated" },
  { date: "DECEMBER 31, 2025", title: "Multi-coin mining support added" },
];

const Roadmap = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (roadmapRef.current) {
      gsap.fromTo(
        ".roadmap-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: roadmapRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="roadmap" className="roadmap" ref={roadmapRef}>
      <div className="roadmap-container">
        <div className="roadmap-header">
          <div className="section-tag">ROADMAP</div>
          <h2 className="section-title">
            Our Journey to Revolutionize
            <br />Crypto Mining
          </h2>
        </div>
        <div className="roadmap-content">
          <div className="roadmap-image">
            <div className="globe-backdrop"></div>
            <img src="/ikon2.webp" alt="Roadmap visual" />
          </div>
          <div className="roadmap-timeline">
            <div className="timeline-line"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className="roadmap-item">
                <div className="roadmap-date">{milestone.date}</div>
                <div className="roadmap-title">{milestone.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;