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
    const [textCat, setCat] = useState('');
    const [textPrice, setTextPrice] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const inputTextProd = (event: any) => {
        setTextProd(event.target.value);
    };
    const inputTextPrice = (event: any) => {
        setTextPrice(event.target.value);
    };
    const inputTextDesc = (event: any) => {
        setTextDesc(event.target.value);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
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
                const formData = new FormData();
                formData.append('productName', textProd);
                formData.append('price', textPrice);
                formData.append('category', textCat);
                formData.append('location', textLoc);
                formData.append('description', textDesc);
                if (file) {
                    formData.append('image', file);
                }

                axios.post('product image API', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then(res => {
                    Swal.fire({
                        icon: "success",
                        title: "Product Added",
                        text: "Your product has been added successfully",
                    });
                })
                .catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "There was an error adding your product",
                    });
                    console.error(err);
                });
            }
        });
    };
  return (
    
    <div className='bg-blue-100'>
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

        <div className='  mt-12 flex flex-row justify-center align-middle items-center z-1'>
            <div className='w-2/12 font-bold'>
            Category
            </div>

        
            <DropDownCategory onCategorySelect={setCat}/>
        
        
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

        <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
            <div className='w-2/12 font-bold'>
            Add Product Picture
            </div>

            <input
                type='file' 
                name="image" 
                accept='image/png, image/jpg, image/jpeg'
                ref={fileInputRef}
                className='bg-white hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500 hover:bg-blue-200 border-2 box-border border-black rounded-lg w-7/12 h-8' 
                onChange={handleOnChange}
                />
        
        
        </div>

        <div className='flex justify-end ml-auto mr-44 mt-12 pb-12'>
                <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-1 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-end'>
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
