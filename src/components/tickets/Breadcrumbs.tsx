
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
    return (
        <div className="mt-6 lg:mt-10 font-light text-sm text-gray-500">
            <ul
                aria-label="breadcrumbs"
                className="flex flex-wrap items-center gap-x-3 uppercase"
            >
                <li>
                    <Link to="/" className="whitespace-nowrap hover:underline">
                        Home
                    </Link>
                    <span className="pl-3 text-xl lg:text-2xl font-bold">▸</span>
                </li>
                <li>
                    <Link
                        to="/league?league=Premier League"
                        className="whitespace-nowrap hover:underline"
                    >
                        Premier League
                    </Link>
                    <span className="pl-3 text-xl lg:text-2xl font-bold">▸</span>
                </li>
                <li>
                    <span className="whitespace-nowrap text-gray-700 font-medium">
                        Liverpool vs West Ham United
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;