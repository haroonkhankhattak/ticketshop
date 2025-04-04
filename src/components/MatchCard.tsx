import React from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TeamProps {
  name: string;
  logo: string;
}

interface MatchCardProps {
  id: number;
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  date: string;
  time: string;
  venue: string;
  competition: string;
  priceFrom: number;
  ticketsAvailable: number;
}

const MatchCard = ({
  id,
  homeTeam,
  awayTeam,
  date,
  time,
  venue,
  competition,
  priceFrom,
  ticketsAvailable,
}: MatchCardProps) => {
  return (
    <div className="card-ticket hover-scale">
      <div className="p-1 bg-ticket-blue text-white text-xs font-medium text-center">
        {competition}
      </div>

      <div className="p-4">
        {/* Teams */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col items-center text-center w-2/5">
            <div className="w-12 h-12 rounded-full bg-ticket-gray flex items-center justify-center mb-2 overflow-hidden">
              <img
                src={homeTeam.logo}
                alt={homeTeam.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="font-medium text-sm truncate w-full">
              {homeTeam.name}
            </div>
          </div>

          <div className="text-center">
            <div className="text-xs font-medium text-ticket-darkgray mb-1">
              VS
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-2/5">
            <div className="w-12 h-12 rounded-full bg-ticket-gray flex items-center justify-center mb-2 overflow-hidden">
              <img
                src={awayTeam.logo}
                alt={awayTeam.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="font-medium text-sm truncate w-full">
              {awayTeam.name}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-ticket-darkgray">
            <Calendar size={14} className="mr-2 text-ticket-red" />
            <span>
              {date} | {time}
            </span>
          </div>
          <div className="flex items-center text-sm text-ticket-darkgray">
            <MapPin size={14} className="mr-2 text-ticket-red" />
            <span>{venue}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-ticket-lightgray">
          <div>
            <div className="text-xs text-ticket-darkgray">From</div>
            <div className="text-lg font-bold text-ticket-red">
              £{priceFrom}
            </div>
            <div className="text-xs text-ticket-darkgray">
              {ticketsAvailable} tickets left
            </div>
          </div>

          <Link to={`/match/${id}`} className="btn-primary flex items-center">
            <span>See tickets</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
