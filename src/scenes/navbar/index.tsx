import { useState } from "react";
import Search from "@/components/searchBar";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-gradient-to-r from-navGrad1 to-navGrad2 `}
      >
          <div className={`${flexBetween} ml-4 font-bold`}>SwiftFetch</div>
          <div className={`${flexBetween}`}>
            <Search />
          </div>
        <div 
        className={`${flexBetween} w-5/12`}
        >
          <div className={`${flexBetween} w-8/12 gap-16 font-semibold` }>
              <div>
                <a href="">Recommendation</a>
              </div>
              <div>
                <a href="">Chat</a>
              </div>
              <div>
                <a href="">History</a>
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
