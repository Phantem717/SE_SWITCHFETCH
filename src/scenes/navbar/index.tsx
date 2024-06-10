import React, { useEffect, useState, useRef } from "react";
import Search from "@/components/SearchBar";
import logo from "@/assets/Logo.png";
import profilePic from "@/assets/Elige Al Gaib.png";
import DropDownProf from "@/components/DropDownProf";
import { profile } from "console";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between ";
  const flexCent = "flex items-center justify-center";
  const [DDProf, setDDProf] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setDDProf(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDDProf((prev) => !prev);
  };
  const userData = JSON.parse(localStorage.getItem('account'));
  return (
    <nav className="sticky top-0 z-50">
      <div className={`${flexBetween} h-20 w-full py-6 bg-gradient-to-r from-navGrad1 to-navGrad2 text-white`}>
        <img src={logo} alt="logo" className={`${flexBetween} ml-4 w-14`} />
        <div className={`${flexBetween} mr-52 font-semibold`}>SwiftFetch</div>
        <div className={`${flexBetween} w-9/12`}>
          <div className={`${flexCent} w-8/12 gap-16 font-semibold`}>
            <div className={`hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-200 hover:text-black transition-all duration-300 hover:w-max`}>
              <a href="./Home">Home</a>
            </div>
            <div className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200 hover:text-black transition-all duration-300`}>
              <a href="./cart">Cart</a>
            </div>
            <div className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200 hover:text-black transition-all duration-300`}>
              <a href="./search">Product</a>
            </div>
            <div className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200 hover:text-black transition-all duration-300`}>
              <a href="./history">History</a>
            </div>
            <div>
              {userData['is_seller'] == 1 && (
                  <div className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200 hover:text-black transition-all duration-300`}>
                    <a href="./seller">Seller</a>
                  </div>
              )}
            </div>
          </div>
          <div>

          </div>
          <div className="flex justify-end ml-0 items-center">
          <div className="mr-4 text-lg">
         
              <p>{userData['name']}</p>
          </div>
          <div className="flex justify-end mr-4 transition-all duration-300" ref={menuRef}>
            <img
              src={userData['image']}
              alt="Profile"
              className="rounded-CircleProfPic w-12 h-12 before:ml-4 cursor-pointer"
              onClick={toggleDropdown}
            />
            {DDProf && <DropDownProf/>}
          
          </div>
          </div>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
