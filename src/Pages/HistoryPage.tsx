import React from 'react'
import Navbar from '@/scenes/navbar'
import HistoryBox from '../components/HistoryBox'
const HistoryPage = () => {
  return (
    <div className='bg-gray-100'>
        <Navbar />

        <div className='flex justify-center align-middle content-center flex-wrap gap-y-7 mt-10'>
          <HistoryBox/>
          <HistoryBox/>
          <HistoryBox/>
          <HistoryBox/>
        </div>
    </div>
  )
}

export default HistoryPage