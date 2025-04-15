
import React from "react";
import { Phone, Mail, Clock, ShieldCheck, CreditCard } from "lucide-react";

const SupportInfo: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold mb-4">Need Help?</h3>

            <div className="flex items-center mb-3">
                <Phone size={16} className="text-green-600 mr-2" />
                <span className="text-sm">+44 123 456 7890</span>
            </div>

            <div className="flex items-center mb-3">
                <Mail size={16} className="text-green-600 mr-2" />
                <span className="text-sm">support@livefootballtickets.com</span>
            </div>

            <div className="flex items-center mb-3">
                <Clock size={16} className="text-green-600 mr-2" />
                <span className="text-sm">Mon-Fri: 9am-6pm</span>
            </div>

            <div className="mt-6 pt-4 border-t">
                <h4 className="font-medium mb-2">Our Guarantees</h4>

                <div className="flex items-start mb-3">
                    <ShieldCheck size={16} className="text-green-600 mt-1 mr-2" />
                    <span className="text-sm">100% Ticket Authenticity Guarantee</span>
                </div>

                <div className="flex items-start mb-3">
                    <CreditCard size={16} className="text-green-600 mt-1 mr-2" />
                    <span className="text-sm">Secure payment via major credit cards</span>
                </div>
            </div>
        </div>
    );
};

export default SupportInfo;