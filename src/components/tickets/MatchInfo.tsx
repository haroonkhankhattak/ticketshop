
import React from "react";
import { Calendar, Clock, MapPin, Flag } from "lucide-react";

const MatchInfo: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Match Information</h3>

            <div className="space-y-4 mb-4">
                <div className="flex items-center">
                    <Calendar size={16} className="text-green-600 mr-3" />
                    <span className="text-sm">14 April 2025</span>
                </div>

                <div className="flex items-center">
                    <Clock size={16} className="text-green-600 mr-3" />
                    <span className="text-sm">15:00 (UK Time)</span>
                </div>

                <div className="flex items-center">
                    <MapPin size={16} className="text-green-600 mr-3" />
                    <span className="text-sm">Anfield Stadium, Liverpool</span>
                </div>

                <div className="flex items-center">
                    <Flag size={16} className="text-green-600 mr-3" />
                    <span className="text-sm">Premier League</span>
                </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
                Liverpool take on West Ham United in this exciting Premier League clash.
                The Reds will be looking to secure another important victory at their
                home ground, Anfield, as they push for success in the league.
            </p>

            <p className="text-sm text-gray-600">
                Don't miss your chance to be part of the famous Anfield atmosphere.
                Secure your tickets now to watch Liverpool's stars in action against West Ham United.
            </p>
        </div>
    );
};

export default MatchInfo;