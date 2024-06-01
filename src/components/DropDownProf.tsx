import React from 'react'
import { useNavigate } from "react-router-dom";

const DropDownProf = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
  return (
    <div className='bg-white w-44 rounded-md pt-2 absolute text-black top-16 box-border border-2 border-gray-200 '>
        <div className='flex justify-center font-medium box-border border-b-2 border-gray-200 pb-2'>
        <div>Pradah - Rp. 30.000</div>
     
        </div>
        <ul className='flex justify-center flex-col items-center text-sm cursor-pointer'>
            <div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '> <li ><a href="./editprofile">Edit Profile</a> </li> </div>
           <div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md hover:bg-blue-600  hover:text-white transition-all duration-300 '>  <li><a href="./sellproduct">Sell Product</a></li> </div>
          <div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '>    <li ><a href="./topup">Top Up</a></li> </div>
        <div  className='text-white bg-red-500 pb-2 pt-2 w-full flex justify-center rounded-bl-md rounded-br-md hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '>  <li ><a onClick={logout}>Sign Out</a></li> </div>
          
        </ul>
    </div>
  )
}
 
export default DropDownProf
