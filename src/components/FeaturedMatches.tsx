import React from "react";
import MatchCard from "./MatchCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedMatches = () => {
  // Placeholder team logos (these would be actual logo URLs in a real app)
  const placeholderLogo = "/placeholder.svg";

  // Featured matches data
  const matches = [
    {
      id: 1,
      homeTeam: { name: "Manchester United", logo: placeholderLogo },
      awayTeam: { name: "Liverpool", logo: placeholderLogo },
      date: "Oct 20, 2023",
      time: "15:00",
      venue: "Old Trafford, Manchester",
      competition: "Premier League",
      priceFrom: 245,
      ticketsAvailable: 12,
    },
    {
      id: 2,
      homeTeam: { name: "Real Madrid", logo: placeholderLogo },
      awayTeam: { name: "Barcelona", logo: placeholderLogo },
      date: "Oct 28, 2023",
      time: "20:00",
      venue: "Santiago Bernabeu, Madrid",
      competition: "La Liga",
      priceFrom: 320,
      ticketsAvailable: 8,
    },
    {
      id: 3,
      homeTeam: { name: "PSG", logo: placeholderLogo },
      awayTeam: { name: "Bayern Munich", logo: placeholderLogo },
      date: "Nov 7, 2023",
      time: "20:45",
      venue: "Parc des Princes, Paris",
      competition: "Champions League",
      priceFrom: 290,
      ticketsAvailable: 15,
    },
    {
      id: 4,
      homeTeam: { name: "Arsenal", logo: placeholderLogo },
      awayTeam: { name: "Tottenham", logo: placeholderLogo },
      date: "Nov 15, 2023",
      time: "16:30",
      venue: "Emirates Stadium, London",
      competition: "Premier League",
      priceFrom: 225,
      ticketsAvailable: 6,
    },
    {
      id: 5,
      homeTeam: { name: "AC Milan", logo: placeholderLogo },
      awayTeam: { name: "Inter Milan", logo: placeholderLogo },
      date: "Nov 19, 2023",
      time: "20:45",
      venue: "San Siro, Milan",
      competition: "Serie A",
      priceFrom: 195,
      ticketsAvailable: 20,
    },
    {
      id: 6,
      homeTeam: { name: "Chelsea", logo: placeholderLogo },
      awayTeam: { name: "Manchester City", logo: placeholderLogo },
      date: "Dec 3, 2023",
      time: "16:30",
      venue: "Stamford Bridge, London",
      competition: "Premier League",
      priceFrom: 275,
      ticketsAvailable: 10,
    },
  ];

  return (
    <div className="ticket-container py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-ticket-blue">
          Featured Matches
        </h2>
        <Link
          to="/all-matches"
          className="text-ticket-red flex items-center hover:underline font-medium"
        >
          <span>View all</span>
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {matches.map((match) => (
          <MatchCard key={match.id} {...match} />
        ))}
      </div>

      <div className="bg-ticket-gray rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h3 className="text-xl md:text-2xl font-bold text-ticket-blue mb-2">
              Can't find the tickets you're looking for?
            </h3>
            <p className="text-ticket-darkgray max-w-2xl">
              We have access to thousands of tickets even when they appear sold
              out. Contact our team for personalized assistance.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="btn-primary w-full md:w-auto">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMatches;
