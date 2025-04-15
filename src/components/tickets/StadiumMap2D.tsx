import React from "react";

interface StadiumMap2DProps {
  selectedArea: string;
  selectedSection?: string;
  onSectionClick?: (section: string) => void;
}

const StadiumMap2D: React.FC<StadiumMap2DProps> = ({
  selectedArea,
  selectedSection,
  onSectionClick,
}) => {
  // Generate section data by stand
  const mainStandSections = [
    { id: "M1", x: 266, y: 873, width: 65, height: 40, color: "#D4A017" },
    { id: "M2", x: 338, y: 873, width: 65, height: 40, color: "#EDBF07" },
    { id: "M3", x: 410, y: 873, width: 65, height: 40, color: "#EDBF07" },
    { id: "M4", x: 482, y: 873, width: 65, height: 40, color: "#EDBF07" },
    { id: "M5", x: 556, y: 873, width: 65, height: 40, color: "#EDBF07" },
    { id: "M6", x: 628, y: 873, width: 65, height: 40, color: "#EDBF07" },
    { id: "M7", x: 700, y: 873, width: 65, height: 40, color: "#EDBF07" },
    { id: "M8", x: 773, y: 873, width: 65, height: 40, color: "#D4A017" },
    { id: "M9", x: 845, y: 873, width: 65, height: 40, color: "#D4A017" },

    // Lower level
    { id: "L1", x: 267, y: 786, width: 59, height: 45, color: "#4F94CD" },
    { id: "L2", x: 327, y: 786, width: 59, height: 45, color: "#4F94CD" },
    { id: "L3", x: 387, y: 786, width: 59, height: 45, color: "#4F94CD" },
    { id: "L4", x: 447, y: 786, width: 59, height: 45, color: "#4F94CD" },
    { id: "L5", x: 507, y: 786, width: 59, height: 45, color: "#4F94CD" },
    { id: "L6", x: 612, y: 786, width: 59, height: 45, color: "#4F94CD" },
    { id: "L7", x: 672, y: 786, width: 59, height: 45, color: "#4F94CD" },
    { id: "L8", x: 732, y: 786, width: 59, height: 45, color: "#4F94CD" },
    { id: "L9", x: 792, y: 786, width: 59, height: 45, color: "#4F94CD" },
    { id: "L10", x: 852, y: 786, width: 59, height: 45, color: "#4F94CD" },

    // Lower tier additional
    { id: "L11", x: 352, y: 818, width: 35, height: 30, color: "#87CEFA" },
    { id: "L12", x: 417, y: 818, width: 35, height: 30, color: "#87CEFA" },
    { id: "L13", x: 472, y: 818, width: 35, height: 30, color: "#87CEFA" },
    { id: "L14", x: 635, y: 818, width: 35, height: 30, color: "#87CEFA" },
    { id: "L15", x: 690, y: 818, width: 35, height: 30, color: "#87CEFA" },
    { id: "L16", x: 755, y: 818, width: 35, height: 30, color: "#87CEFA" },

    // Upper tier
    { id: "U1", x: 289, y: 943, width: 65, height: 45, color: "#A52A2A" },
    { id: "U2", x: 354, y: 943, width: 65, height: 45, color: "#A52A2A" },
    { id: "U3", x: 419, y: 943, width: 65, height: 45, color: "#A52A2A" },
    { id: "U4", x: 484, y: 943, width: 65, height: 45, color: "#A52A2A" },
    { id: "U5", x: 549, y: 943, width: 65, height: 45, color: "#A52A2A" },
    { id: "U6", x: 614, y: 943, width: 65, height: 45, color: "#A52A2A" },
    { id: "U7", x: 679, y: 943, width: 65, height: 45, color: "#A52A2A" },
    { id: "U8", x: 744, y: 943, width: 65, height: 45, color: "#A52A2A" },
    { id: "U9", x: 809, y: 943, width: 65, height: 45, color: "#A52A2A" },
  ];

  const kopSections = [
    { id: "102", x: 902, y: 707, width: 45, height: 45, color: "#3CB371" },
    { id: "103", x: 902, y: 658, width: 45, height: 45, color: "#3CB371" },
    { id: "104", x: 902, y: 609, width: 45, height: 45, color: "#3CB371" },
    { id: "105", x: 902, y: 560, width: 45, height: 45, color: "#3CB371" },
    { id: "106", x: 902, y: 511, width: 45, height: 45, color: "#3CB371" },
    { id: "107", x: 902, y: 462, width: 45, height: 45, color: "#3CB371" },
    { id: "108", x: 902, y: 413, width: 45, height: 45, color: "#3CB371" },
    { id: "109", x: 902, y: 364, width: 45, height: 45, color: "#3CB371" },

    { id: "202", x: 954, y: 727, width: 65, height: 65, color: "#2E8B57" },
    { id: "203", x: 954, y: 658, width: 65, height: 65, color: "#2E8B57" },
    { id: "204", x: 954, y: 589, width: 65, height: 65, color: "#2E8B57" },
    { id: "205", x: 954, y: 520, width: 65, height: 65, color: "#2E8B57" },
    { id: "206", x: 954, y: 451, width: 65, height: 65, color: "#2E8B57" },
    { id: "207", x: 954, y: 382, width: 65, height: 65, color: "#2E8B57" },
    { id: "208", x: 954, y: 313, width: 65, height: 65, color: "#2E8B57" },

    { id: "304", x: 1025, y: 609, width: 45, height: 45, color: "#2E8B57" },
    { id: "305", x: 1025, y: 560, width: 45, height: 45, color: "#2E8B57" },
    { id: "306", x: 1025, y: 511, width: 45, height: 45, color: "#2E8B57" },
  ];

  const anfieldRoadSections = [
    { id: "AU1", x: 118, y: 281, width: 65, height: 45, color: "#4B0082" },
    { id: "AU2", x: 118, y: 343, width: 65, height: 45, color: "#4B0082" },
    { id: "AU3", x: 118, y: 405, width: 65, height: 45, color: "#4B0082" },
    { id: "AU4", x: 118, y: 467, width: 65, height: 45, color: "#4B0082" },
    { id: "AU5", x: 118, y: 529, width: 65, height: 45, color: "#4B0082" },
    { id: "AU6", x: 118, y: 591, width: 65, height: 45, color: "#4B0082" },
    { id: "AU7", x: 118, y: 653, width: 65, height: 45, color: "#4B0082" },
    { id: "AU8", x: 118, y: 715, width: 65, height: 45, color: "#4B0082" },

    { id: "AM1", x: 173, y: 281, width: 35, height: 45, color: "#FFA500" },
    { id: "AM2", x: 173, y: 343, width: 35, height: 45, color: "#FFA500" },
    { id: "AM3", x: 173, y: 405, width: 35, height: 45, color: "#FFA500" },
    { id: "AM4", x: 173, y: 467, width: 35, height: 45, color: "#FFA500" },
    { id: "AM5", x: 173, y: 529, width: 35, height: 45, color: "#FFA500" },
    { id: "AM6", x: 173, y: 591, width: 35, height: 45, color: "#FFA500" },
    { id: "AM7", x: 173, y: 653, width: 35, height: 45, color: "#FFA500" },
    { id: "AM8", x: 173, y: 715, width: 35, height: 45, color: "#FFA500" },

    { id: "AL1", x: 218, y: 281, width: 55, height: 45, color: "#9ACD32" },
    { id: "AL2", x: 218, y: 343, width: 55, height: 45, color: "#9ACD32" },
    { id: "AL3", x: 218, y: 405, width: 55, height: 45, color: "#9ACD32" },
    { id: "AL4", x: 218, y: 467, width: 55, height: 45, color: "#9ACD32" },
    { id: "AL5", x: 218, y: 529, width: 55, height: 45, color: "#9ACD32" },
    { id: "AL6", x: 218, y: 591, width: 55, height: 45, color: "#9ACD32" },
    { id: "AL7", x: 218, y: 653, width: 55, height: 45, color: "#87CEEB" },
    { id: "AL8", x: 218, y: 715, width: 55, height: 45, color: "#87CEEB" },
    { id: "AL9", x: 218, y: 767, width: 55, height: 30, color: "#87CEEB" },
  ];

  const kennyDalglishSections = [
    { id: "CE1", x: 291, y: 161, width: 40, height: 45, color: "#A52A2A" },
    { id: "CE2", x: 344, y: 161, width: 65, height: 45, color: "#A52A2A" },
    { id: "CE3", x: 420, y: 161, width: 65, height: 45, color: "#A52A2A" },
    { id: "CE4", x: 494, y: 161, width: 65, height: 45, color: "#A52A2A" },
    { id: "CE5", x: 567, y: 161, width: 65, height: 45, color: "#A52A2A" },
    { id: "CE6", x: 638, y: 161, width: 65, height: 45, color: "#A52A2A" },
    { id: "CE7", x: 710, y: 161, width: 65, height: 45, color: "#A52A2A" },
    { id: "CE8", x: 784, y: 161, width: 65, height: 45, color: "#A52A2A" },
    { id: "CE9", x: 849, y: 161, width: 40, height: 45, color: "#A52A2A" },

    { id: "KG", x: 291, y: 258, width: 55, height: 45, color: "#4F94CD" },
    { id: "KH", x: 350, y: 258, width: 55, height: 45, color: "#4F94CD" },
    { id: "KI", x: 409, y: 258, width: 55, height: 45, color: "#4F94CD" },
    { id: "KJ", x: 468, y: 258, width: 55, height: 45, color: "#4F94CD" },
    { id: "KK", x: 527, y: 258, width: 55, height: 45, color: "#4F94CD" },
    { id: "KL", x: 586, y: 258, width: 55, height: 45, color: "#4F94CD" },
    { id: "KM", x: 645, y: 258, width: 55, height: 45, color: "#4F94CD" },
    { id: "KN", x: 704, y: 258, width: 55, height: 45, color: "#4F94CD" },
    { id: "KP", x: 763, y: 258, width: 55, height: 45, color: "#4F94CD" },
  ];

  // Combine all sections
  const allSections = [
    ...mainStandSections,
    ...kopSections,
    ...anfieldRoadSections,
    ...kennyDalglishSections,
  ];

  // Helper function to determine if a section is in the selected area
  const isInSelectedArea = (sectionId: string) => {
    // Map section IDs to their respective stands
    if (/^(M|L|U)/.test(sectionId)) return "main-stand";
    if (/^(CE|K)/.test(sectionId)) return "sir-kenny-dalglish";
    if (/^(A)/.test(sectionId)) return "anfield-road";
    if (/^([0-9])/.test(sectionId)) return "kop";
    return "";
  };

  // Handle section click
  const handleSectionClick = (sectionId: string) => {
    if (onSectionClick) {
      onSectionClick(sectionId);
    }
  };

  return (
    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      <svg
        viewBox="40 80 1100 1080"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg">
        {/* Stadium background */}
        <rect x="0" y="0" width="1100" height="1080" fill="#f5f5f5" />

        {/* Stand labels */}
        <text
          x="-160"
          y="480"
          fontWeight="bold"
          fontSize="20"
          transform="rotate(-90, 50, 450)">
          ANFIELD ROAD STAND
        </text>
        <text
          x="1080"
          y="400"
          fontWeight="bold"
          fontSize="20"
          transform="rotate(90, 1050, 450)">
          THE KOP
        </text>
        <text
          x="550"
          y="120"
          fontWeight="bold"
          fontSize="20"
          textAnchor="middle">
          KENNY DALGLISH STAND
        </text>
        <text
          x="550"
          y="1050"
          fontWeight="bold"
          fontSize="20"
          textAnchor="middle">
          MAIN STAND
        </text>

        {/* Pitch */}
        <rect
          x="350"
          y="380"
          width="460"
          height="330"
          fill="#aaaaaa"
          stroke="#ffffff"
          strokeWidth="3"
        />

        {/* Pitch markings */}
        <circle
          cx="580"
          cy="545"
          r="60"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
        />
        <line
          x1="580"
          y1="380"
          x2="580"
          y2="710"
          stroke="#ffffff"
          strokeWidth="3"
        />

        {/* Goal boxes */}
        <rect
          x="350"
          y="480"
          width="50"
          height="130"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
        />
        <rect
          x="760"
          y="480"
          width="50"
          height="130"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
        />

        {/* All sections */}
        {allSections.map((section) => {
          const inSelectedArea = isInSelectedArea(section.id) === selectedArea;
          const isSelected = section.id === selectedSection;

          return (
            <g key={section.id}>
              <rect
                x={section.x}
                y={section.y}
                width={section.width}
                height={section.height}
                fill={section.color}
                fillOpacity={isSelected ? 1 : inSelectedArea ? 0.8 : 0.4}
                stroke="#000000"
                strokeWidth={isSelected ? 2 : 1}
                className="transition-all duration-300 cursor-pointer hover:fill-opacity-100"
                onClick={() => handleSectionClick(section.id)}
              />
              <text
                x={section.x + section.width / 2}
                y={section.y + section.height / 2 + 5}
                fontSize="12"
                fontWeight={isSelected ? "bold" : "normal"}
                fill={isSelected ? "#ffffff" : "#000000"}
                textAnchor="middle"
                className="cursor-pointer select-none"
                onClick={() => handleSectionClick(section.id)}>
                {section.id}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="absolute bottom-4 left-4 bg-white/80 p-2 rounded text-sm">
        Click on a section to select it
      </div>
    </div>
  );
};

export default StadiumMap2D;
