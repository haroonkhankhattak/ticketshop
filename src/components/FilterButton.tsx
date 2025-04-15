import { useState } from "react";

export default function FilterButton() {
  const [selected, setSelected] = useState("All");

  const buttons = [
    { label: "All", short: "All" },
    { label: "Upcoming 30 days", short: "30 days" },
    { label: "Upcoming 7 days", short: "7 days" },
    { label: "Upcoming 3 days", short: "3 days" },
  ];

  return (
    <div className="flex items-center gap-1 sm:gap-4 border-b py-4">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          onClick={() => setSelected(btn.label)}
          aria-pressed={selected === btn.label}
          className={`w-full max-w-36 rounded-3xl py-3 px-0 text-center text-sm font-normal border-2 
            ${
              selected === btn.label
                ? "border-ticket-red text-ticket-red text-ltg-green"
                : "border-ltg-grey-2 text-ltg-black"
            } 
            bg-ltg-white`}>
          <span className="hidden sm:inline">{btn.label}</span>
          <span className="sm:hidden">{btn.short}</span>
        </button>
      ))}
    </div>
  );
}
