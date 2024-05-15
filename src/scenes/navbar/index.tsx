import { useState } from "react";
import Search from "@/components/searchBar";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between ";
  const flexCent = "flex items-center justify-center"
  const glow = "shadow-inner shadow-md shadow-lg shadow-xl "

  return <nav>
      <div
        className={`${flexBetween} sticky z-30 top-0  w-full py-6 bg-gradient-to-r from-navGrad1 to-navGrad2 text-white`}
      >
          <div className={`${flexBetween} ml-4 font-bold`}>SwiftFetch</div>
          <div className={`${flexBetween} `}>
            <Search />
          </div>
        <div 
        className={`${flexBetween} w-5/12`}
        >
          <div className={`${flexCent} w-8/12 gap-16 font-semibold ` }>
              <div className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300`} >
                <a href="" >Recommendation</a>
              </div>
              <div>
                <a href="" className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300`}>Chat</a>
              </div>
              <div>
                <a href="" className={`hover:shadow-md hover:shadow-blue-400 hover:w-max hover:rounded-md hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300`}>History</a>
              </div>
          </div>
          <div className={`${flexBetween} w-auto`}>
            Hi
          </div>
          <div>
            
          </div>
          </div>
      </div>
      
    </nav>;
    
};

export default Navbar;
