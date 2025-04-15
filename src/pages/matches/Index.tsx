import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/layout/Header";
import TrustPilotRow from "../../components/TrustpilotRow";
import TeamMatchList from "../../components/TeamMatchList";
import Testimonials from "../../components/Testimonials";
import RecentNews from "../../components/RecentNews";
import FootballTickets from "../../components/FootballTickets";
import Footer from "../../components/layout/Footer";
import { useSearchParams } from "react-router-dom";
import LeagueMatchList from "@/components/LeagueMatchList";

const Matches = () => {
  const [searchParams] = useSearchParams();
  const team = searchParams.get("team");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen flex-grow">
      <Header isScrolledPastHero={true} fixed={false} />
      <main className="flex-grow">
        {/* <TrustPilotRow /> */}
        <TeamMatchList />
        <Testimonials />
        <RecentNews />
        <FootballTickets />
      </main>
      <Footer />
    </div>
  );
};

export default Matches;
