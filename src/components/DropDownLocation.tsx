import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
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
    <div className={`bg-white border-2 box-border border-black rounded-lg w-7/12 h-8 z-10 ${isOpen ? 'rounded-bl-none rounded-br-none' : ''}`}>
      <button onClick={toggleDropdown} className='hover:rounded-lg hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2  hover:bg-blue-200  w-full h-full flex justify-between items-center px-4 z-0'>
        <span>{selectedOption}</span>
        {isOpen && <FontAwesomeIcon icon={faCaretUp} />

        }
        {!isOpen && <FontAwesomeIcon icon={faCaretDown} />


        }
      </button>
      
      {isOpen && 
        <div className='z-10 border-b-2 border-l-2 border-r-2 box-border border-black  w-full bg-white '>
          {list.map((country, index) => (
            <div key={index} className='z-10 cursor-pointer transition-all duration-300  hover:bg-blue-200  mb-1' onClick={() => handleOptionClick(country.Country)}>
              <h3>{country.Country}</h3>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default DropDownLocation;
