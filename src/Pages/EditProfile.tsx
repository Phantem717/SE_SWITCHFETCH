import React, {useEffect, useRef, useState} from 'react';
import Navbar from '@/scenes/navbar';
import {useNavigate} from "react-router-dom";
import DropDownLocation from '../components/DropDownLocation';
import DropDownGender from '../components/DropDownGender';
import Footer from '@/components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';


const EditProfile = () => {
    const navigate = useNavigate();
    const [textName, setTextName] = useState('');
    const [textDesc, setTextDesc] = useState('');
    const [textGend, setGend] = useState('');

    // const [textLoc, setLoc] = useState('');
    const [textAddr, setTextAddr] = useState('');
    // const [textEmail, setTextEmail] = useState('');
    const [avatarURL, setAvatarURL] = useState('');
    let data : any;
    const userData = JSON.parse(localStorage.getItem('account'));
    const [user, setUser] = useState('');
    useEffect(() => {
        if (userData) {
            const getUser = async () => {
                try {
                    axios.get(`http://localhost:80/api/profile/${userData['id']}`)
                        .then(res =>{
                            if (res['data']['error'] !== 1) {
                                setUser(res['data']);
                            }
                        })
                } catch (err) {
                    console.error(err);
                }
            };
            getUser();
        }
    }, []);
    const inputTextName = (event: any) => {
        setTextName(event.target.value);
    };
    const inputTextAddr = (event: any) => {
        setTextAddr(event.target.value);
    };
    const inputTextDesc = (event: any) => {
        setTextDesc(event.target.value);
    };
    const inputAvatarURL = (event: any) => {
        setAvatarURL(event.target.value);
    };

    const handleChangePass = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate('/changePassword');
    }
    useEffect(() => {
        if (user) {
            setTextName(user.name || '');
            setTextDesc(user.description || '');
            setTextAddr( user.address || '');
            setAvatarURL(user.photo || '');
        }
    }, [user]);
    const handleOnSave = (event: { preventDefault: () => void; }) => {
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

            axios.post('http://localhost:80/api/profile/edit-profile',{
                name: textName,
                gender: textGend,
                address: textAddr,
                description: textDesc,
                id: userData['id'],
                photo: avatarURL

            })
                .then(res => {
                    if (res['data']['error'] == 1){
                        Swal.fire({
                            icon: "error",
                            title: "Failed to Save",
                            text: res['data']['message'],
                        });
                    } else {
                        axios.get(`http://localhost:80/api/profile/${userData['id']}`)
                            .then(res =>{
                                if (res['data']['error'] !== 1){
                                    localStorage.setItem('account',JSON.stringify(res['data']));
                                }
                            })
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
        });
    }

    return (
        <div className='bg-blue-100 min-h-screen'>
            <Navbar />

            <div className='mt-12 flex flex-row justify-center align-middle items-center'>
                <div className='w-2/12 font-bold'>
                    Name
                </div>
                <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} 
                    placeholder='Enter Full Name' 
                    value={textName} 
                    onChange={inputTextName} 
                    style={{ fontSize : '1 rem'} }
                    />
            </div>

            {/*<div className='mt-12 flex flex-row justify-center align-middle items-center z-10'>*/}
            {/*    <div className='w-2/12 font-bold'>*/}
            {/*        Location*/}
            {/*    </div>*/}
            {/*    <DropDownLocation onLocationSelect={setLoc} />*/}
            {/*</div>*/}
            
            <div className='mt-12 flex flex-row justify-center align-middle items-center z-0'>
                <div className='w-2/12 font-bold'>
                    Gender
                </div>
                <DropDownGender onGenderSelect={setGend} />
            </div>

            <div className='mt-12 flex flex-row justify-center align-middle items-center'>
                <div className='w-2/12 font-bold'>
                    Address
                </div>
                <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} 
                    placeholder='Enter Address' 
                    value={textAddr} 
                    onChange={inputTextAddr} 
                    style={{ fontSize : '1 rem'} }
                    />
            </div>

            <div className='mt-12 flex flex-row justify-center align-middle'>
                <div className='w-2/12 font-bold'>
                    Profile Description
                </div>
                <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: pb-20 placeholder: px-4 pl-2 border-2 box-border border-black rounded-lg w-7/12 h-28`} 
                    placeholder='Enter Profile Description' 
                    value={textDesc} 
                    onChange={inputTextDesc} 
                    style={{ fontSize : '1 rem'} }
                    />
            </div>

            <div className='mt-12 flex flex-row justify-center align-middle items-center' >
                <div className='w-2/12 font-bold'>
                    Add Profile Picture
                </div>
                <input 
                    type='text' 
                    className='hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8' 
                    placeholder='Enter Image Link'
                    value={avatarURL}
                    onChange={inputAvatarURL}
                    style={{ fontSize : '1 rem'} }
                /> 
            </div>

            <div className='mt-4 flex justify-center'>
                <img src={avatarURL} className={`flex items-center justify-center h-48`} alt="" />
            </div>

            <div className='flex justify-end ml-auto mr-44 pb-12'>
                <div>
                    <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-1 mr-96 flex-column flex text-black bg-navGrad1 rounded-md w-44 h-10 items-center justify-end'>
                        <button 
                            type='submit' 
                            className='w-full h-full' 
                            onClick={handleChangePass}
                        >
                            Change Password
                        </button>
                    </div>
                </div>
                <div>
                    <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-1 mr-3 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-end'>
                        <button 
                            type='submit' 
                            className='w-full h-full' 
                            onClick={handleOnSave}
                        >
                            Save
                        </button>
                    </div>
                </div>      
            </div>
            <Footer/>
        </div>
    );
};

export default EditProfile;


