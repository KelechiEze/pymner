import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import CryptoTicker from "../components/CryptoTicker";
import InvestmentOpportunity from "../components/InvestmentOpportunity";
import InvestmentServices from "../components/InvestmentServices";
import InvestmentPlans from "../components/InvestmentPlans";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import TokenSales from "../components/TokenSales";
import Roadmap from "../components/Roadmap";
import Advisors from "../components/Advisors";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <CryptoTicker />
      <InvestmentPlans />
      <InvestmentOpportunity />
      <InvestmentServices />
      <Testimonials />
      <Features />
      <TokenSales />
      <Roadmap />
      <Advisors />
      <Footer />
    </div>
  );
};

export default Index;