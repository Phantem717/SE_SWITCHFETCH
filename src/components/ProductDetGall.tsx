import React from 'react'
import Navbar from '@/scenes/navbar'
import ProdImg from './Rectangle64.png'
const ProductDetGall = () => {

  const mainImg = "bg-opacity-50 flex w-WidthMain h-HeightMain justify-center  items-center bg-yellow-100 rounded-lg  pt-8 pb-8 pl-20 pr-16 drop-shadow-lg";
  const optIMG = "bg-opacity-50 w-36 h-32 bg-yellow-100 rounded-lg mr-4 pt-4 pb-4 drop-shadow-lg"
  return (
    

    <div className='flex flex-col mt-12'>
       
        <div className='flex flex-col'>
        <div className={`${mainImg}  `}>
            <img src={ProdImg} alt="" />
            
        </div>
        <div className='flex flex-row justify-center  items-center align-middle mt-6 w-WidthMain '>
            <img src={ProdImg} alt="" className={`${optIMG}  `} />
            <img src={ProdImg} alt="" className={`${optIMG}  `}  />
            <img src={ProdImg} alt="" className={`${optIMG}  `}   />
            <img src={ProdImg} alt="" className='bg-opacity-50 w-36 h-32 bg-yellow-100 rounded-lg pt-4 pb-4 drop-shadow-lg' />
        </div>


    </div>
    </div>
  )
}

export default ProductDetGall