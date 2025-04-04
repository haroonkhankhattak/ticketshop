import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import TrustPilotRow from "../../components/TrustpilotRow";
import TicketsCard from "../../components/TicketsCard";
import TicketList from "../../components/TicketList";
import Testimonials from "../../components/Testimonials";
import RecentNews from "../../components/RecentNews";
import FootballTickets from "../../components/FootballTickets";
import Footer from "../../components/Footer";
import { useSearchParams } from "react-router-dom";
import MatchCard from "@/components/MatchCard";


const Tickets = () => {
  const [searchParams] = useSearchParams();
  const matchid = searchParams.get("matchid");


  // useEffect(() => {



  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });

  // }, []);



  return (
    <div className="min-h-screen flex-grow">
      <Header isScrolledPastHero={true} fixed={false} />
      <main className="flex-grow">
        <TrustPilotRow />
        <TicketList />
        <Testimonials />
        <RecentNews />
        <FootballTickets />
      </main>
      <Footer />
    </div>
  );
};

export default Tickets;




// import { useParams } from "react-router-dom";

// const Tickets = () => {
//   const { matchId } = useParams(); // Get match ID from the URL

//   return (
//     <div>
//       <h1>Match ID: {matchId}</h1>
//       <p>Loading tickets for match {matchId}...</p>
//     </div>
//   );
// };

// export default Tickets;
