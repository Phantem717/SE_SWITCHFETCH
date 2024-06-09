import React, {useEffect, useRef, useState} from 'react';
import Navbar from '@/scenes/navbar';
import {useNavigate} from "react-router-dom";
import Footer from '@/components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [conNewPass, setConNewPass] = useState('');

    let data : any;
    const inputOldPass = (event : any) => {
        setOldPass(event.target.value);
    }
    const inputNewPass = (event : any) => {
        setNewPass(event.target.value);
    }
    const inputConNewPass = (event : any) => {
        setConNewPass(event.target.value);
    }

    const handleChangePass = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to save changes?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Save',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if(result.isConfirmed){
                console.log('Old Password', oldPass);
                console.log('New Password', newPass);
                console.log('Confirm New Password', conNewPass);
                if(oldPass != data['password']){
                    Swal.fire({
                        icon: 'error',
                        title: 'Your is not correct',
                        confirmButtonColor: '#3085d6',
                    })
                }
                if(data['password'] == newPass){
                    Swal.fire({
                        icon: 'error',
                        title: 'Your new password is the same with your old password',
                        confirmButtonColor: '#3085d6',
                    })
                }
                if(newPass != conNewPass){
                    Swal.fire({
                        icon: 'error',
                        title: 'Your new password and confirm password do not match',
                        confirmButtonColor: '#3085d6',
                    })
                }
            }
        })
    }

    return (
        <div className='bg-blue-100'>
            <Navbar />
                <div className='mt-28 flex flex-row justify-center align-middle items-center'>
                    <div className='w-2/12 font-bold'>
                        Old Password
                    </div>
                    <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} 
                        placeholder='Enter Your Old Password' 
                        value={oldPass} 
                        onChange={inputOldPass} 
                        style={{ fontSize : '1 rem'} }
                        />
                </div>
                <div className='mt-12 flex flex-row justify-center align-middle items-center'>
                    <div className='w-2/12 font-bold'>
                        New Passowrd
                    </div>
                    <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} 
                        placeholder='Enter Your New Password' 
                        value={newPass} 
                        onChange={inputNewPass} 
                        style={{ fontSize : '1 rem'} }
                        />
                </div>
                <div className='mt-12 flex flex-row justify-center align-middle items-center'>
                    <div className='w-2/12 font-bold'>
                        Confirm New Password
                    </div>
                    <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} 
                        placeholder='Confirm Your New Password' 
                        value={conNewPass} 
                        onChange={inputConNewPass} 
                        style={{ fontSize : '1 rem'} }
                        />
                </div>
                <div className='flex justify-end ml-auto mr-44 mt-12 pb-12'>
                    <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-1 mr-3 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-end'>
                        <button 
                            type='submit' 
                            className='w-full h-full' 
                            onClick={handleChangePass}
                        >
                            Save
                        </button>
                    </div>
            </div>
            <Footer/>
            
        </div>
  )
}

export default ChangePassword
