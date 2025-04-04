import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, CreditCard, CheckCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const MatchTeam = () => {
    const [searchParams] = useSearchParams();
    const team = searchParams.get("team");
    const league = searchParams.get("league");
    return (
        <section className="py-8 bg-white">
            <div className="ticket-container">
                <div className="mt-6 lg:mt-14 font-light text-sm text-gray-500">
                    <ul
                        aria-label="breadcrumbs"
                        className="text-ltg-grey-1 font-roboto flex flex-wrap items-center gap-x-3 uppercase"
                    >
                        <li>
                            <a href="/" data-testid="breadcrumb" className="whitespace-nowrap hover:underline">
                                Home
                            </a>
                            <span className="pl-3 text-xl lg:text-2xl font-bold">▸</span>
                        </li>
                        <li>
                            <a
                                href="/league?league=Premier League"
                                data-testid="breadcrumb"
                                className="whitespace-nowrap hover:underline"
                            >
                                {league}
                            </a>
                            <span className="pl-3 text-xl lg:text-2xl font-bold">▸</span>
                        </li>
                        <li>
                            <a
                                href="/english-premiership/liverpool-tickets.html"
                                data-testid="breadcrumb"
                                className="whitespace-nowrap hover:underline"
                            >
                                {team}
                            </a>
                            <span className="pl-3 text-xl lg:text-2xl font-bold"></span>

                        </li>
                    </ul>
                </div>
            </div>
        </section>

    );
};

export default MatchTeam;
