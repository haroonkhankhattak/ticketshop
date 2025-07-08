import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import LeagueCard from "./LeagueCard";
import { useSearchParams } from "react-router-dom";
import TeamCard from "./TeamCard";
import FilterButton from "@/components/FilterButton";
import { EventProps, Props } from "../types/event";
import { leagues } from "../lib/constants/leagues";
import { useCurrencyLanguage } from "../lib/CurrencyLanguageContext";
import { formatDate } from "../lib/utils";
import { GET_MATCHES_BY_TEAM } from "../lib/graphql/queries/MatchesByTeam";
import { useQuery } from "@apollo/client/react/hooks";
import { Match } from "../types/match";
import { convertSlugToTeamName } from "../lib/teamUtils";




interface Team {
  name: string;
  link: string;
}

interface LeagueSectionProps {
  title: string;
  teams: Team[];
}

let HomeTeam: string;

const LeagueSection: React.FC<LeagueSectionProps> = ({ title, teams }) => {


  return (
    <div className="mb-16">
      <h2 className="font-dosis text-ltg-black text-lg font-medium capitalize pb-3">
        {title}
      </h2>
      <ul className="text-sm">
        {teams.map((team) => (
          <li
            key={team.name}
            className="border-t border-gray-300 py-2 last:border-b-0"
          >
            <a
              href={team.link}
              className="flex hover:underlin"
            >
              {team.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

  );
};



const MatchRow: React.FC<Match> = ({
  id,
  date,
  league,
  title,
  home_team,
  away_team,
  home_team_slug,
  away_team_slug,
  slug,
  venue,
  city,
  country,
  price_starts_from,
}) => {
  // const match = urlToEvent.match(/\/fixtures\/(.*?)-tickets-(.*)\.html/);

  const newDate = new Date(Number(date));

  const day = String(newDate.getUTCDate()).padStart(2, '0'); // "04"

  const month = newDate.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }).toUpperCase(); // AUG
  const year = newDate.getUTCFullYear(); // 2025
  const time = newDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' }); // 02:00 PM


  const { selectedCurrency } = useCurrencyLanguage();

  const currencySymbols: Record<string, string> = {
    gbp: "£",
    usd: "$",
    eur: "€",
    chf: "Fr",
    sek: "kr",
    nok: "kr",
    dkk: "kr",
  };

  const currencyKey = selectedCurrency.toLowerCase();
  const symbol = currencySymbols[selectedCurrency] || "";
  // const price = minPrice[currencyKey] ?? "N/A";
  const price = price_starts_from;
  const eventCode = ""; // your logic here
  const eventTypeCode = ""; // your logic here

  return (
    <div className="grid grid-cols-12 items-center border-b border-gray-200 group hover:bg-gray-100 cursor-pointer transition">
      <div className="col-span-1 bg-gray-50 text-center group-hover:bg-gray-200 transition">
        <div className="py-5">
          <div className="uppercase text-xs text-gray-800">{month}</div>
          <div className="text-3xl font-bold group-hover:text-ticket-red">{day}</div>
          <div className="text-sm text-gray-400">{year}</div>
        </div>
      </div>

      <div className="col-span-8 pl-4">
        <div className="text-xs text-gray-500 uppercase mb-1 group-hover:text-black transition">
          {league}
        </div>
        <div className="text-lg font-medium mb-1 group-hover:text-ticket-red transition">
          {title}
        </div>
        <div className="flex items-center font-light text-sm text-gray-600 group-hover:text-gray-800 transition">
          <Clock size={14} className="mr-1" />
          {time}
          <span className="mx-2">•</span>
          <MapPin size={14} className="mr-1" />
          {venue}, {city}, {country}
        </div>
      </div>

      <div className="col-span-3 px-0 text-center">
        <Link
          to={`/tickets/${slug}`}
          state={{
            homeTeam: home_team,
            eventId: id,
            eventCode: eventCode,
            eventTypeCode: eventTypeCode,
            pageNumber: 1,
            eventName: title,
            categoryName: league,
            day: day,
            month: month,
            year: year,
            time: time,
            venue: venue,
            city: city,
            country: country,
            minPrice: price,
          }}
          className="btn-primary inline-block text-sm px-8 bg-ticket-primarycolor group-hover:bg-ticket-red transition rounded-full">
          View Tickets
        </Link>

        <span className="inline-block text-sm">From {symbol}{price}</span>
      </div>
    </div>
  );
};


const TeamMatchList: React.FC<Props> = ({ matches, loading, error }) => {
  // const [searchParams] = useSearchParams();
  // const league = searchParams.get("league");
  // const slug = searchParams.get("team");
  const { league, team } = useParams();
  const teamName = convertSlugToTeamName(team);
  const leagueName = convertSlugToTeamName(league);
  HomeTeam = team;

  const [currentDateFilter, setCurrentDateFilter] = useState<"all" | "30 days" | "7 days" | "3 days">("all");


  // const team = searchParams.get("team");
  HomeTeam = "team";

  // Function to be passed to FilterButton to update the date filter state
  const handleDateFilterChange = (filterType: "all" | "30 days" | "7 days" | "3 days") => {
    console.log("Filter changed to:", filterType);
    setCurrentDateFilter(filterType);
  };

  // Apply both filters using the local state for date and search param for team
  const filteredMatches = getFilteredMatches(
    matches,
    currentDateFilter
  );

  function getFilteredMatches(events, dateFilter) {
    console.log("Filtering matches with date filter:", dateFilter);
    if (dateFilter === "all") {
      return events;
    }

    // Reference current date based on the provided context (June 5, 2025).
    // Set to midnight local time for consistent date comparison.
    const currentDate = new Date(2025, 5, 5); // Month is 0-indexed (June is 5)
    currentDate.setHours(0, 0, 0, 0); // Set time to beginning of the day

    let filterDays;
    if (dateFilter === "30 days") {
      filterDays = 30;
    } else if (dateFilter === "7 days") {
      filterDays = 7;
    } else if (dateFilter === "3 days") {
      filterDays = 3;
    } else {
      // If an invalid filter is provided, return all events or handle as an error.
      // For this case, we'll default to returning all events.
      console.warn(`Invalid date filter: ${dateFilter}. Returning all matches.`);
      return events;
    }

    // Calculate the end date for the filter period
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + filterDays);
    endDate.setHours(23, 59, 59, 999); // Set to end of the day to include matches on the last day

    // Helper map for month names to 0-indexed numbers
    const monthNameToNumber = {
      "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
      "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
    };

    return events.filter(event => {
      // Construct the event date from its properties (year, month, day)
      // Set to midnight local time for consistent date comparison
      const eventDate = new Date(event.year, monthNameToNumber[event.month], event.day);
      eventDate.setHours(0, 0, 0, 0); // Set time to beginning of the day

      // Filter criteria: event must be on or after the current date,
      // and on or before the calculated end date.
      return eventDate >= currentDate && eventDate <= endDate;
    });
  }


  return (
    <section className=" bg-white">
      <div className="ticket-container">
        <div className="mt-6 lg:mt-14 font-light text-sm text-gray-500">
          <ul
            aria-label="breadcrumbs"
            className="text-ltg-grey-1 font-roboto flex flex-wrap items-center gap-x-3 uppercase">
            <li>
              <a
                href="/"
                data-testid="breadcrumb"
                className="whitespace-nowrap hover:underline">
                Home
              </a>
              <span className="pl-3 text-xl lg:text-2xl font-bold">▸</span>
            </li>
            <li>
              <a
                href={`/league/${encodeURIComponent(
                  league
                )}`}
                data-testid="breadcrumb"
                className="whitespace-nowrap hover:underline">
                {leagueName}
              </a>
              <span className="pl-3 text-xl lg:text-2xl font-bold">▸</span>
            </li>
            <li>
              <a
                href={`/matches/${encodeURIComponent(league)}/${encodeURIComponent(
                  team
                )}`}
                data-testid="breadcrumb"
                className="whitespace-nowrap hover:underline">
                {teamName}
              </a>

              <span className="pl-3 text-xl lg:text-2xl font-bold"></span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 py-4">
            {/* <LeagueCard leagueName={league} /> */}

            <TeamCard teamName={team} />

            <div className="lg:col-span-7 py-6">
              <div className="text-xl font-medium py-2 ">
                Upcoming {teamName} Fixtures
              </div>
              <div className="text-sm text-black py-2 ">
                {filteredMatches.length} results found.
              </div>
              <FilterButton
                onFilterChange={handleDateFilterChange}
                selectedFilter={currentDateFilter}
              />
              <div className="max-h-[600px] overflow-y-auto space-y-2">
                {loading ? (
                  <div className="w-full py-6 flex items-center justify-center bg-white/60">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-ticket-primarycolor border-gray-200"></div>
                  </div>
                ) : filteredMatches.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">No matches found.</div>
                ) : (
                  filteredMatches.map((match) => (
                    <MatchRow key={match.id} {...match} />
                  ))
                )}



              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-4 border-b py-4">
              <div className="text-xl font-medium py-4 border-b">
                Book With Confidence
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-500">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-light text-sm">
                    Champions League level Customer support
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-500">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-light text-sm">
                    5 star rating on Trustpilot (13k+ reviews)
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-500">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-light text-sm">
                    Best ticket selection and prices
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-sky-500">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-light text-sm">
                    150% Money Back Guarantee
                  </h3>
                </div>
              </div>
            </div>

            <div>
              {leagues.map((league, index) => (
                <LeagueSection
                  key={index}
                  title={league.title}
                  teams={league.teams}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default TeamMatchList;
