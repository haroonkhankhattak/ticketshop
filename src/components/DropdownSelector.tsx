'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type DropdownProps = {
    label: string;
    options: string[];
    onChange: (value: string) => void;
};

export default function DropdownSelector({ label, options, onChange }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);

    const handleSelect = (option: string) => {
        setSelected(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-64">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 text-left flex justify-between items-center hover:border-blue-500 focus:outline-none"
            >
                <span>{selected}</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </button>

            {isOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto transition-all duration-150 ease-out">
                    {options.map((option, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
