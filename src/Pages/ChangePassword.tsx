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
    const userData = JSON.parse(localStorage.getItem('account'));

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
    
    const handleChangeCancel = (event: { preventDefault: () => void;}) => {
        event.preventDefault();
        navigate("/editProfile");
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
                if(oldPass != userData['password']){
                    Swal.fire({
                        icon: 'error',
                        title: 'Your old password is not correct',
                        confirmButtonColor: '#3085d6',
                    })
                }
                else if(userData['password'] == newPass){
                    Swal.fire({
                        icon: 'error',
                        title: 'Your new password is the same with your old password',
                        confirmButtonColor: '#3085d6',
                    })
                }
                else if(newPass != conNewPass){
                    Swal.fire({
                        icon: 'error',
                        title: 'Your new password and confirm password do not match',
                        confirmButtonColor: '#3085d6',
                    })
                } else {
                    axios.post('http://localhost:80/api/auth/change-password',{
                        'password': newPass,
                        'user_id': userData['id']
                    })
                        .then(res => {
                            if (res['data']['error'] == 1){
                                Swal.fire({
                                    icon: "error",
                                    title: "Failed to Save",
                                    text: res['data']['message'],
                                });
                            } else {
                                Swal.fire({
                                    title: 'Success',
                                    text: `${res['data']['message']}`,
                                    icon: 'success',
                                    confirmButtonText: 'Ok',
                                    confirmButtonColor: '#3085d6',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        navigate(`/Home`)
                                    }
                                })
                            }
                        })
                        .catch(err => {
                            console.error(err);
                        });
                }
            }
        })
    }

    return (
        <div className='bg-blue-100 min-h-screen'>
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
                        New Password
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

                    <div>
                        <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-1 mr-24 flex-column flex text-black bg-cancelBtn rounded-md w-24 h-10 items-center justify-end'>
                            <button 
                                type='submit' 
                                className='w-full h-full' 
                                onClick={handleChangeCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>

                    <div>
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
            </div>
            <Footer/>
            
        </div>
  )
}

export default ChangePassword
