import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import list from "./CategoryList.json";

const DropDownCategory = (onCategorySelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Enter Category");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev); 
  };

  const handleOptionClick = (categoryName: string) => {
    setSelectedOption(categoryName); 
    setIsOpen(false);
    onCategorySelect(categoryName); 
  };

  return (
    <div ref={menuRef} className={`relative bg-white z-20 border-2 box-border border-black rounded-lg w-7/12 h-8 ${isOpen ? 'rounded-bl-none rounded-br-none' : ''}`}>
      <button onClick={toggleDropdown} className='hover:rounded-lg hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:bg-blue-200 w-full h-full flex justify-between items-center px-4 z-10'>
        <span>{selectedOption}</span>
        {isOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
      </button>
      
      {isOpen && (
        <div className='absolute top-full left-0 right-0 z-20 border-b-2 border-l-2 border-r-2 box-border border-black bg-white'>
          {list.map((Category, index) => (
            <div key={index} className='transition-all duration-300 cursor-pointer hover:bg-blue-200 mb-1 z-20' onClick={() => handleOptionClick(Category.Category)}>
              <h3>{Category.Category}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownCategory;
