import Image from "next/image";

interface LeagueCardProps {
    leagueName: string;
}

const LeagueCard: React.FC<LeagueCardProps> = ({ leagueName }) => {
    // Function to capitalize each word
    const capitalizeWords = (str: string) => {
        return str
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <div>
            <div className="bg-ltg-white rounded-lg border border-solid border-[rgba(238,238,238,1)] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)]">
                <div className="relative h-32 w-full rounded-tl-lg rounded-tr-lg md:h-36">
                    <img
                        src={`uploads/leaguefans/${leagueName}.webp`}
                        alt={leagueName}
                        className="w-full h-full rounded-tl-lg rounded-tr-lg object-cover"
                    />
                </div>
                <div className="w-full">
                    <div className="p-4 text-center lg:p-6">
                        <h1 className="font-dosis text-ltg-black text-2xl font-medium capitalize lg:text-[28px] lg:leading-[36px] pb-4">
                            {capitalizeWords(leagueName)} Tickets
                        </h1>
                        <div className="font-light max-lg:text-center text-justify text-gray-500">
                            The {capitalizeWords(leagueName)} is one of the most exciting football leagues in the world.
                            <strong>Tickets for the {capitalizeWords(leagueName)}</strong> are very popular. We've got the best tickets available for the 2024-2025 season. Grab this opportunity to watch the best league in the world live in action.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeagueCard;
