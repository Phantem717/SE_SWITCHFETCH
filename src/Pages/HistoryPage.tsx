import React from 'react'
import Navbar from '@/scenes/navbar'
import HistoryBox from '../components/HistoryBox'
import Footer from '@/components/Footer'
const HistoryPage = () => {
  return (
    <div className='bg-gray-100'>
        <Navbar />

        <div className='flex justify-center align-middle content-center flex-wrap gap-y-7 mt-10 mb-24 min-h-screen'>
          <HistoryBox/>
          <HistoryBox/>
          <HistoryBox/>
          <HistoryBox/>
        </div>
        <Footer/>
    </div>
  )
}

export default HistoryPage