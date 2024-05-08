import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-navbarColor`}
      >SwiftFetch
        <div 
        className={`${flexBetween} mx-auto w-5/6`}
        >
          <div>
            
          </div>
          <div>

          </div>
          <div>

          </div>
          </div>
      </div>
    </nav>;
};

export default Navbar;
