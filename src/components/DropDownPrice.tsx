import React, { useEffect, useState, useRef } from "react";
const opt = ["None","Lowest","Highest"]

const DropDownPrice = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
  
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
      setIsOpen((prev) => !prev);
    };
    const handleOptionClick = (gender: React.SetStateAction<string>) => {
      setSelectedOption(gender); 
      setIsOpen(false); 
    };
  return (
    <div ref={menuRef}>
    <button className='font-medium flex bg-white border-2 border-black w-44 h-10 justify-center items-center ml-auto' onClick={toggleDropdown}>{selectedOption}</button>
    {isOpen && 
<div className='bg-white w-44 rounded-md  absolute text-black box-border border-2 border-gray-200 cursor-pointer'>
{opt.map((option, index) => (
<div key={index} className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300' onClick={() => handleOptionClick(option)}>
<h2>{option}</h2>
</div>
))}
</div>
}
   
   {/* <div className='bg-white w-44 rounded-md  absolute text-black box-border border-2 border-gray-200 '>

<ul className='flex justify-center flex-col items-center text-sm cursor-pointer'>
<div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '> <li >{opt[0]}</li> </div>
<div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md hover:bg-blue-600  hover:text-white transition-all duration-300 '>  <li>{opt[1]}</li> </div>
<div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '>    <li >{opt[2]}</li> </div>
<div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '>    <li >{opt[3]}</li> </div>


</ul>
</div> */}


</div>
  )
}

export default DropDownPrice