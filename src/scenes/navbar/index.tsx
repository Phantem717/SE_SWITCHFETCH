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
          <div className={`${flexBetween} w-8/12 gap-16`}>
              <div>
                Recommendation
              </div>
              <div>
                Chat
              </div>
              <div>
                History
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
