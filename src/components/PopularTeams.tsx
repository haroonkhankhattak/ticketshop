import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface TeamCardProps {
  name: string;
  imageUrl: string;
  link: string;
  logoUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, imageUrl, link, logoUrl }) => {
  return (
    <Link to={link} className="relative group rounded-lg overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name} fans`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <div className="absolute bottom-0 w-full p-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <img
              src={logoUrl} // Add logo image URL
              alt={`${name} logo`}
              className="w-8 h-8 object-contain mr-2" // Adjust size and margin
            />
            <h3 className="font-semibold text-l">
              <span className="text-ticket-red">{name}</span> <span className="text-white">Tickets</span>
            </h3>
          </div>
          <ChevronRight className="text-white transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>

  );
};

const PopularTeams = () => {
  const teams = [
    {
      name: "Arsenal",
      imageUrl: "/uploads/teamfans/Arsenal.webp",
      link: "/matches?team=Arsenal&league=Premier League",
      logoUrl: "/uploads/teamlogo/Arsenal.webp",
    },
    {
      name: "Chelsea",
      imageUrl: "/uploads/teamfans/Chelsea.webp",
      link: "/matches?team=Chelsea&league=Premier League",
      logoUrl: "/uploads/teamlogo/Chelsea.webp",
    },
    {
      name: "Liverpool",
      imageUrl: "/uploads/teamfans/Liverpool.webp",
      link: "/matches?team=Liverpool&league=Premier League",
      logoUrl: "/uploads/teamlogo/Liverpool.webp",
    },
    {
      name: "Manchester United",
      imageUrl: "/uploads/teamfans/Manchester United.webp",
      link: "/matches?team=Manchester United&league=Premier League",
      logoUrl: "/uploads/teamlogo/manchester_united.webp",
    },
  ];

  return (
    <section className="py-4 bg-white">
      <div className="ticket-container">
        <h2 className="font-dosis text-xl font-medium text-black mb-6">Popular Teams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teams.map((team) => (
            <TeamCard
              key={team.name}
              name={team.name}
              imageUrl={team.imageUrl}
              link={team.link}
              logoUrl={team.logoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTeams;
