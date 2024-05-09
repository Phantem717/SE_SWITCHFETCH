import { useState } from "react";
import Search from "@/components/searchBar";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return <nav>
      <div
        className={`${flexBetween} font-bold fixed top-0 z-30 w-full py-6 bg-navbarColor`}
      >
          <div className={`${flexBetween} ml-4`}>SwiftFetch</div>
          <div className={`${flexBetween}`}>
            <Search />
          </div>
        <div 
        className={`${flexBetween} w-5/12`}
        >
          <div className={`${flexBetween} w-full gap-16`}>
            Home
          </div>
          <div className={`${flexBetween} w-full gap-16`}>
            Chat
          </div>
          <div className={`${flexBetween} w-full gap-16`}>
            History
          </div>
          <div className={`${flexBetween} mr-4`}>
            Hi
          </div>
          <div>
            
          </div>
          </div>
      </div>
    </nav>;
};

export default Navbar;
