import React from 'react'
import Navbar from '@/scenes/navbar'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import ProdImg from '../assets/Rectangle64.png'
import ProfImg from '../assets/Elige Al Gaib.png'
const ItemPage = () => {
  return (
    <div>
        <Navbar/>
<div className='bg-gray-200 flex justify-center flex-col '>
    <div className='mt-8  flex justify-center'>
    <SearchBar/>
    </div>
   <div className='flex flex-col justify-center items-center'>
   <div className='flex justify-start w-8/12 pr-5   mt-6'>
<button className='w-36 h-10 font-bold text-sm bg-gradient-to-b to-OrderBTNTop from-OrderBTNBot transition-all duration-300  hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white '
>
 Add Item
</button>

</div>
<div className=' flex  bg-white w-8/12 flex-col mt-6 mb-12'>
    
    <div className='flex flex-col ml-5 mt-6'>
   
    <div className=' ml-0 flex justify-between mb-4'>
    <div className='flex flex-row content-center'>
    <div className='bg-yellow-100 flex justify-center items-center align-middle p-4 w-32 h-32 rounded-lg  bg-opacity-50'>
        <img src={ProdImg} alt="" className='w-28 h-24' />
    </div>
    <div className='flex flex-col ml-2'>
        <div className='font-medium text-xl mb-0.5'>
          Nama Barang
        </div>
        <div className='font-medium text-sm mb-0.5'>
          Quantity : 2
        </div>
       
        
    </div>
    
    </div>
    <div className='font-semibold flex justify-end mr-5 text-lg items-center'>
          Rp. 49.230
        </div>
    </div>
   

  
    

    </div>
    
        <div>

        </div>

      <div className='flex justify-end'>
        
      <div className=' flex flex-row justify-end'>
        <div className='flex pr-5 mb-4'>
<button className='w-36 h-10 font-normal text-sm bg-gradient-to-b bg-red-500 text-white  hover:text-black transition-all duration-300 hover:font-bold hover:shadow-md hover:shadow-red-400 hover:p-1 hover:bg-red-600  '>Remove</button>

</div>
<div className='flex  pr-5 mb-4'>
<button className='w-36 h-10 text-sm bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot  hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium'>Edit</button>

</div>
        </div>
      </div>

      


</div>


   </div>


</div>
<Footer/>
    </div>
  )
}

export default ItemPage