import React, { useEffect, useMemo, useState } from "react";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { convertTeamNameToSlug } from "../../lib/teamUtils";
import { CLUB_FANS } from "../../lib/constants";

interface HeroSectionProps {
    homeTeam: string;
    eventName: string;
    categoryName: string;
    day: number;
    month: string;
    year: number;
    time: string;
    venue: string;
    city: string;
    country: string;
    minPrice: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    homeTeam,
    eventName,
    categoryName,
    day,
    month,
    year,
    time,
    venue,
    city,
    country,
    minPrice,
}) => {

    console.log("home", homeTeam);
    const home_team_slug = convertTeamNameToSlug(homeTeam);
    const filename = CLUB_FANS[home_team_slug];

    useEffect(() => {
    }, [minPrice]);

    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="rounded-md shadow-md border-b overflow-hidden">
                    {/* Image at the top */}
                    <div className="h-[200px] relative">
                        <img
                            src={`/uploads/teamfans/${filename}`}
                            alt={`${homeTeam} fans`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white" />
                    </div>

                    {/* Content below image */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 p-4 gap-8">
                        {/* Match info - Left side */}
                        <div className="lg:col-span-3 space-y-6">
                            <div>
                                <h1 className="text-2xl font-semibold mt-1">{eventName}</h1>
                                <p className="text-sky-500 text-sm uppercase tracking-wider mt-2">
                                    {categoryName}
                                </p>

                                <div className="flex flex-col gap-2 mt-4">
                                    <div className="flex items-center text-gray-600">
                                        <Calendar
                                            size={18}
                                            className="mr-2 flex-shrink-0 text-gray-600"
                                        />
                                        <span className="text-sm text-gray-600">
                                            {day} {month} {year} {time}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <MapPin
                                            size={18}
                                            className="mr-2 flex-shrink-0 text-gray-600"
                                        />
                                        <span className="text-sm text-gray-600">
                                            {venue}, {city}, {country}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-m font-light">
                                {/* <span className="font-bold">Tickets</span> available from{" "}
                                <span className="font-bold">{minPrice}</span> */}
                            </p>
                        </div>

                        {/* Trust indicators - Right side */}
                        <div className="lg:col-span-2 flex flex-col justify-center space-y-4">
                            <div className="flex items-start">
                                <CheckCircle
                                    className="text-sky-500 mt-0.5 mr-3 flex-shrink-0"
                                    size={20}
                                />
                                <p className="text-gray-700 text-sm">
                                    Tickets provided by our Trusted partners
                                </p>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle
                                    className="text-sky-500 mt-0.5 mr-3 flex-shrink-0"
                                    size={20}
                                />
                                <p className="text-gray-700 text-sm">
                                    All our orders are 150% guaranteed
                                </p>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle
                                    className="text-sky-500 mt-0.5 mr-3 flex-shrink-0"
                                    size={20}
                                />
                                <p className="text-gray-700 text-sm">
                                    Seated together, unless stated otherwise
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

