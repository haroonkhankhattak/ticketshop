import React from "react";

interface LeagueTicketsProps {
    league: string;
}

const LeagueTickets: React.FC<LeagueTicketsProps> = ({ league }) => {
    return (
        <section className="py-8 bg-white">
            <div className="ticket-container">
                <div>
                    <h1 className="font-dosis text-ltg-black capitalize text-xl font-medium lg:text-xl">
                        ⚽ Buy 2024-2025 {league} tickets securely online
                    </h1>
                    <hr className="my-4" />
                    <div className="text-sm font-light text-black mb-2 text-justify">
                        <p>
                            Since the inception of the FA Premiership, the Premier League has been largely dominated by three clubs—Manchester United, Arsenal, and Chelsea. In recent years, Manchester City has also emerged as a major force. Manchester United holds the record for the most Premier League titles. Other teams that have claimed the Barclays Premier League title during United’s reign include Blackburn Rovers, Arsenal, Liverpool, and Chelsea.
                        </p>


                        <div className="py-4 pb-4">
                            <h2 className="font-dosis text-ltg-black capitalize text-xl font-medium lg:text-xl">

                                How to buy {league} tickets?</h2>
                            <div className="py-2">
                                <p>
                                    BarrysFootballTickets.com offers a secure platform with real-time inventory for Premier League tickets, including match-day seats at various price points. Buy affordable or hard-to-get tickets for the Premier League, FA Cup, and top clubs like Liverpool, Manchester City, Manchester United, Tottenham, Arsenal, and Chelsea. Experience the excitement of live football—book your tickets now!
                                </p>
                            </div>
                            <div className="py-2">
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Select the match you want to attend and click 'View Tickets'.</li>
                                    <li>Select the area you would like to sit within the stadium on the right-hand side.</li>
                                    <li>Select the number of tickets you would like to purchase.</li>
                                    <li>Click on the green 'Buy' button.</li>
                                    <li>Complete the order form using your personal details.</li>
                                    <li>Don't forget to check all your information is correct.</li>
                                    <li>Click 'Make Payment'.</li>
                                    <li>The tickets are now yours!</li>
                                </ol>
                            </div>


                        </div>

                        <div className="py-4 pb-4">
                            <h2 className="font-dosis text-ltg-black capitalize text-xl font-medium lg:text-xl">
                                {league} Tickets</h2>
                            <div className="py-2">
                                <p>
                                    The English Premier League boasts a passionate fan base supporting its 20 top clubs. Giants like Manchester United, Chelsea, Arsenal, Liverpool, Manchester City, and Tottenham dominate the league. Secure your tickets now at LiveFootballTickets.com for the best seats. We ensure a smooth booking process and timely ticket delivery for every match.
                                </p>
                            </div>
                        </div>


                        <div className="py-4 pb-4">
                            <h2 className="font-dosis text-ltg-black capitalize text-xl font-medium lg:text-xl">
                                2024-2025 important {league} fixtures</h2>
                            <div className="py-2">
                                <table className="border-b w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className="text-xs font-semibold border-b py-2">Date</th>
                                            <th className="text-xs font-semibold border-b py-2">Home Team</th>
                                            <th className="text-xs font-semibold border-b py-2">Away Team</th>
                                            <th className="text-xs font-semibold border-b py-2">Tickets</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { date: "Saturday 09 November 2024", home: "Chelsea", away: "Arsenal" },
                                            { date: "Saturday 23 November 2024", home: "Man City", away: "Spurs" },
                                            { date: "Saturday 30 November 2024", home: "Liverpool", away: "Man City" },
                                            { date: "Tuesday 3 December 2024", home: "Arsenal", away: "Man United" },
                                            { date: "Saturday 07 December 2024", home: "Spurs", away: "Chelsea" },
                                            { date: "Saturday 14 December 2024", home: "Man City", away: "Man Utd" },
                                            { date: "Saturday 21 December 2024", home: "Spurs", away: "Liverpool" },
                                            { date: "Tuesday 03 December 2024", home: "Arsenal", away: "Man Utd" },
                                            { date: "Tuesday 14 January 2025", home: "Arsenal", away: "Spurs" },
                                            { date: "Saturday 04 January 2025", home: "Liverpool", away: "Man Utd" },
                                            { date: "Saturday 25 January 2025", home: "Man City", away: "Chelsea" },
                                            { date: "Saturday 1 February 2025", home: "Arsenal", away: "Man City" },
                                            { date: "Saturday 15 February 2025", home: "Spurs", away: "Man Utd" },
                                            { date: "Saturday 22 February 2025", home: "Man City", away: "Liverpool" },
                                            { date: "Tuesday 25 February 2025", home: "Spurs", away: "Man City" },
                                            { date: "Saturday 08 March 2025", home: "Man Utd", away: "Arsenal" },
                                            { date: "Saturday 15 March 2025", home: "Arsenal", away: "Chelsea" },
                                            { date: "Wednesday 02 April 2025", home: "Chelsea", away: "Spurs" },
                                            { date: "Saturday 05 April 2025", home: "Man Utd", away: "Man City" },
                                            { date: "Saturday 26 April 2025", home: "Liverpool", away: "Spurs" },
                                            { date: "Saturday 03 May 2025", home: "Chelsea", away: "Liverpool" },
                                            { date: "Saturday 10 May 2025", home: "Liverpool", away: "Arsenal" },
                                            { date: "Sunday 18 May 2025", home: "Chelsea", away: "Man Utd" },
                                        ].map((match, index) => (
                                            <tr key={index}>
                                                <td className=" text-xs font-light border-b py-2">{match.date}</td>
                                                <td className=" text-xs font-light border-b py-2">{match.home}</td>
                                                <td className=" text-xs font-light border-b py-2">{match.away}</td>
                                                <td className=" text-xs font-light border-b py-2">
                                                    <a href="#" className="text-gray-500 underline hover:underline">Find your tickets</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>


                        <div className="py-4 pb-4">
                            <h2 className="font-dosis text-ltg-black capitalize text-xl font-medium lg:text-xl">
                                {league} wins and trophies</h2>
                            <div className="py-2">
                                <p>
                                    Defending England Premiership holders are Manchester City. Man Utd have won 20 English league trophies, the most of any side in the history of the first division league, while FC Liverpool has earned 19 Barclays Premiership titles. Other teams that have won the Premiership are Blackburn Rovers, Arsenal, Liverpool and Chelsea. Cheap and premium football tickets for the Barclays Premier League are available to buy now at LiveFootballTickets.com. In the table below you will find the clubs who have won the trophy since the start of the Premier League in 1992.                                </p>
                            </div>
                            <div className="py-2">
                                <table className="border-b w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className="text-xs font-semibold border-b py-2">Team</th>
                                            <th className="text-xs font-semibold border-b py-2">No. Titles</th>
                                            <th className="text-xs font-semibold border-b py-2">Year(s) of Title</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { team: "Manchester United", titles: 13, years: "1993, 1994, 1996, 1999, 2000, 2001, 2003, 2006, 2008, 2009, 2011, 2013" },
                                            { team: "Manchester City", titles: 8, years: "2012, 2014, 2018, 2019, 2021, 2022, 2023, 2024" },
                                            { team: "Chelsea", titles: 5, years: "2005, 2006, 2010, 2015, 2017" },
                                            { team: "Arsenal", titles: 3, years: "1998, 2002, 2004" },
                                            { team: "Blackburn Rovers", titles: 1, years: "1995" },
                                            { team: "Leicester City", titles: 1, years: "2016" },
                                            { team: "Liverpool", titles: 1, years: "2020" },
                                        ].map((team, index) => (
                                            <tr key={index}>
                                                <td className="text-xs font-light border-b py-2">{team.team}</td>
                                                <td className="text-xs font-light border-b py-2">{team.titles}</td>
                                                <td className="text-xs font-light border-b py-2">{team.years}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>


                        <div className="py-4 pb-4">
                            <h2 className="font-dosis text-ltg-black capitalize text-xl font-medium lg:text-xl">
                                Biggest tournaments in 2024-25 season</h2>
                            <div className="py-2">
                                <p>
                                    The 2024-2025 season is going to be a special one, since the Champions League enters a new phase. We've got loads of tickets for huge events during this entire season including FA Cup final tickets, Champions League final tickets, Europa League final tickets and Conference League final tickets amongst others via our booking system.

                                </p>
                            </div>

                            <div className="py-2">
                                <p>
                                    Take note that finals are not including in the cup ranges. The price of football tickets depends on supply and demand, the location in the stadium and other factors.
                                </p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>

    );
};

export default LeagueTickets;
