import React, {useEffect, useState} from 'react'
import Navbar from '@/scenes/navbar'
import CartBox from '@/components/CartBox'
import Footer from '@/components/Footer'
import axios from "axios";
import ProductContainer from "@/components/ProductContainer";
const CartPage = () => {
    const userData = JSON.parse(localStorage.getItem('account'));
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                axios.get(`http://localhost:80/api/cart/${userData['id']}`)
                    .then(res => {
                        setData(res['data']);
                    })
                    .catch(err => {
                        console.error(err);
                    });
            } catch (err) {
                console.error(err);
            }
        };
        getData();
    }, []);

  return (
    <div className='bg-gray-100 '>
        <Navbar/>
        <div className='flex justify-center align-middle content-center flex-wrap gap-y-7 mt-10 flex-col'>
            {data ? (
                data.map(item => (
                    <CartBox key={item.id} item={item} />
                ))
            ) : (
                <div>No data available</div>
            )}

<div className='flex flex-row bg-white w-7/12 justify-center align-middle items-center mb-20'>
<div className='ml-3 mt-1'>
    <div className='font-semibold text-lg'>
    Your Address
    </div>
    <div className='box-border border-2
border-gray-200 w-full h-6/6 flex justify-centeralign-middle items-center'>
    <div className='font-normal  text-md w-10/12 mb-6 ml-1 mt-1'>
    Jl. Raya Kb. Jeruk No.27, RT.1/RW.9, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
    </div>
    </div>
  
</div>

<div className=' flex justify-end align-bottom items-end flex-col w-full mt-20'>
<div className='text-xs flex flex-row items-center mr-5'>
            Total Price Including Delivery:  
            <div className='text-lg font-semibold  text-black ml-2'>
             Rp. 123.000
          </div>
          </div>

          
          <div className='flex justify-end pr-5 mb-4'>
<button className='w-36 h-10 font-normal text-sm bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot '>Buy Again</button>

</div>
</div>

</div>

        </div>
        <Footer/>
    </div>
  )
}

export default CartPage
