import React from 'react'
import ProdImg from '../assets/Rectangle64.png'
import ProfImg from '../assets/Elige Al Gaib.png'
import star from '../assets/star.png'
const HistoryBox = () => {
  return (
    <div className=' flex  bg-white w-7/12 flex-col'>
        <div className='flex flex-col ml-5 mt-3'>
        <div className='flex flex-row items-center content-center gap-x-2 mb-2' >
            <img src={ProfImg}  alt="" className='rounded-CircleProfPic w-8 h-8 ' />
            <div className='font-semibold text-xs'>Nama Toko</div>
            <button className='w-12 h-5 font-semibold text-xs rounded-full bg-gradient-to-t from-OrderBTNTop to-OrderBTNBot'
            >
              Chat
            </button>

        </div>
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
            <div className='flex flex-row items-center content-center align-middle justify-items-center'>
              <div className='text-xs mr-1 text-gray-400'>4.93</div>
              <img src={star} alt="" className='w-3 h-3 '/>
            </div>
            <div className='font-semibold'>
              Rp. 49.230
            </div>
        </div>
        </div>
        

        </div>
        <div className='w-full flex content-center align-middle items-center justify-end pr-5 mb-1'>
          
          <div className='text-xs text-gray-400 mr-0.5'>
            Total Price Including Delivery:  
          </div>

          <div className='text-lg font-semibold ml-0.5'>
             Rp. 123.000
          </div>
        </div>
<div className='flex justify-end pr-5 mb-4'>
<button className='w-36 h-10 font-normal text-sm bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot '
>
  Buy Again
</button>

</div>

    </div>
  )
}

export default HistoryBox