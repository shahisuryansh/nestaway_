import React, { useState } from 'react';
import FilterOption from './FilterOption';

const SearchFilter = ({selectedTenantType,
    setSelectedTenantType ,
    selectedBudget ,
    setSelectedBudget}) => {
  

  const tenantTypeOptions = ['Boys', 'Girls', 'Family', 'Any'];
  const budgetOptions = [
    'Below 5K',
    '5K - 10K',
    '10K - 15K',
    '20K - 30K',
    'Above 30K',
  ];

  const handleTenantTypeClick = (option) => {
    setSelectedTenantType((prevSelected) => {
      if (prevSelected?.includes(option)) {
        return prevSelected.filter((item) => item !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  const handleBudgetClick = (option) => {
    setSelectedBudget((prevSelected) => {
      if (prevSelected?.includes(option)) {
        return prevSelected?.filter((item) => item !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  return (
    <div className="flex flex-col flex-1 gap-4 nt-10">
      <div className="flex flex-col flex-1">
        <span className="text-lg font-bold mb-2">Filters</span>
        <div className="flex flex-col p-4 border gap-4 border-border rounded-xl">
          <FilterOption
            title="Tenant Type"
            options={tenantTypeOptions}
            selectedOptions={selectedTenantType}
            onOptionClick={handleTenantTypeClick}
          />
          <div className="h-[1px] bg-divider opacity-20"></div>
          <FilterOption
            title="Budget"
            options={budgetOptions}
            selectedOptions={selectedBudget}
            onOptionClick={handleBudgetClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
