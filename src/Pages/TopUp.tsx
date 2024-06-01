import React from 'react'
import Navbar from '@/scenes/navbar'
import Footer from '@/components/Footer'
import ProfIMG from '@/assets/Elige Al Gaib.png'
import Indomaret from '@/assets/Logo_Indomaret.png'
import QRIS from '@/assets/QRIS_logo.svg'
import OVO from '@/assets/OVO.png'
import DANA from '@/assets/Logo_dana_blue.svg.png'
import Gopay from '@/assets/logo-gopay-vector.png'
import spay from '@/assets/SPAY.png'

const TopUp = () => {
    const [textNominal, setTextNominal] = React.useState('');
    const [textEmail, setTextEmail] = React.useState('');
  return (
    <div className='bg-gray-200 '>
        <Navbar/>
        <div className='flex justify-center mt-16 mb-16 '>
        <div className='rounded-md bg-white w-9/12 h-PAYHEIGHT flex flex-row align-middle content-center   justify-center'>
            <div className='flex flex-col align-middle '>
            <div className='text-xl font-medium mb-4 mt-6'>Top Up</div>
            <div className='mb-8 flex flex-row items-center align-middle font-medium'>
                <img src={ProfIMG} alt="" className='rounded-full w-10 h-10 mr-2' />
                <div>
                    Pradah - Rp. 15.000
                </div>
            </div>

            <div className=' mb-4'>
                <div className='text-sm font-medium mb-1'>
                   Jumlah Nominal 
                </div>
            <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-300 placeholder: px-4 border-2 box-border border-gray-400 w-full h-8`} placeholder='Masukkan Nominal Disini' 
                value={textNominal} onChange={e => setTextNominal(e.target.value)} 
                style={{ fontSize : '5 px'} }/>
            </div>

            <div className='w-TXTWIDTH'>
                <div className='text-sm font-medium mb-1'>
                Email (Bukti Pembayaran)
                </div>
            <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-300 placeholder: px-4 border-2 box-border border-gray-400 w-full h-8`} placeholder='Masukkan Email Disini' 
                value={textEmail} onChange={e => setTextEmail(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
            </div>

            </div>
            <div className='flex flex-wrap  h-48 mt-36 w-6/12 justify-center'>
            <div  className='mb-4 mr-4  cursor-pointer items-center flex justify-center bg-white border-2 box-border rounded-lg border-gray-200 w-56 h-16'>
                <img src={spay} alt="" className='h-12 w-12' />
            </div>
            <div className=' mb-4  cursor-pointer items-center flex justify-center bg-white border-2 box-border rounded-lg border-gray-200 w-56 h-16'>
                <img src={QRIS} alt="" className='h-24 w-36' />
            </div>
            <div className='mb-4 mr-4  cursor-pointer items-center flex justify-center bg-white border-2 box-border rounded-lg border-gray-200 w-56 h-16'>
                <img src={Gopay} alt="" className='h-8 w-24' />
            </div>
            <div className='mb-4 cursor-pointer items-center flex justify-center bg-white border-2 box-border rounded-lg border-gray-200 w-56 h-16'>
                <img src={DANA} alt="" className='h-8 w-24' />
            </div>
            <div className='mb-4 mr-4   cursor-pointer items-center flex justify-center bg-white border-2 box-border rounded-lg border-gray-200 w-56 h-16'>
                <img src={OVO} alt="" className='h-8 w-20' />
            </div>
            <div className='mb-6 cursor-pointer items-center flex justify-center bg-white border-2 box-border rounded-lg border-gray-200 w-56 h-16'>
                <img src={Indomaret} alt="" className='h-8 w-24' />
            </div>
            <div className='flex flex-col justify-end mr-12 ml-auto'>
            <button className='hover:font-bold hover:shadow-md hover:shadow-blue-400  hover:p-1 hover:bg-blue-600  hover:text-white transition-all duration-300 w-32 h-8 font-semibold text-sm rounded-md bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot'>Top Up</button>

            </div>

        </div>



        </div>

      
        </div>
       
        <Footer/>
    </div>
  )
}

export default TopUp