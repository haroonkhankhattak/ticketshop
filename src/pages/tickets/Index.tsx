import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import TrustPilotRow from "../../components/TrustpilotRow";
import Footer from "../../components/layout/Footer";
import { useLocation, useParams } from "react-router-dom";
// import HeroSection from "../../components/Hero";
import Breadcrumbs from "../../components/Breadcrumbs";
import TicketList from "../../components/TicketList";
import SupportInfo from "../../components/tickets/SupportInfo";
import StadiumSection from "../../components/tickets/StadiumSection";
import MatchInfo from "../../components/tickets/MatchInfo";
import HeroSection from "../../components/tickets/HeroSection";
import { Calendar, MapPin, CheckCircle, Info, Filter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TicketsResponse, TicketProps, TicketOption } from "../../../server/types/tickets";
import { eventNames } from "process";
// import { ANFIELD_SECTIONS } from "../../lib/constants";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Ticket } from "../../types/ticket";
import { PRIZE_RANGES } from "../../lib/constants";
import { CLUB_TICKETS_API } from "../../lib/constants/apis";
import { afc_bournemouth_tickets, arsenal_tickets, aston_villa_tickets, brentford_tickets, brighton_tickets, burnley_tickets, chelsea_tickets, crystal_palace_tickets, everton_tickets, fulham_tickets, ipswich_town_tickets, leeds_united_tickets, liverpool_tickets, manchester_city_tickets, manchester_united_tickets, newcastle_united_tickets, nottingham_forest_tickets, tottenham_hotspur_tickets, west_ham_united_tickets, wolverhampton_wanderers_tickets } from "../../components/tickets/Tickets";
import { useQuery } from "@apollo/client/react/hooks";
import { GET_TICKETS_BY_MATCH } from "../../lib/graphql/queries/TicketsByMatch";






