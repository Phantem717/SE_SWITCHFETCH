import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import list from "./CategoryList.json";

const DropDownCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Enter Category");

  const toggleDropdown = () => {
    setIsOpen(prev => !prev); 
  };

  const handleOptionClick = (categoryName: React.SetStateAction<string>) => {
    setSelectedOption(categoryName); 
    setIsOpen(false); 
  };

  return (
    <div className={`z-10 border-2 box-border border-black rounded-lg w-7/12 h-8  ${isOpen ? 'rounded-bl-none rounded-br-none' : ''}`}>
      <button onClick={toggleDropdown} className='w-full h-full flex justify-between items-center px-4 z-10'>
        <span>{selectedOption}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      
      {isOpen && 
        <div className='z-10 border-b-2 border-l-2 border-r-2 box-border border-black  w-full bg-white '>
          {list.map((Category, index) => (
            <div key={index} className='z-10 cursor-pointer hover:bg-navbarColor mb-1' onClick={() => handleOptionClick(Category.Category)}>
              <h3>{Category.Category}</h3>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default DropDownCategory;
