import React from 'react'
import Navbar from '@/scenes/navbar'
import Footer from '@/components/Footer'
import SellerBox from '@/components/SellerBox'
import DropDownSeller from '@/components/DropDownSeller'
import notification from '../assets/notification.png'
import chat from '../assets/chat.png'
import analytics from '../assets/analysis.png'
import settings from '../assets/setting.png'
import customer from '../assets/customer.png'
import item from '../assets/product.png'

const SellerPage = () => {
  
  return (
    
    <div className='min-h-screen'>
        <Navbar/>
        <div className='flex flex-col justify-center items-center bg-gray-200' >
        <div className='flex bg-sellerMenu flex-col w-SellerBox py-7 px-8 mt-12 '>
        <div className='flex flex-row align-middle content-center  mb-16 justify-between'>
        <div className='text-white'>
          <div className='text-lg'> Welcome Back,</div>  <div className='mt-1 underline text-3xl'>Robe US</div>
        </div>
        <div className='text-white text-2xl flex '>Rp. 26.000.000</div>

        

        </div>
        <div className='flex flex-row justify-center'>
            <div className='flex flex-col justify-center align-middle items-center mr-16 '>
            <button className='bg-blue-400 rounded-md w-12 h-12 justify-center items-center flex hover:bg-blue-300 transition-all duration-300 hover:shadow-md hover:shadow-blue-400 hover:p-1'>
            <img src={item} alt="" className='w-9 h-9' />

            </button>            <div className='text-white text-sm'>My Item </div>
            </div>
            <div className='flex flex-col justify-center align-middle items-center mr-16'>
            <button className='bg-blue-400 rounded-md w-12 h-12 justify-center items-center flex  hover:bg-blue-300 transition-all duration-300 hover:shadow-md hover:shadow-blue-400 hover:p-1'>
            <img src={customer} alt="" className='w-9 h-9' />

            </button>
            <div className='text-white text-sm'>Customer </div>
            </div>
            <div className='flex flex-col justify-center align-middle items-center mr-16'>
            <button className='bg-blue-400 rounded-md w-12 h-12 justify-center items-center flex  hover:bg-blue-300 transition-all duration-300 hover:shadow-md hover:shadow-blue-400 hover:p-1'>
            <img src={analytics} alt="" className='w-9 h-9' />

            </button>
            <div className='text-white text-sm'>Analytics </div>
            </div>
            <div className='flex flex-col justify-center align-middle items-center mr-16'>
            <button className='bg-blue-400 rounded-md w-12 h-12 flex justify-center items-center  hover:bg-blue-300 transition-all duration-300 hover:shadow-md hover:shadow-blue-400 hover:p-1'>
              <img src={notification} alt="" className='w-8 h-8' />
            </button>
            <div className='text-white text-sm'>Notification</div>
            </div>
            <div className='flex flex-col justify-center align-middle items-center mr-16 '>
            <button className='bg-blue-400 rounded-md w-12 h-12 justify-center items-center flex  hover:bg-blue-300 transition-all duration-300 hover:shadow-md hover:shadow-blue-400 hover:p-1'>
            <img src={chat} alt="" className='w-8 h-8' />

            </button>
            <div className='text-white text-sm'>Chat </div>
            </div>
            <div className='flex flex-col justify-center align-middle items-center'>
            <button className='bg-blue-400 rounded-md w-12 h-12 flex justify-center items-center  hover:bg-blue-300 transition-all duration-300 hover:shadow-md hover:shadow-blue-400 hover:p-1'>
              <img src={settings} alt="" className='w-8 h-8' />
            </button>
            <div className='text-white text-sm'>Settings</div>
            </div>
          
        </div>
        </div>

        <div className='flex flex-row mb-8 mt-8 justify-between items-center w-SellerBox'>
            <div className='font-medium text-3xl flex'>
                My Order
            </div>
           <DropDownSeller/>
        </div>

<div className='w-SellerBox mb-16'>
<SellerBox/>
</div>
        


        </div>
        <Footer/>
    </div>
  )
}

export default SellerPage