const Tickets = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);

  const [response, setResponse] = useState<TicketsResponse>();
  const [error, setError] = useState<string | null>(null);

  const urlLocation = useLocation();

  const state = urlLocation.state as {
    homeTeam: string;
    eventId: string;
    eventCode: string;
    eventTypeCode: string;
    pageNumber: number;
    eventName: string,
    categoryName: string,
    day: number,
    month: string,
    year: number,
    time: string,
    venue: string,
    city: string,
    country: string
    minPrice: string
  };

  const [ticketQuantity, setTicketQuantity] = useState<"ANY" | number[]>("ANY");
  const [location, setLocation] = useState<string>("ALL");


  const [seatedTogether, setSeatedTogether] = useState<boolean>(false);
  // const [priceRange, setPriceRange] = useState<string>("ALL");

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: Infinity,
    areas: [] as string[],
    minTickets: 1,
    allowedQuantities: [] as number[],
    minTogatherSeats: 1,
  });

  const [areaNames, setAreaNames] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState(PRIZE_RANGES[0]?.value ?? "");
  const [areaName, setAreaName] = useState(areaNames[0] ?? "");
  const [availableTickets, setAvailableTickets] = useState<Ticket[]>([]);

  const applyFilters = (ticketList: Ticket[]) => {
    const filtered = ticketList.filter(ticket => {
      const inPriceRange = ticket.price >= filters.minPrice && ticket.price <= filters.maxPrice;
      const inSelectedAreas = filters.areas.length === 0 || filters.areas.includes(ticket.section_stand_name);
      const hasEnoughTickets = ticket.availability >= filters.minTickets;

      // quantity filtering logic
      let matchesQuantity = true;
      if (filters.allowedQuantities.length > 0) {
        const minSelected = Math.min(...filters.allowedQuantities);
        matchesQuantity = ticket.availability >= minSelected;
      }

      const meetsTogatherRequirement = filters.minTogatherSeats == null || ticket.togather_upto >= Number(filters.minTogatherSeats);

      console.log("Ticket:", ticket.id, "Price:", ticket.price, "Togather:", ticket.togather_upto, "minTogatherSeats", filters.minTogatherSeats, "Meets Togather Requirement:", meetsTogatherRequirement);

      return (
        inPriceRange &&
        inSelectedAreas &&
        hasEnoughTickets &&
        matchesQuantity &&
        meetsTogatherRequirement
      );
    });

    setFilteredTickets(filtered);
  };


  const handlePriceRangeChange = (value: string) => {
    setPriceRange(value);

    if (value !== "All") {
      const [min, max] = value.split("-").map(v => parseInt(v.trim()));
      setFilters(prev => ({
        ...prev,
        minPrice: min,
        maxPrice: isNaN(max) ? Infinity : max,
      }));
      console.log("handlePriceRangeChange");
    } else {
      setFilters(prev => ({
        ...prev,
        minPrice: 0,
        maxPrice: Infinity,
      }));
    }
  };


  const handleSeatedTogether = (value: boolean) => {
    setSeatedTogether(value);

    const quantityCount = Array.isArray(ticketQuantity)
      ? Math.max(...ticketQuantity)
      : 1;

    setFilters(prev => ({
      ...prev,
      minTogatherSeats: value && quantityCount > 1 ? quantityCount : 1,
    }));
  };


  const handleQuantityChange = (quantities: number[] | "ANY") => {
    setTicketQuantity(quantities);

    const quantityCount =
      quantities === "ANY" ? 1 : Math.max(...quantities);

    setFilters(prev => ({
      ...prev,
      allowedQuantities: quantities === "ANY" ? [] : quantities,
      minTogatherSeats:
        seatedTogether && quantityCount > 1 ? quantityCount : 1,
    }));
  };


  const handleAreaChange = (value: string) => {
    setLocation(value);

    setFilters(prev => ({
      ...prev,
      areas: value === "All" ? [] : [value],
    }));
  };


  const handleMinTicketsChange = (min: number) => {
    setFilters(prev => ({
      ...prev,
      minTickets: min,
    }));
  };


  const handleClearFilter = () => {
    setFilters({
      minPrice: 0,
      maxPrice: Infinity,
      areas: [],
      minTickets: 1,
      allowedQuantities: [],
      minTogatherSeats: 1
    });

    setPriceRange("All");
    setLocation("All");
    setTicketQuantity("ANY");
    setSeatedTogether(false);
    setSelectedSection(null);
    setSelectedSeat(null);
  };


  const handleAreaClick = (area: string) => {
    setSelectedArea(area);
    setLocation(area);
    setSelectedSeat(null);
  };

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    setSelectedSeat(null);
  };

  const handleTicketHover = (ticketArea: string, ticketSection?: string) => {
    setSelectedArea(ticketArea);
    if (ticketSection) {
      setSelectedSeat(ticketSection);
    }
  };

  const handleTicketSelect = (id: string) => {
    const ticket = tickets.find((t) => t.id === id);
    if (ticket) {
      setSelectedSeat(ticket.section_tier);
      setSelectedArea(ticket.section_stand_name);
      setSelectedSection(ticket.section_name);
    }
  };

  // const availableTickets: Record<string, Ticket[]> = {
  //   "Anfield": liverpool_tickets,
  //   "Old Trafford": manchester_united_tickets,
  //   "Tottenham Hotspur Stadium": tottenham_hotspur_tickets,
  //   "Craven Cottage": fulham_tickets,
  //   "The City Ground": nottingham_forest_tickets,
  //   "Molineux Stadium": wolverhampton_wanderers_tickets,
  //   "St. James' Park": newcastle_united_tickets,
  //   "Portman Road": ipswich_town_tickets,
  //   "Vitality Stadium": afc_bournemouth_tickets,
  //   "Selhurst Park": crystal_palace_tickets,
  //   "Emirates Stadium": arsenal_tickets,
  //   "Goodison Park": everton_tickets,
  //   "Etihad Stadium": manchester_city_tickets,
  //   "Stamford Bridge": chelsea_tickets,
  //   "Villa Park": aston_villa_tickets,
  //   "London Stadium": west_ham_united_tickets,
  //   "Gtech Community Stadium": brentford_tickets,
  //   "Turf Moor": burnley_tickets,
  //   "Elland Road": leeds_united_tickets,
  //   "Falmer Stadium": brighton_tickets,
  // };


  console.log(" state.eventId:", state.eventId)

  const { data } = useQuery(GET_TICKETS_BY_MATCH, {
    variables: { eventId: state.eventId, },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (data?.getTicketsByMatch.tickets) {
      console.log("getTicketsByMatch:", data?.getTicketsByMatch.tickets)
      setTickets(data?.getTicketsByMatch.tickets);
      applyFilters(tickets);
    }
  }, [filters, tickets, data]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolledPastHero={true} fixed={false} />
      <main className="flex-grow">
        {/* <TrustPilotRow /> */}

        <HeroSection
          {...{
            homeTeam: state.homeTeam,
            eventName: state.eventName,
            categoryName: state.categoryName,
            day: state.day,
            month: state.month,
            year: state.year,
            time: state.time,
            venue: state.venue,
            city: state.city,
            country: state.country,
            minPrice: state.minPrice,
          }}
        />

        {loading && <FullScreenLoader />}

        {/* Main Content */}
        <section className="py-8">
          <div className="ticket-container">
            {/* <Breadcrumbs titles={titles} links={links} /> */}

            {/* Ticket filters */}
            <Card className="bg-white p-2 rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                <div>
                  <h3 className="text-base  font-semibold mb-3">
                    How many tickets are you booking?
                  </h3>
                  <div className="flex">
                    <Button
                      variant={ticketQuantity === "ANY" ? "default" : "outline"}
                      className="rounded-l-md rounded-r-none border-r-0"
                      onClick={() => handleQuantityChange("ANY")}>
                      ANY
                    </Button>
                    <Button
                      variant={Array.isArray(ticketQuantity) && ticketQuantity.includes(1) ? "default" : "outline"}
                      className="rounded-none border-r-0"
                      onClick={() => handleQuantityChange([1])}
                    >
                      1
                    </Button>
                    <Button
                      variant={Array.isArray(ticketQuantity) && ticketQuantity.includes(2) ? "default" : "outline"}
                      className="rounded-none border-r-0"
                      onClick={() => handleQuantityChange([2])}
                    >
                      2
                    </Button>
                    <Button
                      variant={Array.isArray(ticketQuantity) && ticketQuantity.includes(3) ? "default" : "outline"}
                      className="rounded-none border-r-0"
                      onClick={() => handleQuantityChange([3])}
                    >
                      3
                    </Button>
                    <Button
                      variant={Array.isArray(ticketQuantity) && ticketQuantity.includes(4) ? "default" : "outline"}
                      className="rounded-none border-r-0"
                      onClick={() => handleQuantityChange([4])}
                    >
                      4
                    </Button>
                    <Button
                      variant={Array.isArray(ticketQuantity) && ticketQuantity.includes(5) ? "default" : "outline"}
                      className="rounded-r-md rounded-l-none"
                      onClick={() => handleQuantityChange([5])}>
                      5+
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col h-full">
                  <div className="mt-auto">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={seatedTogether}
                        onChange={() => handleSeatedTogether(!seatedTogether)}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ticket-red"></div>
                      <span className="ms-3 text-sm font-medium text-gray-700">
                        Stay together
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-medium mb-3">Price range</h3>

                  <Select value={priceRange} onValueChange={handlePriceRangeChange}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Select a price range" />
                    </SelectTrigger>
                    <SelectContent>
                      {PRIZE_RANGES.map(range => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>


                </div>

                {/* <div>
                  <h3 className="text-base font-medium mb-3">Location</h3>
                  <Select value={location} onValueChange={handleAreaChange}>
                    <SelectTrigger className="w-full bg-white text-black">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      {areaNames.map((name) => (
                        <SelectItem key={name} value={name}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div> */}

              </div>
            </Card>

            <div className="flex justify-between items-center mt-2">
              <div className="text-gray-600 text-sm">
                <span className="text-gray-800">
                  <strong>{filteredTickets.length} results</strong>
                </span>{" "}
                based on your search
              </div>
              <Button
                onClick={handleClearFilter}
                variant="outline"
                size="sm"
                className="text-gray-600 gap-2">
                <Filter size={16} />
                Clear all filters
              </Button>
            </div>

            {/* Available tickets section */}
            <div className="mt-2 border-b pb-4">
              <h2 className="text-xl font-semibold">Available Tickets</h2>
              <p className="text-gray-600 text-sm mt-0">
                Tickets are listed and priced by our trusted ticket partners
                competing with each other to deliver you the best seats and
                lowest prices. Find your seats, select the number of tickets,
                then click 'Buy Now' to proceed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              <div className="lg:col-span-5" >
                <div className="lg:col-span-5 max-h-[calc(145vh-100px)] overflow-y-auto pr-2 mt-8">


                  {loading ? (
                    <div className="text-center py-10">Loading tickets...</div>
                  ) : filteredTickets.length === 0 ? (
                    <div className="text-center text-muted-foreground py-10">
                      No tickets available for this match.
                    </div>
                  ) : (
                    <TicketList
                      eventName={state.eventName}
                      categoryName={state.categoryName}
                      date={`${state.day} ${state.month} ${state.year}`}
                      time={state.time}
                      venue={`${state.venue}, ${state.city}, ${state.country}`}
                      tickets={filteredTickets}
                      selectedSeat={selectedSeat}
                      areaNames={areaNames}
                      onTicketHover={(area, section) => handleTicketHover(area, section)}
                      onTicketSelect={handleTicketSelect}
                      selectedArea={selectedArea}
                      selectedSection={selectedSection}
                      seatedTogether={seatedTogether}
                    />
                  )}



                </div>
              </div>


              {/* Right Column - 2D Stadium View */}
              <div className="lg:col-span-7">
                <div className="sticky top-0">

                  <StadiumSection
                    venue={state.venue}
                    selectedArea={selectedSection}
                    onAreaClick={handleSectionClick}
                    availableTickets={filteredTickets}
                  />
                  {/* <MatchInfo /> */}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tickets;
