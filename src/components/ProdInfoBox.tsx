import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfIMG from './Elige Al Gaib.png'
import star from './star.png'
import QTYIncrement from './QTYIncrement'
const ProdInfoBox = () => {
  return (
    <div className='w-EditWidth h-EditHeight mt-20'>
      
  {/* Profile Pic */}
      <div className='flex flex-row justify-start content-center items-center'>
        <div>
        <img src={ProfIMG} alt="" className='rounded-CircleProfPic w-ProfWidth h-ProfHeight ' />

        </div>

        <div className='font-bold text-ProfName ml-6'>
          Mak Kau
        </div>
      </div>

 {/* NameProduk + Rating */}
 <div className='flex flex-row items-center mt-6'>
      <div className='font-semibold text-ProdName flex justify-start'>
        George Robe
      </div>

      <div className='flex flex-row items-center text-gray-400 font-medium text-Rating ml-auto'>
        4.96
        <img src={star} alt="star" className='w-6 h-6 ml-1' />
      </div>
    </div>

  {/* Price */}
  <div className='text-ProdPrice font-medium mb-6'>
    Rp. 42.069
  </div>

  {/* DEsc */}
  <div className='text-DescFont'>
    <div className='font-medium'>
    Description
    </div>

    <div className='text-black text-opacity-50 mb-6'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper aliquam ipsum. Integer eros felis, pretium eu nisl sed, varius lacinia erat.consectetur adipiscing elit. In semper aliquam ipsum. Integer eros felis, pretium eu nisl sed, varius lacinia erat. Aenean sed urna est. Nunc ut tempus ipsum. Fusce pretium, turpis id porta ultricies, nisl risus tincidunt sem.
    </div>
  </div>

  {/* QTY */}
  <div className='mb-6 '>
<QTYIncrement />
  </div>

  {/* Total */}
  <div className='flex items-center mb-6'>
  <div className='text-black text-opacity-40'>
    Total Price Including Delivery:
  </div>

  <div className='font-medium text-TotalPrice ml-2'>
    Rp124.313
  </div>
</div>

{/* Button */}
  <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600  hover:text-white transition-all duration-300  ml-auto flex-column flex text-white rounded-md w-full h-20 items-center justify-center '>
        <button className='w-full h-full font-semibold text-Rating rounded-md bg-gradient-to-t from-OrderBTNTop to-OrderBTNBot'>Order</button>
    </div>
    </div>
  )
}

export default ProdInfoBox