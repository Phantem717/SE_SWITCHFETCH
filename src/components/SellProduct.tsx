import React from 'react'
import Navbar from '@/scenes/navbar'
import DropDownCategory from './DropDownCategory';
import DropDownLocation from './DropDownLocation';


const SellProduct = () => {
    const [textProd, setTextProd] = React.useState('');
    const [text, setText] = React.useState('');
    const [textPrice, setTextPrice] = React.useState('');
  return (
    
    <div>
          <Navbar />

    <div className='  mt-20 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Product Name
        </div>

        <input type='text' className={`placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} placeholder='Enter Product Name' 
                value={textProd} onChange={e => setTextProd(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
        
        
    </div>

    <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Price
        </div>

        <input type='text' className={`placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} placeholder='Enter Product Price' 
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

        <input type='text' className={`placeholder: pb-20 placeholder: px-4 pl-2 border-2 box-border border-black rounded-lg w-7/12 h-28`} placeholder='Cari Produk' 
                value={text} onChange={e => setText(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
        
        
    </div>

    <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Add Product Picture
        </div>

        <input type='file' className={`border-2 box-border border-black rounded-lg w-7/12 h-8`} 
            
               />
        
        
    </div>

    <div className='mt-12 ml-auto mr-44 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-center '>
        <button>Add</button>
    </div>
       
    </div>
    
  )
}

export default SellProduct
