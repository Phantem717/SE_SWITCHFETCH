import React from 'react'
import ProdImg from '../assets/Rectangle64.png'
import ProfImg from '../assets/Elige Al Gaib.png'
import star from '../assets/star.png'
const HistoryBox = () => {
  return (
    <div className=' flex  bg-white w-8/12 flex-col  mb-8 h-full'>
    
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
  <div className='flex  pr-5 mb-4'>
<button className='w-36 h-10 font-normal text-sm bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot transition-all duration-300 hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white '>Buy Again</button>

</div>

    </div>
  </div>

  


</div>
  )
}

export default HistoryBox