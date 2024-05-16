import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';


const DropDownGender= () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Gender");

  const toggleDropdown = () => {
    setIsOpen(prev => !prev); 
  };

  const handleOptionClick = (gender: React.SetStateAction<string>) => {
    setSelectedOption(gender); 
    setIsOpen(false); 
  };
  const genderOptions = ["Male", "Female"];
  return (
    <div className={`border-2 box-border border-black rounded-lg w-7/12 h-8 z-0 ${isOpen ? 'rounded-bl-none rounded-br-none' : ''}`}>
      <button onClick={toggleDropdown} className='hover:rounded-lg hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2  hover:bg-blue-200  w-full h-full flex justify-between items-center px-4 z-0'>
        <span>{selectedOption}</span>
        {isOpen && <FontAwesomeIcon icon={faCaretUp} />

        }
        {!isOpen && <FontAwesomeIcon icon={faCaretDown} />


        }

      </button>
      
        
      {isOpen && 
        <div className='z-0 border-b-2 border-l-2 border-r-2 box-border border-black  w-full bg-white '>
          {genderOptions.map((gender, index) => (
            <div key={index} className='z-0 transition-all duration-300 cursor-pointer hover:bg-blue-200 m mb-1' onClick={() => handleOptionClick(gender)}>
              <h3>{gender}</h3>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default DropDownGender;
