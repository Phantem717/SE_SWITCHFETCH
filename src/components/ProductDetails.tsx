import React from 'react'
import Navbar from '@/scenes/navbar'
import ProductDetGall from './ProductDetGall'
import ProdInfoBox from './ProdInfoBox'
import QTYIncrement from './QTYIncrement'

const ProductDetails = () => {
  return (
    <div className=''>
      <Navbar />
        <div className='z-0 flex justify-center gap-28 '>
        <ProductDetGall />
        <ProdInfoBox />
        </div>
            
            
        
    </div>
  )
}

export default ProductDetails