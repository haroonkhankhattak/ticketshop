import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomDropdown from "@/components/DropdownSelector";
import { DevicePhoneMobileIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import { Apple, Armchair, Baby, BadgeMinus, Ban, EyeOff, FileWarning, User, UserMinus, Users } from "lucide-react";
import { TicketIcon } from "lucide-react";
import { QrCode, Smartphone, Handshake, Tag, ShieldCheck, Eye, UserCheck, ParkingCircle } from "lucide-react"

import { Minus, Plus } from "lucide-react";
import { count } from "console";
import { useCurrencyLanguage } from "../lib/CurrencyLanguageContext";
import { Ticket } from "../types/ticket";


const attributesList = [
    {
        label: "E-ticket",
        icon: QrCode,
        color: "bg-blue-100 text-blue-800",
    },
    {
        label: "Mobile Ticket",
        icon: Smartphone,
        color: "bg-indigo-100 text-indigo-800",
    },
    {
        label: "Hardcopy",
        icon: Tag,
        color: "bg-yellow-100 text-yellow-800",
    },
    {
        label: "Unrestricted View",
        icon: Eye,
        color: "bg-green-100 text-green-800",
    },
    {
        label: "Home Area",
        icon: ShieldCheck,
        color: "bg-sky-100 text-sky-800",
    },
    {
        label: "Away Fans Allowed",
        icon: ShieldCheck,
        color: "bg-red-100 text-red-800",
    },
    {
        label: "Neutral Fans Allowed",
        icon: Eye,
        color: "bg-purple-100 text-purple-800",
    },
    {
        label: "VIP Entry",
        icon: UserCheck,
        color: "bg-green-100 text-green-800",
    },
    {
        label: "Premium Hospitality",
        icon: Handshake,
        color: "bg-amber-100 text-amber-800",
    },
    {
        label: "Parking Included",
        icon: ParkingCircle,
        color: "bg-gray-100 text-gray-800",
    },
]

export const restrictionsList = [
    {
        label: "Restricted View",
        icon: Eye,
        color: "bg-yellow-100 text-yellow-800",
    },
    {
        label: "Severely Restricted View",
        icon: EyeOff,
        color: "bg-yellow-200 text-yellow-900",
    },
    {
        label: "Passport Copy Required",
        icon: FileWarning,
        color: "bg-rose-100 text-rose-700",
    },
    {
        label: "No Hospitality Included",
        icon: BadgeMinus,
        color: "bg-red-100 text-red-700",
    },
    {
        label: "No Away Team Nationals",
        icon: Ban,
        color: "bg-orange-100 text-orange-700",
    },
    {
        label: "Standing Section",
        icon: Users,
        color: "bg-yellow-100 text-yellow-800",
    },
    {
        label: "Unreserved Seating",
        icon: Users,
        color: "bg-yellow-100 text-yellow-800",
    },
    {
        label: "iPhone Users Only",
        icon: Apple,
        color: "bg-green-100 text-green-800",
    },
    {
        label: "Android Users Only",
        icon: Smartphone,
        color: "bg-green-100 text-green-800",
    },
    {
        label: "Junior Ticket",
        icon: Baby,
        color: "bg-blue-100 text-blue-800",
    },
    {
        label: "Junior Ticket (Under 20yrs)",
        icon: Baby,
        color: "bg-blue-100 text-blue-800",
    },
    {
        label: "Junior Ticket (Under 18yrs)",
        icon: Baby,
        color: "bg-blue-100 text-blue-800",
    },
    {
        label: "Junior Ticket (Under 17yrs)",
        icon: Baby,
        color: "bg-blue-100 text-blue-800",
    },
    {
        label: "Junior Ticket (18-21yrs)",
        icon: Baby,
        color: "bg-blue-100 text-blue-800",
    },
    {
        label: "Junior Ticket (18-20yrs)",
        icon: Baby,
        color: "bg-blue-100 text-blue-800",
    },
    {
        label: "Young Adult Ticket (17-21yrs)",
        icon: User,
        color: "bg-indigo-100 text-indigo-800",
    },
    {
        label: "Young Adult Ticket (17-18yrs)",
        icon: User,
        color: "bg-indigo-100 text-indigo-800",
    },
    {
        label: "Adult + Junior (Under 21yrs)",
        icon: Users,
        color: "bg-pink-100 text-pink-700",
    },
    {
        label: "Adult + Junior (Under 20yrs)",
        icon: Users,
        color: "bg-pink-100 text-pink-700",
    },
    {
        label: "Adult + Junior (Under 18yrs)",
        icon: Users,
        color: "bg-pink-100 text-pink-700",
    },
    {
        label: "Adult + Junior (Under 17yrs)",
        icon: Users,
        color: "bg-pink-100 text-pink-700",
    },
    {
        label: "Adult + Junior (Under 16yrs)",
        icon: Users,
        color: "bg-pink-100 text-pink-700",
    },
    {
        label: "Adult + Junior (Under 11yrs)",
        icon: Users,
        color: "bg-pink-100 text-pink-700",
    },
    {
        label: "Adult + Junior",
        icon: Users,
        color: "bg-pink-100 text-pink-700",
    },
    {
        label: "Adult + Senior",
        icon: Users,
        color: "bg-pink-100 text-pink-700",
    },
    {
        label: "Senior Ticket",
        icon: UserMinus,
        color: "bg-pink-100 text-pink-700",
    },
];

const otherShippingOptions = [
    { id: 2, name: "Secure Delivery (Country of Event)", rate: 6.5 },
    { id: 4, name: "Hotel Delivery (Event City)", rate: 6.5 },
    { id: 6, name: "Bike Courier (Central London)", rate: 20 },
    { id: 9, name: "Bike Courier (London Heathrow)", rate: 50 },
    { id: 14, name: "UK Special Delivery Mon-Fri Pre-1pm", rate: 7.5 },
    { id: 15, name: "UK Special Delivery Mon-Fri Pre-9am", rate: 22.5 },
    { id: 16, name: "UK Special Delivery (Residential) Sat Pre-1pm", rate: 22.5 },
    { id: 17, name: "UK Special Delivery (Residential) Sat Pre-9am", rate: 27.5 },
    { id: 21, name: "TNT International (Central Europe)", rate: 40 },
    { id: 25, name: "DHL Delivery (EU)", rate: 35 },
    { id: 26, name: "DHL Delivery (Non-EU)", rate: 50 },
    { id: 29, name: "UPS/Fedex Delivery", rate: 20 },
];

interface TicketListProps {
    eventName: string;
    categoryName: string;
    date: string;
    time: string;
    venue: string;
    tickets: Ticket[];
    selectedSeat: string | null;
    areaNames: string[];
    onTicketHover: (area: string, section?: string) => void;
    onTicketSelect: (id: string) => void;
    selectedArea: string;
    selectedSection: string;
    seatedTogether: boolean;
}

const TicketList: React.FC<TicketListProps> = ({
    eventName,
    categoryName,
    date,
    time,
    venue,
    tickets,
    selectedSeat,
    areaNames,
    onTicketHover,
    onTicketSelect,
    selectedArea,
    selectedSection,
    seatedTogether,
}) => {


    // Filter tickets to show only those in the selected area or all if none selected
    let displayTickets = selectedArea
        ? tickets.filter((ticket) => ticket.section_stand_name === selectedArea)
        : tickets;

    displayTickets = selectedSection
        ? tickets.filter((ticket) => ticket.section_id === selectedSection)
        : tickets;

    const maxLimit = 10;

    const [ticketCount, setTicketCount] = useState<{ [key: string]: number }>({});

    const increment = (id: string, max: number) => {
        setTicketCount((prev) => {
            const current = prev[id] || 1;
            if (current >= max) return prev; // Do not exceed availability
            return { ...prev, [id]: current + 1 };
        });
    };


    const decrement = (id: string) => {
        setTicketCount((prev) => {
            const current = prev[id] || 1;
            if (current <= 1) return prev; // min limit
            return { ...prev, [id]: current - 1 };
        });
    };

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

    const exchangeRates: Record<string, number> = {
        usd: 1.25,
        eur: 1.15,
        chf: 1.10,
        sek: 13.00,
        nok: 13.50,
        dkk: 8.50,
        gbp: 1,
    };



    return (
        <div className="bg-white rounded-lg">
            <div className="mb-6">
                <div className="space-y-4">
                    {displayTickets.map((ticket) => (
                        <div
                            key={ticket.id}
                            className={`relative bg-white rounded-lg p-4 group ticket-red shadow border cursor-pointer transition-colors  ${selectedSeat === ticket.section_name ? " bg-green-500" : ""
                                }`}
                            onMouseEnter={() => onTicketHover(ticket.section_stand_name, ticket.section_name)}
                            onMouseLeave={() => onTicketHover(selectedArea)}
                            onClick={() => onTicketSelect(ticket.id)}>
                            {/* Counter top right */}
                            <div className="absolute top-2 right-2 z-10">
                                <div className="flex items-center p-1 gap-1 rounded-sm bg-white">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            decrement(ticket.id);
                                        }}
                                        className="bg-gray-100 hover:bg-ticket-red hover:text-white transition-colors p-2 rounded-full">
                                        <Minus className="w-3 h-3" />
                                    </button>

                                    <div className="flex flex-col items-center px-1">
                                        <span className="text-lg font-medium text-center min-w-[1.5rem]">
                                            {ticketCount[ticket.id] || 1} &nbsp;
                                            <span className="text-xs font-light text-center whitespace-nowrapn">
                                                Ticket{(ticketCount[ticket.id] || 1) > 1 ? "s" : ""}
                                            </span>
                                        </span>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            increment(ticket.id, ticket.availability); // Pass max limit
                                        }}
                                        className="bg-gray-100 hover:bg-ticket-red hover:text-white transition-colors p-2 rounded-full"
                                    >
                                        <Plus className="w-3 h-3" />
                                    </button>

                                </div>
                            </div>

                            {/* Header */}
                            <header className="">
                                <h3 className="text-gray-800 mb-2 text-base font-semibold group-hover:text-ticket-red ">
                                    <span>{areaNames[ticket.section_stand_name]}</span>
                                    <span className="block text-sm  text-gray-500 ml-1 group-hover:text-black">
                                        {ticket.section_stand_name} {ticket.section_name}
                                    </span>
                                </h3>
                            </header>

                            <ul className="flex flex-wrap gap-0 text-xs mb-2">
                                <li>
                                    <span className="bg-gray-100 border border-gray-300 text-gray-600 rounded-md px-2 py-1 inline-flex items-center gap-1">
                                        <Armchair className="w-3 h-3" />
                                        {ticket.togather_upto === "1"
                                            ? "Single Seat"
                                            : ticket.togather_upto === "2"
                                                ? "Up to 2 Together"
                                                : ticket.togather_upto === "3"
                                                    ? "Up to 3 Together"
                                                    : ticket.togather_upto === "4"
                                                        ? "Up to 4 Together"
                                                        : ticket.togather_upto === "5"
                                                            ? "Connecting Seats"
                                                            : ticket.togather_upto === "6"
                                                                ? "All Together"
                                                                : null}
                                    </span>
                                </li>
                            </ul>




                            {/* Display attributes */}
                            <div className="flex flex-wrap gap-2 pb-2 border-b mb-2">

                                {ticket.attributes && ticket.attributes.map((attr, index) => {
                                    const found = attributesList.find((item) => item.label === attr);
                                    const Icon = found?.icon;

                                    return (
                                        <span
                                            key={index}
                                            className={`rounded-md px-2 py-1 inline-flex items-center gap-1 text-xs border ${found?.color || "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {Icon && <Icon className="w-3 h-3" />}
                                            {attr}
                                        </span>
                                    );
                                })}
                            </div>


                            {/* Display restrictions */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {ticket.restrictions && ticket.restrictions.map((attr, index) => {
                                    const found = restrictionsList.find((item) => item.label === attr);
                                    const Icon = found?.icon;

                                    return (
                                        <span
                                            key={index}
                                            className={`rounded-md px-2 py-1 inline-flex items-center gap-1 text-xs border ${found?.color || "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {Icon && <Icon className="w-3 h-3" />}
                                            {attr}
                                        </span>
                                    );
                                })}
                            </div>


                            {/* Tags */}
                            <ul className="flex flex-wrap gap-2 text-xs mb-3">
                                {/* ... your tags ... */}
                            </ul>

                            {/* Bottom Row */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center justify-between gap-4 mb-2">
                                    {/* Availability Text */}
                                    <div className="text-sm text-gray-500">
                                        {ticket.availability} ticket{(ticket.availability || 1) > 1 ? "s" : ""} available
                                    </div>

                                    {/* Sell As Badge */}
                                    {/* <ul className="flex flex-wrap gap-0 text-xs">
                                        <li>
                                            <span className="bg-gray-100 border border-gray-300 text-gray-600 rounded-md px-2 py-1 inline-flex items-center gap-1">
                                                {ticket.sell_as === "1"
                                                    ? "Full Set"
                                                    : ticket.sell_as === "2"
                                                        ? "Pairs"
                                                        : ticket.sell_as === "3"
                                                            ? "Singles"
                                                            : ticket.sell_as === "4"
                                                                ? "Avoid Leaving One"
                                                                : "Not Selected"}
                                            </span>
                                        </li>
                                    </ul> */}
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="text-lg font-semibold text-black">
                                        {/* £{ticket.price}{" "} */}
                                        {symbol} {(ticket.price * (exchangeRates[currencyKey] || 1)).toFixed(0)}
                                        <span className="font-thin text-sm text-gray-500">
                                            / Ticket
                                        </span>
                                    </div>
                                    <Link to={`/checkout`} className="block"
                                        state={{
                                            eventName: eventName,
                                            categoryName: categoryName,
                                            date: date,
                                            time: time,
                                            venue: venue,
                                            ticketprice: ticket.price,
                                            quantity: ticketCount[ticket.id] || 1,
                                            ticketArea: areaNames[ticket.section_stand_name],
                                            ticketSection: ticket.section_name,
                                            seatedTogether: seatedTogether,
                                        }}
                                    >
                                        <button className="px-4 py-2 bg-ticket-primarycolor text-white text-sm rounded-full group-hover:bg-ticket-red transition-colors">
                                            Buy Now
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TicketList;
