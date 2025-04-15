import React from 'react';
import Image from 'next/image';
import { BadgeCheck, MapPin, CalendarDays, Info } from 'lucide-react';

const OrderSummary = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm border">
            <div className="relative h-48 w-full">
                <img
                    src="public/lovable-uploads/c1782ddb-1000-470d-ad24-932d5053caa7.png"
                    alt="Liverpool vs Tottenham match"
                    className="object-cover w-full h-full rounded-t-lg"
                />
            </div>

            <div className="p-6 space-y-4">
                <div>
                    <span className="text-sm font-medium text-gray-500">ENGLISH PREMIER LEAGUE</span>
                    <h2 className="text-xl font-bold">Liverpool vs Tottenham Hotspur</h2>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <CalendarDays className="h-4 w-4" />
                    <span className="text-sm">Sunday, 27th April 2025 16:30</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Anfield Road, Liverpool, United Kingdom</span>
                </div>

                <div className="flex items-center gap-2 text-emerald-600">
                    <BadgeCheck className="h-4 w-4" />
                    <span className="text-sm">150% Money Back Guarantee</span>
                    <Info className="h-4 w-4 text-gray-400" />
                </div>

                <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between mb-2">
                        <span>Price per ticket</span>
                        <span className="font-semibold">£369.00</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>Service Fee + Tax</span>
                        <span className="font-semibold">£110.70</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>£959.40</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;