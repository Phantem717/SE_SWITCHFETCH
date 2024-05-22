import { useState } from "react";
import Search from "@/components/searchBar";
import logo from "@/assets/Logo.png";
import profilePic from "@/assets/Elige Al Gaib.png";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between ";
  const flexCent = "flex items-center justify-center";

  return <nav className="sticky top-0 z-50">
      <div
        className={`${flexBetween}  h-20 w-full py-6 bg-gradient-to-r from-navGrad1 to-navGrad2 text-white`}
      >
        <img src={logo} alt="" className={`${flexBetween} ml-4 w-14`}/>
          <div className={`${flexBetween} mr-52 font-bold`}>SwiftFetch</div>
          {/* <div className={`${flexBetween} `}>
            <Search />
          </div> */}
        <div 
        className={`${flexBetween} w-9/12`}
        >
          <div className={`${flexCent} w-8/12 gap-16 font-semibold ` }>
              <div className={`hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300 hover:w-max `} >
                <a href="./" >Home</a>
              </div>
              {/* <div className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300`}>
                <a href="" >Search</a>
              </div> */}
              <div className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300`}>
                <a href="./search" >Product</a>
              </div>
              <div className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300`}>
                <a href="./history" >History</a>
              </div>
          </div>
          <div className={`${flexBetween} ml-24`}>
            <p className={`mr-3`}>Balance:</p>
            <p className={``}>50.000</p>
            <p className={`ml-1`}>Coins</p>
            <img src={profilePic} alt="" className={`rounded-CircleProfPic w-ProfWidth h-ProfHeight ml-4`}/>
          </div>
          <div>
            
          </div>
          </div>
      </div>
      
    </nav>;
    
};

export default Navbar;
