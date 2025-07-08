import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Mail, CreditCard, CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ticket-primarycolor text-white pt-12 pb-6">
      <div className="ticket-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Information */}
          <div>
            <span className="font-bold text-xl mb-4 py-4">
              Foolball<span className="text-ticket-red">Tickets</span>Hub
            </span>
            <p className="text-sm opacity-80 mb-4">
              The world's leading football ticket marketplace, serving fans
              since 2006 with 100% guaranteed authentic tickets.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white opacity-80 hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Categories</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/league/premier-league"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  Premier League Tickets
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/la-liga"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  La Liga Tickets
                </Link>
              </li>
              <li>
                <Link
                  to="/champions-league"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  Champions League Tickets
                </Link>
              </li>
              <li>
                <Link
                  to="/series-a"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  Serie A Tickets
                </Link>
              </li>
              <li>
                <Link
                  to="/bundesliga"
                  className="opacity-80 hover:opacity-100 hover:text-ticket-red transition-colors">
                  Bundesliga Tickets
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <PhoneCall size={16} className="mr-3 mt-1 text-ticket-red" />
                <span className="opacity-80">
                  +44 800 123 4567
                  <br />
                  Mon-Fri, 9am-6pm (GMT)
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={16} className="mr-3 mt-1 text-ticket-red" />
                <span className="opacity-80">
                  contact@footballticketshub.com
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-medium mb-2">Secure Payments</h5>
              <div className="flex space-x-2">
                <img
                  src="/uploads/icons/apple-pay.svg"
                  alt="Apple Pay"
                  width={32}
                  height={32}
                />
                <img
                  src="/../../uploads/icons/apple-pay.svg"
                  alt="Apple Pay"
                  className="text-white"
                  width={32}
                  height={32}
                />
                <CreditCard size={32} className="text-white" />
                <CreditCard size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/20">
          <div className="flex items-center mb-4 md:mb-0">
            <CheckCircle size={20} className="text-ticket-red mr-2" />
            <span className="text-sm">
              SSL Secured | 100% Ticket Guarantee | Worldwide Shipping
            </span>
          </div>
          <div className="text-sm opacity-70">
            © 2023 FootballTicketsHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
