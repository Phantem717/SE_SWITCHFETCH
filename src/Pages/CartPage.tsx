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


</div>

        </div>
        <Footer/>
    </div>
  )
}

export default CartPage
