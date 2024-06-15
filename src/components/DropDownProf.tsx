import React from 'react'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DropDownProf = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('account'));
    const logout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire({
                    title: 'Logging out...',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                setTimeout(() => {
                    localStorage.clear();
                    navigate('/');
                    Swal.close();
                }, 1500);
            }
        });

    }
  return (
    <div className='bg-white w-44 rounded-md pt-2 absolute text-black top-16 box-border border-2 border-gray-200 '>
        <div className='flex justify-center font-medium box-border border-b-2 border-gray-200 pb-2'>
        <div>{userData['balance'] ? 'Balance: '+ userData['balance'] : 'Balance : -'}</div>

        </div>
        <ul className='flex justify-center flex-col items-center text-sm cursor-pointer'>
            <div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '> <li ><a href="./editprofile">Edit Profile</a> </li> </div>
          <div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '>    <li ><a href="./topup">Top Up</a></li> </div>

            {userData['is_seller'] === 0 ? (<div className='box-border border-b-2 border-gray-200 pb-2 pt-2 w-full flex justify-center hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '>    <li ><a href="./registerSeller">Register as Seller</a></li> </div>)
                : (<div></div>)
            }
            <div  className='text-white bg-red-500 pb-2 pt-2 w-full flex justify-center rounded-bl-md rounded-br-md hover:shadow-blue-400 hover:rounded-md  hover:bg-blue-600  hover:text-white transition-all duration-300 '>  <li ><a onClick={logout}>Sign Out</a></li> </div>
          
        </ul>
    </div>
  )
}
 
export default DropDownProf
