import React from 'react'
import Navbar from '@/scenes/navbar'
import DropDownCategory from './DropDownCategory';
import DropDownLocation from './DropDownLocation';


const SellProduct = () => {
    const [textProd, setTextProd] = React.useState('');
    const [textDesc, setTextDesc] = React.useState('');
    const [textPrice, setTextPrice] = React.useState('');
  return (
    
    <div className='bg-blue-100'>
          <Navbar />

    <div className='  mt-20 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Product Name
        </div>

        <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200 placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} placeholder='Enter Product Name' 
                value={textProd} onChange={e => setTextProd(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
        
        
    </div>

    <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Price
        </div>

        <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} placeholder='Enter Product Price' 
                value={textPrice} onChange={e => setTextPrice(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
        
        
    </div>

    <div className='  mt-12 flex flex-row justify-center align-middle items-center z-1'>
        <div className='w-2/12 font-bold'>
        Category
        </div>

        
        <DropDownCategory />
        
        
    </div>

    <div className='  mt-12 flex flex-row justify-center align-middle items-center z-0'>
        <div className='w-2/12 font-bold'>
        Product Location
        </div>

        <DropDownLocation />
        
        
    </div>

    <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Product Description
        </div>

        <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: pb-20 placeholder: px-4 pl-2 border-2 box-border border-black rounded-lg w-7/12 h-28`} placeholder='Enter Product Description' 
                value={textDesc} onChange={e => setTextDesc(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
        
        
    </div>

    <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Add Product Picture
        </div>

        <input type='file' className={`bg-white hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  cursor-pointer border-2 box-border border-black rounded-lg w-7/12 h-8`} 
            
               />
        
        
    </div>

    <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600  hover:text-white transition-all duration-300  mt-12 ml-auto mr-44 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-center '>
        <button className='w-full h-full'>Add</button>
    </div>
       
    </div>
    
  )
}

export default SellProduct
