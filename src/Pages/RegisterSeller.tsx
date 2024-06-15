import React, { useState } from 'react'
import Navbar from '@/scenes/navbar';
import {useNavigate} from "react-router-dom";
import Footer from '@/components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';

const RegisterSeller = () => {

    const [shopName, setShopName] = useState('');
    const [shopDesc, setShopDesc] = useState('');
    const [shopUrl, setShopUrl] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const navigate = useNavigate();
    let data : any;
    const userData = JSON.parse(localStorage.getItem('account'));

    const inputShopName = (event: any) => {
        setShopName(event.target.value);
    }
    const inputShopAddress = (event: any) => {
        setShopAddress(event.target.value);
    }
    const inputShopDesc = (event: any) => {
        setShopDesc(event.target.value);
    }
    const inputShopUrl = (event: any) => {
        setShopUrl(event.target.value);
    }

    const handleOnSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault;
        Swal.fire({
            title: 'Registration',
            text: 'Proceed to register?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if(result.isConfirmed){
                axios.post(`http://localhost:80/api/shop/create-shop`,
                    {
                      user_id: userData['id'],
                        shop_name: shopName,
                        address: shopAddress,
                        image: shopUrl,
                        description: shopDesc
                    })
                    .then(res => {
                        if(res['data']['error'] == 1){
                            Swal.fire({
                                icon: "error",
                                title: "Something Went Wrong",
                                text: res['data']['message'],
                            });
                            return;
                        } else {
                            axios.post(`http://localhost:80/api/seller/register-seller`,
                                {
                                    user_id: userData['id'],
                                    subscribe: true
                                })
                                .then(res => {
                                    if (res['data']['error'] == 1) {
                                        Swal.fire({
                                            icon: "error",
                                            title: "Failed to Register",
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
                                                navigate(`/Home`);
                                                window.location.reload();
                                            }
                                        })
                                    }
                                })
                                .catch(err => {
                                    console.error(err);
                                });

                            return;
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        })
    }

    return (
        <div className='bg-blue-100'>
            <Navbar/>

            <div className='min-h-screen'>
                <div className='mt-20 flex flex-row justify-center align-middle items-center'>
                    <div className='w-2/12 font-bold'>
                        Shop Name
                    </div>
                    <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} 
                        placeholder='Enter Shop Name' 
                        value={shopName} 
                        onChange={inputShopName} 
                        style={{ fontSize : '1 rem'} }
                        />
                </div>

                <div className='mt-20 flex flex-row justify-center align-middle items-center'>
                    <div className='w-2/12 font-bold'>
                        Shop Address
                    </div>
                    <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`}
                        placeholder='Enter Shop Address'
                        value={shopAddress}
                        onChange={inputShopAddress}
                        style={{ fontSize : '1 rem'} }
                        />
                </div>

                <div className='mt-12 flex flex-row justify-center align-middle items-center'>
                    <div className='w-2/12 font-bold'>
                        Shop Description
                    </div>
                    <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: pb-20 placeholder: px-4 pl-2 border-2 box-border border-black rounded-lg w-7/12 h-28`} 
                        placeholder='Enter Shop Description' 
                        value={shopDesc} 
                        onChange={inputShopDesc} 
                        style={{ fontSize : '1 rem'} }
                        />
                </div>

                <div className='mt-12 flex flex-row justify-center align-middle items-center' >
                    <div className='w-2/12 font-bold'>
                        Add Shop Picture
                    </div>
                    <input 
                        type='text' 
                        className='hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8' 
                        placeholder='Enter Image Link'
                        value={shopUrl}
                        onChange={inputShopUrl}
                        style={{ fontSize : '1 rem'} }
                    /> 
                </div>
            
                <div className='mt-4 flex justify-center'>
                    <img src={shopUrl} className={`flex items-center justify-center h-48`} alt="" />
                </div>

                <div className='flex justify-end ml-auto mr-44 mt-12 pb-12'>
                    <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-1 mr-3 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-end'>
                        <button 
                            type='submit' 
                            className='w-full h-full' 
                            onClick={handleOnSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default RegisterSeller
