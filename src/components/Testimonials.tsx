import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".testimonial-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Early Miner",
      location: "United States",
      amount: "$6,200",
      days: "3",
      rating: 5,
      text: "I couldn't believe it at first, but Paycoin's AI mining system actually works! I reached $6,000 in just 3 days and withdrew without any issues. This is the future of crypto mining!",
    },
    {
      name: "Sarah Chen",
      role: "Professional Miner",
      location: "Singapore",
      amount: "$12,400",
      days: "6",
      rating: 5,
      text: "I've been mining on Paycoin for two cycles now. The AI-powered system is incredibly efficient, and the withdrawal process is seamless. Best mining platform I've ever used!",
    },
    {
      name: "James Okonkwo",
      role: "Bitcoin Enthusiast",
      location: "Nigeria",
      amount: "$6,800",
      days: "4",
      rating: 5,
      text: "Paycoin made Bitcoin mining accessible to everyone. No technical knowledge needed, just register and let the AI do the work. I withdrew $6,800 after 4 days!",
    },
    {
      name: "Emma Thompson",
      role: "First-Time Miner",
      location: "United Kingdom",
      amount: "$6,100",
      days: "3",
      rating: 5,
      text: "As someone new to crypto, Paycoin's platform was incredibly easy to use. The mining event is genuine, and I got my withdrawal exactly when promised. Highly recommend!",
    },
    {
      name: "Carlos Silva",
      role: "Tech Investor",
      location: "Brazil",
      amount: "$18,600",
      days: "9",
      rating: 5,
      text: "Three successful mining cycles and counting! Paycoin's technology is revolutionary. The AI mining system maximizes earnings while I focus on my day job.",
    },
    {
      name: "Yuki Tanaka",
      role: "Crypto Trader",
      location: "Japan",
      amount: "$7,200",
      days: "3",
      rating: 5,
      text: "Fast, reliable, and profitable. Paycoin delivers on every promise. The mining event is a game-changer for anyone looking to earn Bitcoin effortlessly.",
    },
  ];

  return (
    <section ref={sectionRef} className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-tag">SUCCESS STORIES</span>
          <h2 className="section-title">What Our Miners Say</h2>
          <p className="section-description">
            Join thousands of successful miners who have already earned and withdrawn their Bitcoin
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon" />
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-stats">
                <div className="stat-item">
                  <span className="stat-value">{testimonial.amount}</span>
                  <span className="stat-label">Withdrawn</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <span className="stat-value">{testimonial.days} Days</span>
                  <span className="stat-label">To Reach Goal</span>
                </div>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
