import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = ({
  isScrolledPastHero,
  fixed,
}: {
  isScrolledPastHero: boolean;
  fixed: boolean;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [showCurrencySelector, setShowCurrencySelector] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 left-0 z-50 bg-white shadow-md ${
        fixed ? "fixed" : ""
      }`}>
      {/* Top Info Bar */}
      {!isScrolledPastHero && (
        <div className="w-full bg-white text-gray-700 py-2 text-sm border-b">
          <div className="ticket-container">
            <p className="text-center">{t("welcome")}</p>
          </div>
        </div>
      )}

      {/* Logo and Currency Selection */}
      <div className="bg-white py-3 border-b">
        <div className="ticket-container flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div>
              <span className="font-bold text-2xl">
                Foolball<span className="text-ticket-red">Tickets</span>Hub
              </span>
              <span className="text-xs text-gray-600 block tracking-tight">
                RELIABLE. SECURE. ENJOY THE MATCH
              </span>
            </div>
          </Link>

          {isScrolledPastHero && (
            <div className="w-full  max-w-2xl relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for team, match, stadium or city"
                className="w-full bg-gray-200 py-2 px-5 pr-12 rounded-md text-black text-lg focus:outline-none"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search size={24} />
              </button>
            </div>
          )}

          <div className="flex items-center gap-1">
            <Popover
              open={showCurrencySelector}
              onOpenChange={setShowCurrencySelector}>
              <PopoverTrigger asChild>
                <button className="flex items-center px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none">
                  <span className="mr-2">£</span>
                  <span>GBP</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-100 p-4" align="end">
                <div className="bg-ltg-white relative grid p-2 pb-2">
                  <h3 className="font-dosis border-b-ltg-grey-4 border-b pb-2 text-l font-medium">
                    Select your preferred currency
                  </h3>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-gbp"
                    type="button"
                    data-headlessui-state="open"
                    onClick={() => i18n.changeLanguage("en")}>
                    <div className="items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 16"
                        className="text-ltg-grey-2 h-5 w-8"
                        aria-hidden="true">
                        <text
                          x="50%"
                          y="50%"
                          font-size="1rem"
                          text-anchor="middle"
                          dominant-baseline="central"
                          fill="currentColor">
                          £
                        </text>
                      </svg>
                    </div>
                    <div>British Pound</div>
                  </button>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-usd"
                    type="button"
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 16"
                        className="text-ltg-grey-2 h-5 w-8"
                        aria-hidden="true">
                        <text
                          x="50%"
                          y="50%"
                          font-size="1rem"
                          text-anchor="middle"
                          dominant-baseline="central"
                          fill="currentColor">
                          $
                        </text>
                      </svg>
                    </div>
                    <div>US Dollar</div>
                  </button>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-eur"
                    type="button"
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 16"
                        className="text-ltg-grey-2 h-5 w-8"
                        aria-hidden="true">
                        <text
                          x="50%"
                          y="50%"
                          font-size="1rem"
                          text-anchor="middle"
                          dominant-baseline="central"
                          fill="currentColor">
                          €
                        </text>
                      </svg>
                    </div>
                    <div>Euro</div>
                  </button>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-aud"
                    type="button"
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 16"
                        className="text-ltg-grey-2 h-5 w-8"
                        aria-hidden="true">
                        <text
                          x="50%"
                          y="50%"
                          font-size="1rem"
                          text-anchor="middle"
                          dominant-baseline="central"
                          fill="currentColor">
                          $
                        </text>
                      </svg>
                    </div>
                    <div>Australian Dollar</div>
                  </button>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-cad"
                    type="button"
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 16"
                        className="text-ltg-grey-2 h-5 w-8"
                        aria-hidden="true">
                        <text
                          x="50%"
                          y="50%"
                          font-size="1rem"
                          text-anchor="middle"
                          dominant-baseline="central"
                          fill="currentColor">
                          $
                        </text>
                      </svg>
                    </div>
                    <div>Canadian Dollar</div>
                  </button>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-chf"
                    type="button"
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 16"
                        className="text-ltg-grey-2 h-5 w-8"
                        aria-hidden="true">
                        <text
                          x="50%"
                          y="50%"
                          font-size="1rem"
                          text-anchor="middle"
                          dominant-baseline="central"
                          fill="currentColor">
                          ₣
                        </text>
                      </svg>
                    </div>
                    <div>Swiss Franc</div>
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            <Popover
              open={showLanguageSelector}
              onOpenChange={setShowLanguageSelector}>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 rounded-r-full border border-gray-300 border-l-0 focus:outline-none">
                  <span className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_0_12494)">
                        <circle
                          cx="8"
                          cy="8"
                          r="8"
                          fill="white"
                          fill-opacity="0.1"></circle>
                        <circle cx="12" cy="12" r="12" fill="#227FBB"></circle>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.21863 18.9531L9.1717 12L2.21863 5.04693C2.997 3.95389 3.95401 2.99688 5.04706 2.21851L12.0001 9.17157L18.9532 2.21851C20.0462 2.99688 21.0032 3.95389 21.7816 5.04693L14.8286 12L21.7816 18.9531C21.0032 20.0461 20.0462 21.0031 18.9532 21.7815L12.0001 14.8284L5.04706 21.7815C3.95401 21.0031 2.99701 20.0461 2.21863 18.9531Z"
                          fill="white"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.52008 4.64134L10.2321 12.3534L11.2928 11.2927L3.51459 3.51452C3.16029 3.86882 2.82804 4.24517 2.52008 4.64134ZM19.3583 2.52002L11.6463 10.232L12.707 11.2927L20.4851 3.51452C20.1309 3.16023 19.7545 2.82798 19.3583 2.52002ZM21.4797 19.3583L13.7676 11.6463L12.707 12.7069L20.4851 20.4851C20.8394 20.1308 21.1717 19.7544 21.4797 19.3583ZM4.6414 21.4796L12.3534 13.7676L11.2928 12.7069L3.51459 20.4851C3.86888 20.8394 4.24523 21.1716 4.6414 21.4796Z"
                          fill="#E94B35"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 0.378052C14.0411 0.131259 13.0359 0 12 0C10.9641 0 9.95886 0.131259 9 0.378052V9H0.378052C0.131259 9.95886 0 10.9641 0 12C0 13.0359 0.131259 14.0411 0.378052 15H9V23.6219C9.95886 23.8687 10.9641 24 12 24C13.0359 24 14.0411 23.8687 15 23.6219V15H23.6219C23.8687 14.0411 24 13.0359 24 12C24 10.9641 23.8687 9.95886 23.6219 9H15V0.378052Z"
                          fill="white"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14 0.165917C13.3496 0.0567976 12.6814 0 12 0C11.3186 0 10.6504 0.0567976 10 0.165917V10H0.165917C0.0567976 10.6504 0 11.3186 0 12C0 12.6814 0.0567976 13.3496 0.165917 14H10V23.8341C10.6504 23.9432 11.3186 24 12 24C12.6814 24 13.3496 23.9432 14 23.8341V14H23.8341C23.9432 13.3496 24 12.6814 24 12C24 11.3186 23.9432 10.6504 23.8341 10H14V0.165917Z"
                          fill="#E94B35"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_0_12494">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div>EN-GB</div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-100 p-0" align="end">
                <div className="bg-ltg-white relative grid p-4 pb-4">
                  <h3 className="font-dosis border-b-ltg-grey-4 border-b pb-4 text-l font-medium">
                    Select your preferred language
                  </h3>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-en-GB"
                    type="button"
                    onClick={() => i18n.changeLanguage("en")}
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_0_12494)">
                          <circle
                            cx="8"
                            cy="8"
                            r="8"
                            fill="white"
                            fill-opacity="0.1"></circle>
                          <circle
                            cx="12"
                            cy="12"
                            r="12"
                            fill="#227FBB"></circle>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.21863 18.9531L9.1717 12L2.21863 5.04693C2.997 3.95389 3.95401 2.99688 5.04706 2.21851L12.0001 9.17157L18.9532 2.21851C20.0462 2.99688 21.0032 3.95389 21.7816 5.04693L14.8286 12L21.7816 18.9531C21.0032 20.0461 20.0462 21.0031 18.9532 21.7815L12.0001 14.8284L5.04706 21.7815C3.95401 21.0031 2.99701 20.0461 2.21863 18.9531Z"
                            fill="white"></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.52008 4.64134L10.2321 12.3534L11.2928 11.2927L3.51459 3.51452C3.16029 3.86882 2.82804 4.24517 2.52008 4.64134ZM19.3583 2.52002L11.6463 10.232L12.707 11.2927L20.4851 3.51452C20.1309 3.16023 19.7545 2.82798 19.3583 2.52002ZM21.4797 19.3583L13.7676 11.6463L12.707 12.7069L20.4851 20.4851C20.8394 20.1308 21.1717 19.7544 21.4797 19.3583ZM4.6414 21.4796L12.3534 13.7676L11.2928 12.7069L3.51459 20.4851C3.86888 20.8394 4.24523 21.1716 4.6414 21.4796Z"
                            fill="#E94B35"></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15 0.378052C14.0411 0.131259 13.0359 0 12 0C10.9641 0 9.95886 0.131259 9 0.378052V9H0.378052C0.131259 9.95886 0 10.9641 0 12C0 13.0359 0.131259 14.0411 0.378052 15H9V23.6219C9.95886 23.8687 10.9641 24 12 24C13.0359 24 14.0411 23.8687 15 23.6219V15H23.6219C23.8687 14.0411 24 13.0359 24 12C24 10.9641 23.8687 9.95886 23.6219 9H15V0.378052Z"
                            fill="white"></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14 0.165917C13.3496 0.0567976 12.6814 0 12 0C11.3186 0 10.6504 0.0567976 10 0.165917V10H0.165917C0.0567976 10.6504 0 11.3186 0 12C0 12.6814 0.0567976 13.3496 0.165917 14H10V23.8341C10.6504 23.9432 11.3186 24 12 24C12.6814 24 13.3496 23.9432 14 23.8341V14H23.8341C23.9432 13.3496 24 12.6814 24 12C24 11.3186 23.9432 10.6504 23.8341 10H14V0.165917Z"
                            fill="#E94B35"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_0_12494">
                            <rect width="24" height="24" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>English</div>
                  </button>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-nl"
                    type="button"
                    onClick={() => i18n.changeLanguage("nl")}
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.3173 15.9995C23.7594 14.7485 24 13.4022 24 11.9998C24 10.5971 23.7593 9.25071 23.3171 7.99951H0.68292C0.240652 9.25071 0 10.5971 0 11.9998C0 13.4022 0.240582 14.7485 0.682725 15.9995H23.3173Z"
                          fill="#F4F4F4"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.3172 16C21.6698 20.6607 17.2249 23.9999 12 23.9999C6.7752 23.9999 2.33027 20.6607 0.682892 16H23.3172Z"
                          fill="#227FBB"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 0C6.7751 0 2.33015 3.33923 0.6828 8H23.3172C21.6698 3.33923 17.2249 0 12 0Z"
                          fill="#E94B35"></path>
                      </svg>
                    </div>
                    <div>Dutch</div>
                  </button>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-es"
                    type="button"
                    onClick={() => i18n.changeLanguage("es")}
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 8H24C22.3526 3.33923 17.9076 0 12.6827 0C7.45785 0 3.0129 3.33923 1.36554 8Z"
                          fill="#C60B1E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 16H24C22.3526 20.6608 17.9076 24 12.6827 24C7.45785 24 3.0129 20.6608 1.36554 16Z"
                          fill="#FFC400"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 8H24V16H0V8Z"
                          fill="#C60B1E"
                        />
                      </svg>
                    </div>
                    <div>Spanish</div>
                  </button>

                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-de"
                    type="button"
                    onClick={() => i18n.changeLanguage("de")}
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.3172 8H0.6828C2.33015 3.33923 6.7751 0 12 0C17.2249 0 21.6698 3.33923 23.3172 8Z"
                          fill="black"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.3173 15.9995C23.7594 14.7485 24 13.4022 24 11.9998C24 10.5971 23.7593 9.25071 23.3171 7.99951H0.68292C0.240652 9.25071 0 10.5971 0 11.9998C0 13.4022 0.240582 14.7485 0.682725 15.9995H23.3173Z"
                          fill="#E94B35"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.3172 16C21.6698 20.6607 17.2249 23.9999 12 23.9999C6.7752 23.9999 2.33027 20.6607 0.682892 16H23.3172Z"
                          fill="#F2C500"></path>
                      </svg>
                    </div>
                    <div>German</div>
                  </button>
                  <button
                    className="border-b-ltg-grey-4 hover:bg-ltg-grey-4 flex items-center gap-5 border-b px-2 py-4 transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-opacity-100"
                    data-testid="menu-item-fr"
                    type="button"
                    onClick={() => i18n.changeLanguage("fr")}
                    data-headlessui-state="open">
                    <div className="items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 23.317C3.33923 21.6696 0 17.2247 0 11.9998C0 6.77492 3.33923 2.32996 8 0.682617V23.317Z"
                          fill="#227FBB"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.9997 0.68279V23.3172C14.7486 23.7594 13.4023 24 11.9998 24C10.5972 24 9.25084 23.7594 7.99969 23.3171V0.682856C9.25084 0.240629 10.5972 0 11.9998 0C13.4023 0 14.7486 0.240605 15.9997 0.68279Z"
                          fill="white"></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M24 11.9805V12.0191C23.9918 17.2356 20.655 21.6717 16 23.317V0.682617C20.655 2.32793 23.9918 6.76395 24 11.9805Z"
                          fill="#E94B35"></path>
                      </svg>
                    </div>
                    <div>French</div>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-black text-white">
        <div className="ticket-container">
          <nav className="flex justify-between">
            <div className="flex">
              <Link
                to="/"
                className="navbar-link px-0 font-bold py-4 whitespace-nowrap">
                HOME
              </Link>

              <div className="relative group">
                {/* --- Trigger Link --- */}
                <Link
                  to="/premier-league"
                  className="navbar-link px-8 font-bold py-4 flex items-center whitespace-nowrap">
                  PREMIER LEAGUE
                  <ChevronDown size={18} className="ml-1" />
                </Link>

                {/* --- Full Width Dropdown Directly Below the Link --- */}
                {/* <div className="absolute left-0 top-full w-screen bg-white shadow-xl transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-in-out z-50"> */}
                <div className="fixed left-0 w-screen bg-black shadow-xl transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-in-out z-40">
                  <div className="max-w-screen-md mx-auto px-6 py-8 flex flex-col space-y-4">
                    <a
                      href="/matches?team=Liverpool&league=Premier League"
                      className="text-lg text-white hover:text-gray-500 transition-colors">
                      Liverpool
                    </a>
                    <a
                      href="/matches?team=Chelsea&league=Premier League"
                      className="text-lg text-white hover:text-gray-500 transition-colors">
                      Chelsea
                    </a>
                    <a
                      href="/matches?team=Manchester United&league=Premier League"
                      className="text-lg text-white hover:text-gray-500 transition-colors">
                      Manchester United
                    </a>
                    <a
                      href="/matches?team=Arsenal&league=Premier League"
                      className="text-lg text-white hover:text-gray-500 transition-colors">
                      Arsenal
                    </a>
                    <a
                      href="/league?league=Premier League"
                      className="text-lg text-white hover:text-gray-500 transition-colors">
                      View All
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <Link
                  to="/premier-league"
                  className="navbar-link px-8 font-bold py-4 flex items-center whitespace-nowrap">
                  PREMIER LEAGUE
                  <ChevronDown size={18} className="ml-1" />
                </Link>
                <div className="bg-ltg-white border-b-ltg-grey-4 shadow-ltg-grey-2 absolute z-10 hidden space-y-2 rounded-b-md px-4 py-2 shadow-lg group-hover:block bg-white min-w-[200px]">
                  {/* <div className="bg-ltg-white border-b-ltg-grey-4 shadow-ltg-grey-2 absolute z-10 hidden space-y-2 rounded-b-md px-4 py-2 shadow-lg group-hover:block"> */}
                  <a
                    href="/matches?team=Liverpool&league=Premier League"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Liverpool
                  </a>

                  <a
                    href="/matches?team=Chelsea&league=Premier League"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Chelsea
                  </a>

                  <a
                    href="/matches?team=Manchester United&league=Premier League"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Manchester United
                  </a>

                  <a
                    href="/matches?team=Arsenal&league=Premier League"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Arsenal
                  </a>

                  <a
                    href="/league?league=Premier League"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    View All
                  </a>
                </div>
              </div>

              <div className="group relative">
                <Link
                  to="/english-cups"
                  className="navbar-link px-4 font-bold py-4 flex items-center whitespace-nowrap">
                  ENGLISH CUPS
                  <ChevronDown size={18} className="ml-1" />
                </Link>

                <div className="bg-ltg-white border-b-ltg-grey-4 shadow-ltg-grey-2 absolute z-10 hidden space-y-2 rounded-b-md px-4 py-2 shadow-lg group-hover:block bg-white min-w-[200px]">
                  <a
                    href="/competition/fa-cup.html"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    FA Cup
                  </a>

                  <a
                    href="/competition/efl-cup.html"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    EFL Cup
                  </a>

                  <a
                    href="/competition/community-sheild.html"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Community Sheild
                  </a>

                  <a
                    href="/competition/championship-play-off-final.html"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Championship Play Off Final
                  </a>
                </div>
              </div>

              <div className="group relative">
                <Link
                  to="/european-cups"
                  className="navbar-link px-4 font-bold py-4 flex items-center whitespace-nowrap">
                  EUROPEAN CUPS
                  <ChevronDown size={18} className="ml-1" />
                </Link>

                {/* <div className="absolute hidden group-hover:block bg-white shadow-lg z-50 min-w-[200px]">
                  <Link
                    to="/competition/champions-league"
                    className="navbar-dropdown block w-full text-left text-sm"
                  >
                    Champions League
                  </Link>
                  <Link
                    to="/competition/europa-league"
                    className="navbar-dropdown block w-full text-left text-sm"
                  >
                    Europa League
                  </Link>
                </div> */}

                <div className="bg-ltg-white border-b-ltg-grey-4 shadow-ltg-grey-2 absolute z-10 hidden space-y-2 rounded-b-md px-4 py-2 shadow-lg group-hover:block bg-white min-w-[200px]">
                  <a
                    href="/competition/champions-league.html"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Champions League
                  </a>

                  <a
                    href="/competition/europa-league.html"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Europa League
                  </a>

                  <a
                    href="/competition/super-cup.html"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Super Cup
                  </a>

                  <a
                    href="/competition/conference-league.html"
                    className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">
                    Conference League
                  </a>
                </div>
              </div>

              {/* <div className="group relative">
                <Link
                  to="/international"
                  className="navbar-link px-4 py-4 font-bold flex items-center whitespace-nowrap"
                >
                  INTERNATIONAL
                  <ChevronDown size={18} className="ml-1" />
                </Link>

                <div className="bg-ltg-white border-b-ltg-grey-4 shadow-ltg-grey-2 absolute z-10 hidden space-y-2 rounded-b-md px-4 py-2 shadow-lg group-hover:block bg-white min-w-[200px]">

                  <a href="/competition/world-cup-2026.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">World Cup 2026</a>

                  <a href="/competition/euro-cup-2028.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Euro Cup 2028</a>

                  <a href="/competition/nations-league.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Nations League</a>

                  <a href="/competition/copa-america.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Copa America</a>

                </div>
              </div>

              <div className="group relative">
                <Link
                  to="/other-competitions"
                  className="navbar-link font-bold px-4 py-4 flex items-center whitespace-nowrap"
                >
                  OTHER COMPETITIONS
                  <ChevronDown size={18} className="ml-1" />
                </Link>
                <div className="bg-ltg-white border-b-ltg-grey-4 shadow-ltg-grey-2 absolute z-10 hidden space-y-2 rounded-b-md px-4 py-2 shadow-lg group-hover:block bg-white min-w-[200px]">

                  <a href="/english-championship-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">English Championship</a><a href="/la-liga-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Spanish La Liga</a><a href="/segunda-division-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Spanish Segunda Division</a><a href="/spl-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Scottish Premier League</a><a href="/bundesliga-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">German Bundesliga</a><a href="/serie-a-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Italian Serie A</a><a href="/eredivisie-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Dutch Eredivisie</a><a href="/ligue-1-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">French Ligue 1</a><a href="/portuguese-liga-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Portuguese Liga</a><a href="/mls-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">MLS USA</a><a href="/friendly-matches-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">Friendly Matches</a><a href="/nfl-london-tickets.html" className="border-b-ltg-grey-4 block min-w-[250px] border-b-2 py-3 text-left text-base text-black last:border-b-0 hover:text-opacity-50">NFL London</a></div>
              </div> */}
            </div>

            <Link
              to="/track"
              className="navbar-link px-4 py-4 flex items-center whitespace-nowrap">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.2859 4.15912C15.6826 4.13044 16 3.78624 16 3.3273V1.7497C16 0.774457 15.286 0 14.3868 0H1.61322C0.71405 0 0 0.774457 0 1.7497V3.35598C0 3.78624 0.317355 4.15912 0.71405 4.18781C1.45455 4.27386 2.00992 4.96226 2.00992 5.79409C2.00992 6.62591 1.45455 7.31432 0.71405 7.37169C0.317355 7.40037 0 7.77326 0 8.20351V9.78111C0 10.7563 0.71405 11.5308 1.61322 11.5308H14.3868C15.286 11.5308 16 10.7563 16 9.78111V8.20351C16 7.77326 15.6826 7.40037 15.2859 7.37169C14.5455 7.28563 13.9901 6.59723 13.9901 5.7654C13.9901 4.9049 14.5455 4.21649 15.2859 4.15912ZM14.8099 8.5764V9.78111C14.8099 10.0393 14.6248 10.24 14.3868 10.24H7.90744V8.69113C7.90744 8.34693 7.64297 8.03141 7.29917 8.03141C6.95537 8.03141 6.69091 8.31824 6.69091 8.69113V10.24H1.61322C1.37521 10.24 1.19008 10.0393 1.19008 9.78111V8.63376C2.35372 8.34693 3.2 7.19958 3.2 5.82277C3.2 4.47464 2.35372 3.29861 1.19008 2.98309V1.7497C1.19008 1.49155 1.37521 1.29076 1.61322 1.29076H6.71736V2.83968C6.71736 3.18388 6.98182 3.4994 7.32562 3.4994C7.66942 3.4994 7.93388 3.21256 7.93388 2.83968V1.29076H14.3868C14.6248 1.29076 14.8099 1.49155 14.8099 1.7497V2.92573C13.6463 3.24125 12.8 4.38859 12.8 5.7654C12.8 7.11353 13.6463 8.26088 14.8099 8.5764Z"
                  fill="#fff"></path>
                <path
                  d="M7.32567 4.38867C7.00832 4.38867 6.71741 4.67551 6.71741 5.04839V6.51126C6.71741 6.85546 6.98187 7.17098 7.32567 7.17098C7.66947 7.17098 7.93394 6.88414 7.93394 6.51126V5.04839C7.90749 4.67551 7.64303 4.38867 7.32567 4.38867Z"
                  fill="#fff"></path>
              </svg>
              <div>&nbsp; Track your tickets</div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
