import React from 'react';
import twitter from '@/assets/twitter.png';
import facebook from '@/assets/facebook.png';
import linkedIn from '@/assets/linkedin.png';
import instagram from '@/assets/instagram.png';

const Footer = () => {
  return (
    <div className="w-full h-56 text-white bg-gradient-to-b from-Footer1 to-Footer2 flex flex-row align-middle gap-40 bottom-0 z-0">
      <div className="font-semibold flex items-start mt-12 ml-20">
        SwitchFetch
      </div>
      
      <div className="flex flex-col gap-y-6 mt-12 text-sm">
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Partnership</div>
      </div>

      <div className="flex flex-col w-2/12 h-6 mt-12">
        <div className="font-semibold">Follow Us</div>
        <div className="flex flex-wrap flex-row gap-y-2 gap-x-10 mt-2">
          <div className="flex flex-row items-center align-middle content-center"> 
            <img src={instagram} alt="" className="w-6 h-6" />
            <div className="text-xs font-light ml-2">SwitchFetch</div>
          </div>
          <div className="flex flex-row items-center align-middle"> 
            <img src={facebook} alt="" className="w-6 h-6" />
            <div className="text-xs font-light ml-2">SwitchFetch</div>
          </div>
          <div className="flex flex-row items-center align-middle"> 
            <img src={twitter} alt="" className="w-6 h-6" />
            <div className="text-xs font-light ml-2">SwitchFetch</div>
          </div>
          <div className="flex flex-row items-center align-middle"> 
            <img src={linkedIn} alt="" className="w-6 h-6" />
            <div className="text-xs font-light ml-2">SwitchFetch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
