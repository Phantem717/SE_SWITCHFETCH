import React from 'react'
import { useState } from 'react'
import Navbar from '@/scenes/navbar'
import Footer from '@/components/Footer'
import ProdImg from '../assets/Rectangle64.png'
import ProfImg from '../assets/Elige Al Gaib.png'



const TransactionDetails = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const options = ["My Wallet", "OVO", "Dana", "QRIS"];
  const widths = ["w-32", "w-20", "w-24", "w-20"];

  const commonClasses = "border-2 box-border font-semibold items-center justify-center flex mr-4 h-10 cursor-pointer transition-all duration-300";
  const grayClasses = "border-gray-400 text-gray-400";
  const blueClasses = "border-blue-700 text-blue-700 font-bold";

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <div>
        <Navbar/>
        <div className='bg-gray-200 items-center justify-center flex flex-col'>
        <div className=' flex  bg-white w-8/12 flex-col mt-12 mb-8'>
        <div className='ml-5 font-semibold mt-3 text-lg'>
            Order Item
        </div>
    <div className='flex flex-col ml-5 mt-3'>
    <div className='flex flex-row items-center content-center gap-x-2 mb-2' >
        <img src={ProfImg}  alt="" className='rounded-CircleProfPic w-8 h-8 ' />
        <div className='font-semibold text-xs'>Nama Toko</div>
        <button className='w-12 h-5 font-semibold text-xs rounded-full bg-gradient-to-t from-OrderBTNTop to-OrderBTNBot hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300'>Chat</button>

    </div>
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
<button className='w-36 h-10 font-normal text-sm bg-gradient-to-b bg-red-500 text-white hover:text-black transition-all duration-300 hover:font-bold hover:shadow-md hover:shadow-red-400 hover:p-1 hover:bg-red-600  '>Cancel</button>

</div>

        </div>
      </div>

      


</div>
<div className='flex flex-col bg-white w-8/12 justify-center mb-20 '>
<div className='ml-3 mt-1 '>
    <div className='font-bold text-xl mt-3 w-7/12 ml-5'>
    My Address
    </div>
    <div className='flex flex-row items-center ml-5'>
        <div className='w-AddressBox mr-12'>
        Kendrew Giantori Widjaja (+62 81286968913)
        </div>
    <div className='box-border border-2
border-gray-200 w-8/12 h-6/6 flex justify-center '>
    <div className='font-normal  text-md  mb-6 ml-1 mt-1'>
    Jl. Raya Kb. Jeruk No.27, RT.1/RW.9, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
    </div>
    </div>
    </div>
   
  
</div>

<div className=' flex justify-end align-bottom items-end flex-col w-full mt-20'>


          
          <div className='flex justify-end pr-5 mb-5  mr-5'>
<button className='w-36 h-10 font-normal text-sm border-2 box-border border-blue-500 transition-all duration-300 hover:bg-blue-400 hover:text-white hovver:font-bold'>Change Address</button>

</div>
</div>

</div>
<div className='flex flex-col bg-white w-8/12 justify-center mb-20 '>
<div className='flex flex-col mt-8 ml-8'>
      <div className='font-bold text-xl'>Payment</div>
      <div className='flex flex-row mt-4'>
        {options.map((option, index) => (
          <div
            key={index}
            className={`${commonClasses} ${widths[index]} ${selectedIndex === index ? blueClasses : grayClasses}`}
            onClick={() => handleClick(index)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
<div className='flex justify-end flex-col w-5/12 ml-auto mt-16 '>
  <div className='flex flex-row justify-between mb-4 mr-8'>
    <div>
    Delivery Fee
    </div>
    <div className='text-gray-500'>
    Rp.24.000
    </div>
  </div>

  <div className='flex flex-row justify-between my-4 mr-8'>
    <div>
    Service Fee
    </div>
    <div className='text-gray-500'>
    Rp.24.000
    </div>
  </div>

  <div className='flex flex-row justify-between my-4 mr-8'>
    <div>
    Price
    </div>
    <div className='text-gray-500'>
    Rp.24.000
    </div>
  </div>

  <div className='flex flex-row justify-between my-4 mr-8'>
    <div className=''>
    Grand Total
    </div>
    <div className='font-semibold text-lg '>
    Rp.69.000
    </div>
  </div>
  <div className='flex justify-end pr-5 mb-6 mr-2 mt-6'>
<button className='w-36 h-10 font-normal text-sm bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot transition-all duration-300  hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white '
>
  Checkout
</button>

</div>
</div>

</div>
        </div>
        <Footer/>
    </div>
  )
}

export default TransactionDetails