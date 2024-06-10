import React, { useRef, useState } from 'react';
import Navbar from '@/scenes/navbar'
import DropDownCategory from '../components/DropDownCategory';
import DropDownLocation from '../components/DropDownLocation';
import Footer from '@/components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';

const SellProduct = () => {
    const [textProd, setTextProd] = useState('');
    const [textDesc, setTextDesc] = useState('');
    const [textLoc, setLoc] = useState('');
    const [textPrice, setTextPrice] = useState('');
    const [avatarURL, setAvatarURL] = useState('');
    let data : any;
    const inputTextProd = (event: any) => {
        setTextProd(event.target.value);
    };
    const inputTextPrice = (event: any) => {
        setTextPrice(event.target.value);
    };
    const inputTextDesc = (event: any) => {
        setTextDesc(event.target.value);
    };
    const inputAvatarURL = (event: any) => {
        setAvatarURL(event.target.value);
    };

    const handleOnSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to save changes?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Add',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if(result.isConfirmed){
                
                console.log('Product Name', textProd);
                console.log('Price', textPrice);
                console.log('Location', textLoc);
                console.log('Description', textDesc);
                console.log('Image', avatarURL);
            }
        });
    }

  return (
    
    <div className='bg-blue-100 min-h-screen'>
          <Navbar />

        <div className='  mt-20 flex flex-row justify-center align-middle items-center '>
            <div className='w-2/12 font-bold'>
            Product Name
            </div>

            <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200 placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} 
                    placeholder='Enter Product Name' 
                    value={textProd} 
                    onChange={inputTextProd} 
                    style={{ fontSize : '1 rem'} }/>
        
        
        </div>

        <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
            <div className='w-2/12 font-bold'>
            Price
            </div>

            <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} 
                    placeholder='Enter Product Price' 
                    value={textPrice} 
                    onChange={inputTextPrice} 
                    style={{ fontSize : '1 rem'} }/>
        
        
        </div>

        <div className='  mt-12 flex flex-row justify-center align-middle items-center z-0'>
            <div className='w-2/12 font-bold'>
            Product Location
            </div>

            <DropDownLocation onLocationSelect={setLoc}/>
        
        
        </div>

        <div className='  mt-12 flex flex-row justify-center align-middle'>
            <div className='w-2/12 font-bold'>
            Product Description
            </div>

            <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: pb-20 placeholder: px-4 pl-2 border-2 box-border border-black rounded-lg w-7/12 h-28`} 
                    placeholder='Enter Product Description' 
                    value={textDesc} 
                    onChange={inputTextDesc} 
                    style={{ fontSize : '1 rem'} }/>
        
        
        </div>

        <div className='mt-12 flex flex-row justify-center align-middle items-center' >
                <div className='w-2/12 font-bold'>
                    Add Product Picture
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

        <div className='flex justify-end ml-auto mr-44 mt-12 pb-12'>
                <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-1 mr-3 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-end'>
                    <button 
                        type='submit' 
                        className='w-full h-full' 
                        onClick={handleOnSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>
       <Footer/>
    </div>
    
  )
}

export default SellProduct
