import React from 'react'
import Navbar from '@/scenes/navbar'
import ProductDetGall from './ProductDetGall'
import ProdInfoBox from './ProdInfoBox'
import QTYIncrement from './QTYIncrement'

const ProductDetails = () => {
  return (
    <div className=''>
      <Navbar />
        <div className='flex flex-row justify-center  items-center align-middle gap-32 '>
        <ProductDetGall />
        <ProdInfoBox />
        </div>
            
            
        
    </div>
  )
}

export default ProductDetails