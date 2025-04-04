import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import TrustPilotRow from "../components/TrustpilotRow";
import Hero from "../components/Hero";
import PopularTeams from "../components/PopularTeams";
import MatchList from "../components/MatchList";
import Testimonials from "../components/Testimonials";
import RecentNews from "../components/RecentNews";
import FootballTickets from "../components/FootballTickets";
import Footer from "../components/Footer";


const Index = () => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const handleScroll = () => {
      if (heroRef.current) {
        const { bottom } = heroRef.current.getBoundingClientRect();
        setIsScrolledPastHero(bottom <= 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="min-h-screen flex-grow">
      <Header isScrolledPastHero={isScrolledPastHero} fixed={true} />
      <TrustPilotRow />
      <main className="flex-grow pt-[120px]">
        <div ref={heroRef}>
          <Hero />
        </div>
        <PopularTeams />
        <MatchList />
        <Testimonials />
        <RecentNews />
        <FootballTickets />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
