import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import list from "./LocationList.json";

const DropDownLocation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Enter Location");

  const toggleDropdown = () => {
    setIsOpen(prev => !prev); 
  };

  const handleOptionClick = (countryName: React.SetStateAction<string>) => {
    setSelectedOption(countryName); 
    setIsOpen(false); 
  };

  return (
    <div className={`border-2 box-border border-black rounded-lg w-7/12 h-8 z-0 ${isOpen ? 'rounded-bl-none rounded-br-none' : ''}`}>
      <button onClick={toggleDropdown} className='w-full h-full flex justify-between items-center px-4 z-0'>
        <span>{selectedOption}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      
      {isOpen && 
        <div className='z-0 border-b-2 border-l-2 border-r-2 box-border border-black  w-full bg-white '>
          {list.map((country, index) => (
            <div key={index} className='z-0 cursor-pointer hover:bg-navbarColor mb-1' onClick={() => handleOptionClick(country.Country)}>
              <h3>{country.Country}</h3>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default DropDownLocation;
