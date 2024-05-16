import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
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
    <div className={`z-20 border-2 box-border border-black rounded-lg w-7/12 h-8  ${isOpen ? 'rounded-bl-none rounded-br-none' : ''}`}>
      <button onClick={toggleDropdown} className='hover:rounded-lg hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2  hover:bg-blue-200  w-full h-full flex justify-between items-center px-4 z-10'>
        <span>{selectedOption}</span>
        {isOpen && <FontAwesomeIcon icon={faCaretUp} />

        }
        {!isOpen && <FontAwesomeIcon icon={faCaretDown} />


        }
      </button>
      
      {isOpen && 
        <div className='z-20 border-b-2 border-l-2 border-r-2 box-border border-black  w-full bg-white '>
          {list.map((Category, index) => (
            <div key={index} className='transition-all duration-300 cursor-pointer hover:bg-blue-200 mb-1z-20 ' onClick={() => handleOptionClick(Category.Category)}>
              <h3>{Category.Category}</h3>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default DropDownCategory;
