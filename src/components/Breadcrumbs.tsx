import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
    titles: string[];   // List of breadcrumb titles
    links: string[];    // List of links corresponding to titles
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ titles, links }) => {
    return (
        <div className="mt-6 lg:mt-10 font-light text-sm text-gray-500">
            <ul
                aria-label="breadcrumbs"
                className="flex flex-wrap items-center gap-x-3 uppercase"
            >
                {/* Loop through the titles and links */}
                {titles.map((title, index) => (
                    <li key={index}>
                        {index < titles.length - 1 ? (
                            <>
                                <Link
                                    to={links[index] || "#"} // Default to # if no link is provided
                                    className="whitespace-nowrap hover:underline"
                                >
                                    {title}
                                </Link>
                                <span className="pl-3 text-xl lg:text-2xl font-bold">▸</span>
                            </>
                        ) : (
                            <span className="whitespace-nowrap text-gray-700 font-medium">
                                {title}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
