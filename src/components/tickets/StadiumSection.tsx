import React, { useState } from "react";
import StadiumMap2D from "./StadiumMap2D";

interface StadiumSectionProps {
  selectedArea: string;
  onAreaClick: (area: string) => void;
  areaNames: Record<string, string>;
}

const StadiumSection: React.FC<StadiumSectionProps> = ({
  selectedArea,
  onAreaClick,
  areaNames,
}) => {
  const [selectedSection, setSelectedSection] = useState<string | undefined>(
    undefined
  );

  // Build the list of areas
  const stadiumAreas = [
    { id: "main-stand", color: "bg-red-500" },
    { id: "kop", color: "bg-orange-500" },
    { id: "sir-kenny-dalglish", color: "bg-green-500" },
    { id: "anfield-road", color: "bg-blue-500" },
  ];

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId);
    console.log(`Selected section: ${sectionId}`);

    // Determine the area of the clicked section and update it
    if (/^(M|L|U)/.test(sectionId)) onAreaClick("main-stand");
    else if (/^(CE|K)/.test(sectionId)) onAreaClick("sir-kenny-dalglish");
    else if (/^(A)/.test(sectionId)) onAreaClick("anfield-road");
    else if (/^([0-9])/.test(sectionId)) onAreaClick("kop");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Stadium Map</h3>

      <div className="h-[600px] mb-6">
        <StadiumMap2D
          selectedArea={selectedArea}
          selectedSection={selectedSection}
          onSectionClick={handleSectionClick}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stadiumAreas.map((area) => (
          <button
            key={area.id}
            className={`p-1 rounded-lg transition-colors ${
              selectedArea === area.id
                ? `${area.color} text-white font-medium`
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => {
              onAreaClick(area.id);
              setSelectedSection(undefined);
            }}>
            {areaNames[area.id]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StadiumSection;
