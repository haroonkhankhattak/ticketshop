import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/layout/Header";
import TrustPilotRow from "../../components/TrustpilotRow";
import MatchLeague from "../../components/MatchLeague";
import LeagueMatchList from "../../components/LeagueMatchList";
import Testimonials from "../../components/Testimonials";
import LeagueRecentNews from "../../components/LeagueRecentNews";
import LeagueTickets from "../../components/LeagueTickets";
import Footer from "../../components/layout/Footer";
import { useSearchParams } from "react-router-dom";



const League = () => {
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
        <LeagueMatchList />
        <Testimonials />
        <LeagueRecentNews league={"English Premier League"} />
        <LeagueTickets league={"English Premier League"} />
      </main>
      <Footer />
    </div>
  );
};

export default League;
