import React from 'react'
import ProdIMG from './Rectangle64.png'
import star from './star.png'
const ProductContainer = () => {
  return (
    
    <div className='w-PCONTWidth2 h-PCONTHeight2  hover:cursor-pointer transition-all duration-300'>

        {/* IMG */}
        <div className='mb-1 bg-yellow-100 w-PCONTWidth h-PCONTHeight flex align-middle content-center items-center justify-center rounded-md'>
        <img src={ProdIMG} alt="" className='w-PCIMGWidth h-PCIMGHeight'/>
        </div>

        {/* Details */}
        <div>
        <div className='underline font-bold text-lg'>
            Item Name
        </div>

        <div className='flex flex-row content-center align-middle items-center mt-1 ml-1'>
            <img src={star} alt="" className='w-4 h-4 mr-2'/>
            <div className='font-semibold text-sm'>4.93</div>
        </div>

        <div className='flex flex-row content-center align-middle items-center '>
            <div>
            Rp49.000
            </div>
            <div className='  text-black  items-center justify-center '>
        <button className='hover:font-bold hover:shadow-md hover:shadow-blue-400  hover:p-1 hover:bg-blue-600  hover:text-white transition-all duration-300  ml-10 w-16 h-8 font-semibold text-sm rounded-full bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot'>Find</button>
    </div>
        </div>

        </div>
    </div>
  )
}

export default ProductContainer