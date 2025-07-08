import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    BadgeCheck,
    MapPin,
    Smartphone,
    Flag,
    CalendarDays,
    Info,
    ShieldCheck,
    Armchair,
    Eye,
    Section,
} from "lucide-react";

import { CLUB_FANS } from "../../lib/constants";
import { useCurrencyLanguage } from "../../lib/CurrencyLanguageContext";

interface CheckoutLayoutProps {
    eventName: string,
    categoryName: string,
    date: string,
    time: string,
    venue: string,
    ticketprice: number,
    quantity: number,
    ticketArea: string,
    ticketSection: string,
    seatedTogather: boolean;
}

const OrderSummary: React.FC<CheckoutLayoutProps> = ({
    eventName: eventName,
    categoryName: categoryName,
    date: date,
    time: time,
    venue: venue,
    ticketprice: ticketprice,
    quantity: quantity,
    ticketArea: ticketArea,
    ticketSection: ticketSection,
    seatedTogather: seatedTogather
}) => {

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

    const ticketPrice = Number((ticketprice * (exchangeRates[currencyKey] || 1)).toFixed(0));



    console.log("--------------->", eventName, categoryName, date, time, venue, ticketArea, ticketSection, ticketprice, quantity, seatedTogather);

    function getFirstTeam(eventName) {
        const teams = eventName.split(' vs '); // Split the string by ' vs '
        return teams[0]; // Return the first team
    }

    const homeTeam = getFirstTeam(eventName);
    const filename = CLUB_FANS[homeTeam];
    const markupPercentage = 0.3;
    const markupAmount = ticketPrice * markupPercentage; // 30
    const totalPrice = ticketPrice + markupAmount;       // 130

    const totalMarkup = (markupAmount * quantity).toFixed(0);
    const grandTotal = (totalPrice * quantity).toFixed(0);



    return (
        <Card className="border-none shadow-lg">
            <div className="relative h-40 w-full">
                <img
                    src={`/uploads/teamfans/${filename}`}
                    alt="Liverpool vs Tottenham match"
                    className="object-cover w-full h-full rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-lg" />
            </div>

            <CardContent className="p-6 space-y-6">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-sky-500/10 text-sky-500 text-xs font-medium rounded">
                            {categoryName}
                        </span>
                    </div>
                    <h2 className="text-xl font-semibold mt-2">
                        {eventName}
                    </h2>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-500">
                        <CalendarDays className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-thin">
                            {date}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-thin">
                            {venue}
                        </span>
                    </div>
                </div>

                <div className="space-y-3 bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-emerald-600">
                        <BadgeCheck className="h-4 w-4" />
                        <span className="text-sm font-medium">
                            150% Money Back Guarantee
                        </span>
                        <Info className="h-4 w-4 text-emerald-400 cursor-help" />
                    </div>

                    <div className="flex items-center gap-2 text-emerald-600">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="text-sm">Easy and secure payments</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 text-2xl">
                        <img
                            src="/uploads/icons/visa-pay.svg"
                            className="object-cover rounded-t-lg text-black"
                            width={32}
                            height={32}
                        />
                        <img
                            src="/uploads/icons/master-pay.svg"
                            className="object-cover rounded-t-lg text-black"
                            width={32}
                            height={32}
                        />
                        <img
                            src="/uploads/icons/apple-pay.svg"
                            className="object-cover rounded-t-lg text-black"
                            width={32}
                            height={32}
                        />
                        <img
                            src="/uploads/icons/google-pay.svg"
                            className="object-cover rounded-t-lg text-black"
                            width={32}
                            height={32}
                        />
                    </div>
                </div>

                <hr className="border-t-1 border-dashed border-gray-400" />

                <div className="space-y-1">
                    <div className="flex items-start gap-2 text-gray-500">
                        <Smartphone className="h-4 w-4 text-gray-500 mt-1" />

                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">E-Tickets</span>
                            <span className="text-sm font-thin">
                                Digital tickets (usually E-Ticket) will be sent to you digitaly.
                            </span>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 text-gray-500">
                        <Flag className="h-4 w-4 text-gray-500 mt-1" />

                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">Area / Section</span>
                            <span className="text-sm font-thin">{ticketArea}, {ticketSection}</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 text-gray-500">
                        <Armchair className="h-4 w-4 text-gray-500 mt-1" />

                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">Seats</span>

                            <span className="text-sm font-thin">
                                {seatedTogather
                                    ? "Seats will be next to each other."
                                    : "Seats will NOT be next to each other."}
                            </span>

                        </div>
                    </div>
                </div>

                <hr className="border-t-1 border-dashed border-gray-400" />

                <div className="space-y-1">
                    <div className="flex font-light justify-between text-gray-500">
                        <span>Price per ticket</span>
                        <span className="font-semibold">{symbol} {ticketPrice}</span>
                    </div>

                    <div className="flex font-light justify-between text-gray-500">
                        <span>Quantity</span>
                        <span className="font-semibold">{quantity}x</span>
                    </div>

                    <div className="flex font-light justify-between text-gray-500">
                        <span>Service Fee + Tax</span>
                        <span className="font-semibold">{symbol} {totalMarkup}</span>
                    </div>

                    <hr className="border-t-1 border-dashed border-gray-400" />

                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>{symbol} {grandTotal}</span>
                    </div>
                </div>

                <div className="w-100 h-20 border bg-white p-2 flex gap-0.5 justify-center items-end">
                    {Array.from({ length: 80 }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-full ${i % 3 === 0
                                ? "w-1 bg-ticket-darkgray"
                                : i % 2 === 0
                                    ? "w-0.5 bg-black"
                                    : "w-0.5 bg-gray-200"
                                }`}></div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default OrderSummary;
