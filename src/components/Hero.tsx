import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Search, Check, X, Clock } from "lucide-react";
import TrustPilotRow from "../components/TrustpilotRow";
import { Link, Navigate } from "react-router-dom";
import { leagueRedirects, predefinedKeywords, teamRedirects } from "../lib/searchKeywords";
import { GET_UPCOMING_POPULAR_MATCHES } from "../lib/graphql/queries/PopularUpcomingMatches";
import { useQuery } from '@apollo/client';
import { formatDate } from "../lib/utils";
import { Match } from "../lib/graphql/queries/getHomePageProps";
import { GET_SEARCH_RESULTS } from "../lib/graphql/queries/Search";
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom';
import { log } from "console";


const DEBOUNCE_DELAY = 300;
const Hero = () => {

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredMatches, setFeaturedMatches] = useState([]);
  const [results, setResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(true);

  const { data: upcomingData,
    loading: upcomingLoading,
    error: upcomingError,
  } = useQuery(GET_UPCOMING_POPULAR_MATCHES, {
    variables: { limit: 4, },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (upcomingData?.popularUpcomingMatches) {
      const formattedMatches = upcomingData.popularUpcomingMatches.map((match: any, index: number) => {
        const matchDate = new Date(Number(match.date));
        return {
          id: index,
          homeTeam: match.home_team,
          categoryName: match.league,
          year: matchDate.getFullYear(),
          month: matchDate.toLocaleString("en-US", { month: "short" }).toUpperCase(),
          day: matchDate.getDate(),
          time: matchDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
          venue: match.venue,
          city: match.city,
          country: match.country,
          eventName: match.title,
          date: formatDate(match.date),
          league: match.league,
          urlToEvent: match.slug,
          tba: false,
          minPrice: {
            gbp: 95,
            usd: 120,
            eur: 110,
            aud: 170,
            cad: 160,
            chf: 105,
          },
          link: `/tickets/${match.slug}`,
        };
      });
      setFeaturedMatches(formattedMatches);
    }
  }, [upcomingData]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = predefinedKeywords.filter((keyword) =>
    keyword.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery
  );

  const { data: searchData, loading: queryLoading, error: searchError } = useQuery(GET_SEARCH_RESULTS, {
    variables: { searchTerm },
    fetchPolicy: "network-only",
    skip: !searchTerm.trim(),
  });

  useEffect(() => {
    if (searchData?.searchResult) {
      setResults(searchData.searchResult);
      setSearchLoading(false);
    }
  }, [searchData]);

  // Debounce function to update the searchTerm state (triggers query)
  const debouncedSetSearchTerm = debounce((val) => {
    setSearchTerm(val);
    setSearchLoading(true);
  }, DEBOUNCE_DELAY);

  // On input change: update input field and debounce update of searchTerm
  const onInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setShowSuggestions(true);
    debouncedSetSearchTerm(val);
    if (val.trim() === '') {
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (value) => {
    // setSearchQuery(value);
    // setSearchTerm(value);

    if (value.type === "MatchResult") {

      const newDate = new Date(Number(value.date));

      const day = String(newDate.getUTCDate()).padStart(2, '0'); // "04"

      const month = newDate.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }).toUpperCase(); // AUG
      const year = newDate.getUTCFullYear(); // 2025
      const time = newDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' }); // 02:00 PM

      navigate(`/tickets/${value.slug}`, {
        state: {
          homeTeam: value.home_team,
          eventId: value.id,
          eventCode: value.eventCode,
          eventTypeCode: value.eventTypeCode,
          pageNumber: 1,
          eventName: value.title,
          categoryName: value.league,
          day: day,
          month: month,
          year: year,
          time: time,
          venue: value.venue,
          city: value.city,
          country: value.country,
          minPrice: value.price,
        },
      });
    } else {
      navigate(`/matches/premeri-league/${value.slug}`);
    }

    setShowSuggestions(false);
    setSearchLoading(true);
  };


  // const handleSelectSuggestion = (keyword: string) => {

  //   const team = teamRedirects[keyword];
  //   if (team) {
  //     window.location.href = `/matches?team=${encodeURIComponent(team)}&league=Premier League`;
  //     return;
  //   }
  //   switch (keyword) {
  //     case "Premier League":
  //       window.location.href = "/league/premier-league";
  //       return;
  //     case "Champions League":
  //       window.location.href = "/champions league";
  //       return;
  //     case "Europa League":
  //       window.location.href = "/europa-league";
  //       return;
  //     case "FA Cup":
  //       window.location.href = "/fa-cup";
  //       return;
  //     case "EFL Cup":
  //       window.location.href = "/efl-cup";
  //       return;
  //     case "Community Shield":
  //       window.location.href = "/community-shield";
  //       return;
  //     case "Championship":
  //       window.location.href = "/championship";
  //       return;
  //     default:
  //       setSearchQuery(keyword);
  //       setShowSuggestions(false);
  //   }
  //   setSearchQuery(keyword);
  //   setShowSuggestions(false);
  // };



  return (
    <main>
      {/* <TrustPilotRow /> */}
      <div className="w-full relative">
        {/* Hero Background Image */}
        <div
          className="w-full h-[60vh] min-h-[300px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url('/uploads/monochrome-soccer-fans-cheering.jpg')`,
            backgroundPosition: "50% 30%",
          }}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
            <div className="bg-white/10 my-12 rounded-xl shadow-lg max-w-3xl mx-auto overflow-visible mb-12 animate-slide-in">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Search size={20} className="text-ticket-lightcolor" />
                  <h2 className="text-lg font-semibold ml-2">
                    Find your perfect match
                  </h2>
                </div>

                <div className="w-full max-w-3xl mx-auto mt-10">
                  {/* Search Input */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 relative">
                    <div className="flex-1 relative">
                      <div className="relative w-full">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={onInputChange}
                          placeholder="Search clubs or matches..."
                          className="w-full border border-ticket-lightgray rounded-lg p-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-ticket-primarycolor text-black"
                        />

                        {/* Search Icon (left) */}
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />

                        {/* Clear (X) Icon (right) - only show if there's a query */}
                        {searchQuery && (
                          <button
                            onClick={() => {
                              setSearchQuery("");
                              setResults([]);
                              setShowSuggestions(false);
                            }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-ticket-red"
                            aria-label="Clear search"
                          >
                            <X size={18} />
                          </button>
                        )}
                      </div>
                      {/* Suggestions dropdown */}
                      {showSuggestions && (
                        <div className="absolute z-20 w-full bg-white text-black border border-gray-200 mt-1 rounded-lg max-h-80 overflow-y-auto shadow-lg">
                          {searchLoading ? (
                            <div className="flex justify-center items-center py-6">
                              <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-ticket-primarycolor"></div>
                            </div>
                          ) : results.length > 0 ? (
                            <ul>
                              {results.map((item) => {
                                // Format date only for match results
                                let day, month, year, time;

                                if (item.type === "MatchResult") {
                                  const newDate = new Date(Number(item.date));
                                  day = String(newDate.getUTCDate()).padStart(2, "0");
                                  month = newDate
                                    .toLocaleString("en-US", { month: "short", timeZone: "UTC" })
                                    .toUpperCase();
                                  year = newDate.getUTCFullYear();
                                  time = newDate.toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                    timeZone: "UTC",
                                  });
                                }

                                return (
                                  <li
                                    key={item.id}
                                    className="px-4 py-2 hover:bg-ticket-lightgray cursor-pointer text-sm"
                                    onClick={() => handleSelectSuggestion(item)}
                                  >
                                    {item.type === "TeamResult" ? (
                                      <>
                                        <h3 className="text-base text-ticket-red font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.country}</p>
                                        <a className="text-sm hover:underline mt-2 inline-block">
                                          View Club Matches
                                        </a>
                                      </>
                                    ) : (
                                      <>
                                        <div className="grid grid-cols-12 items-center border-gray-200 group cursor-pointer transition">
                                          <div className="col-span-1 bg-gray-50 text-center transition">
                                            <div className="py-1">
                                              <div className="uppercase text-xs text-gray-800">{month}</div>
                                              <div className="text-2xl font-bold group-hover:text-ticket-red">{day}</div>
                                              <div className="text-sm text-gray-400">{year}</div>
                                            </div>
                                          </div>

                                          <div className="col-span-8 pl-4">
                                            <div className="text-xs text-gray-500 uppercase mb-1 group-hover:text-black transition">
                                              {item.league}
                                            </div>
                                            <div className="text-sm font-medium mb-1 group-hover:text-ticket-red transition">
                                              {item.title}
                                            </div>
                                            <div className="flex items-center font-light text-sm text-gray-600 group-hover:text-gray-800 transition whitespace-nowrap overflow-hidden text-ellipsis">
                                              <Clock size={14} className="mr-1 shrink-0" />
                                              <span>{time}</span>
                                              <span className="mx-2">•</span>
                                              <MapPin size={14} className="mr-1 shrink-0" />
                                              <span className="truncate">
                                                {item.venue}, {item.city}, {item.country}
                                              </span>
                                            </div>

                                          </div>
                                        </div>
                                      </>
                                    )}
                                    <hr />
                                  </li>
                                );
                              })}
                            </ul>

                          ) : (
                            <p className="text-center text-sm text-gray-500 py-4">No results found.</p>
                          )}
                        </div>
                      )}

                    </div>

                    <button
                      className="btn-primary bg-ticket-primarycolor hover:bg-ticket-red flex items-center justify-center px-5 py-3 rounded-lg text-white"
                      onClick={() => {
                        setSearchTerm(searchQuery);
                        setShowSuggestions(false);
                        setSearchLoading(true);
                      }}
                    >
                      <Search size={18} className="mr-2" />
                      Find Tickets
                    </button>

                  </div>
                </div>

              </div>

              {/* Quick Picks */}
              <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                  <Calendar size={16} className="text-ticket-lightcolor mr-2" />
                  <span className="text-sm font-semibold text-ticket-lightcolor">
                    Popular Upcoming Matches
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {featuredMatches.map((match) => (
                    <Link
                      key={match.id}
                      to={match.link}
                      state={{
                        homeTeam: match.homeTeam,
                        eventId: match.id,
                        eventCode: match.eventCode,
                        eventTypeCode: match.eventTypeCode,
                        pageNumber: 1,
                        eventName: match.eventName,
                        categoryName: match.categoryName,
                        day: match.day,
                        month: match.month,
                        year: match.year,
                        time: match.time,
                        venue: match.venue,
                        city: match.city,
                        country: match.country,
                        minPrice: match.minPrice.gbp
                      }}
                      className="bg-white p-3 rounded-md hover:shadow-md text-sm text-ticket-primarycolor hover:text-ticket-red group">
                      {/* Match name wrapper */}
                      <div className="font-medium overflow-hidden ">
                        <div className="inline-block whitespace-nowrap transition-transform duration-500 group-hover:translate-x-[-30%]">
                          {match.eventName}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 flex items-center group-hover:text-ticket-darkcolor mt-1">
                        <Calendar size={12} className="mr-1" />
                        {match.date}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Hero;

