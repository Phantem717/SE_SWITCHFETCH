import React, { useRef, useState } from 'react';;
import Navbar from '@/scenes/navbar';;
import DropDownLocation from '../components/DropDownLocation';
import DropDownGender from '../components/DropDownGender';
import Footer from '@/components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';


const EditProfile = () => {
    const [textName, setTextName] = useState('');
    const [textDesc, setTextDesc] = useState('');
    const [textGend, setGend] = useState('');
    const [textLoc, setLoc] = useState('');
    const [textAddr, setTextAddr] = useState('');
    const [textEmail, setTextEmail] = useState('');
    // const [file, setFile] = useState('');
    // const fileInputRef = useRef<HTMLInputElement>(null);
    const [avatarURL, setAvatarURL] = useState('');
    const fileUploadRef = useRef<HTMLInputElement>(null);
    let data : any;

    const handleImageUpload = (event) => {
        event.preventDefault();
        fileUploadRef.current.click();
    }

    const inputTextName = (event: any) => {
        setTextName(event.target.value);
    };
    const inputTextEmail = (event: any) => {
        setTextEmail(event.target.value);
    };
    const inputTextAddr = (event: any) => {
        setTextAddr(event.target.value);
    };
    const inputTextDesc = (event: any) => {
        setTextDesc(event.target.value);
    };

    // const handleOnSave = (event: { preventDefault: () => void; }) => {
    const handleOnSave = async () => {
        // event.preventDefault();
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
                const uploadedFile = fileUploadRef.current.files[0];
                const cachedURL = URL.createObjectURL(uploadedFile);
                setAvatarURL(cachedURL);
                const formData = new FormData();
                formData.append("file", uploadedFile);
                console.log('Image', cachedURL)
                console.log('Name', textName);
                console.log('Location', textLoc);
                console.log('Gender', textGend);
                console.log('Address', textAddr);
                console.log('Email', textEmail);
                console.log('Description', textDesc);
            }
        });
    }
    
    // function handleOnChange(e: React.FormEvent<HTMLInputElement>){
    // function handleOnChange(e){
    //     // const target = e.target as HTMLInputElement & {
    //     //     files: FileList;
    //     // }
    //     // setFile(target.files[0]);       
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }

    return (
        <div className='bg-blue-100'>
            <Navbar />
            <form className='mt-12 flex flex-row justify-center align-middle items-center' >
                <div className='w-2/12 font-bold'>
                    Add Profile Picture
                </div>
                <input 
                    type='file' 
                    name="image" 
                    accept='image/png, image/jpg, image/jpeg'
                    // ref={fileInputRef}
                    ref={fileUploadRef}
                    className='bg-white hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500 hover:bg-blue-200 border-2 box-border border-black rounded-lg w-7/12 h-8' 
                    // onChange={handleOnChange}
                    onChange={handleImageUpload}
                /> 
            </form>

            <div className='mt-4 flex justify-center'>
                <img src={avatarURL} className={`flex items-center justify-center h-48`} alt="" />
            </div>

            <div className='mt-20 flex flex-row justify-center align-middle items-center'>
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

            <div className='mt-12 flex flex-row justify-center align-middle items-center z-10'>
                <div className='w-2/12 font-bold'>
                    Location
                </div>
                <DropDownLocation onLocationSelect={setLoc} />
            </div>
            
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

            <div className='mt-12 flex flex-row justify-center align-middle items-center'>
                <div className='w-2/12 font-bold'>
                    Email
                </div>
                <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} 
                    placeholder='Enter Email' 
                    value={textEmail} 
                    onChange={inputTextEmail} 
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

            <div className='flex justify-end ml-auto mr-44 mt-12 pb-12'>
                <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-1 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-end'>
                    <button 
                        type='submit' 
                        className='w-full h-full' 
                        onClick={handleOnSave}
                    >
                        Save
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default EditProfile;

export default EditProfile;
