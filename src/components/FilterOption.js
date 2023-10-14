import React from 'react';

const FilterOption = ({ title, options, selectedOptions, onOptionClick }) => {
  return (
    <div className="flex flex-col ">
      <span className="text-divider text-xs">{title}:</span>
      <div className="flex flex-wrap text-xs gap-2 mt-2">
        {options.map((option) => (
          <div
            key={option}
            className={`px-4 py-1 border border-divider rounded-full cursor-pointer   
              ${selectedOptions?.includes(option) ? 'bg-primary text-white bg-black' : 'hover:bg-light-blue hover:border-primary hover-text-white text-white bg-gray-500'}
            `}
            onClick={() => onOptionClick(option.toLowerCase())}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterOption;
