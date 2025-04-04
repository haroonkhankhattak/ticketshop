import { Check } from "lucide-react";



const TrustpilotRow = () => {

    return (
        <div className="w-full relative">

            {/* Trustpilot Rating */}
            <div className="bg-gray-100 border-b py-2 relative">

                <div className="ticket-container flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-2 md:mb-0">
                        <span className="text-lg font-semibold mr-2">Excellent</span>
                        <div className="flex text-green-500">
                            {"★★★★★".split("").map((star, i) => (
                                <span key={i}>{star}</span>
                            ))}
                        </div>
                        <span className="ml-2 text-sm">14,822 reviews on</span>
                        <img
                            src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-black.svg"
                            alt="Trustpilot"
                            className="h-5 ml-2"
                        />
                    </div>

                    <div className="flex items-center space-x-8">
                        <div className="flex items-center">
                            <Check size={18} className="text-green-500 mr-2" />
                            <span className="text-sm">
                                Serving Football Fans for +15 years
                            </span>
                        </div>
                        <div className="flex items-center">
                            <Check size={18} className="text-green-500 mr-2" />
                            <span className="text-sm">Over 1 Million Fans Served</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrustpilotRow;
