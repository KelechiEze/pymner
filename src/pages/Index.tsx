import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../components/Hero";
import CryptoTicker from "../components/CryptoTicker";
import InvestmentOpportunity from "../components/InvestmentOpportunity";
import InvestmentServices from "../components/InvestmentServices";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import TokenSales from "../components/TokenSales";
import Roadmap from "../components/Roadmap";
import Advisors from "../components/Advisors";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <CryptoTicker />
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
