import React from 'react'
import Navbar from '@/scenes/navbar'
import ProductDetGall from '../components/ProductDetGall'
import ProdInfoBox from '../components/ProdInfoBox'
import QTYIncrement from '../components/QTYIncrement'
import Footer from '@/components/Footer'
import {useLocation} from "react-router-dom";
const ProductDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  return (
    <div className=''>
      <Navbar />
        <div className='z-0 flex justify-center gap-28 '>
        <ProductDetGall />
        <ProdInfoBox id={id} />
        </div>
            
            
        <Footer/>
    </div>
  )
}

export default ProductDetails
