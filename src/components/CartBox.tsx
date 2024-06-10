import React, {useEffect, useState} from 'react'
import ProdImg from '../assets/Rectangle64.png'
import ProfImg from '../assets/Elige Al Gaib.png'
import axios from "axios";
const CartBox = ({item}) => {
    console.log(item);
    const [shop, setShop] = useState(null);
    useEffect(() => {
        if (item) {
            const getShopData = async () => {
                try {
                    const res = await axios.get(`http://localhost:80/api/shop/get-shop-by-product/${item.product_id}`);
                    setShop(res.data[0]);
                } catch (err) {
                    console.error(err);
                }
            };
            getShopData();
        }
    }, [item]);

    return (
        shop && (
    <div className=' flex  bg-white w-7/12 flex-col justify-between'>
        <div className='flex flex-col ml-5 mt-3'>
        <div className='flex flex-row items-center content-center gap-x-2 mb-2' >
            <img src={shop.image}  alt="" className='rounded-CircleProfPic w-8 h-8 ' />
            <div className='font-semibold text-xs'>{shop.name}</div>
            <button className='w-12 h-5 font-semibold text-xs rounded-full bg-gradient-to-t from-OrderBTNTop to-OrderBTNBot'>Chat</button>

        </div>
        <div className='flex flex-row content-center'>
        <div className='bg-yellow-100 flex justify-center items-center align-middle p-4 w-32 h-32 rounded-lg  bg-opacity-50'>
            <img src={item.image} alt="" className='w-28 h-24' />
        </div>
        <div className='flex flex-col ml-2'>
            <div className='font-medium text-xl mb-0.5'>
                {item.product_name}
            </div>
            <div className='font-medium text-sm mb-0.5'>
              Quantity : {item.quantity}
            </div>
        
        </div>
        </div>
        

        </div>
        <div className='font-semibold flex justify-end mr-5 text-lg'>
              Rp. {item.price}
            </div>





            <div className=' flex flex-row justify-end'>
            <div className='flex pr-5 mb-4'>
<button className='w-36 h-10 font-normal text-sm bg-gradient-to-b bg-red-500 text-white hover:text-black transition-all duration-300 hover:bg-red-600'>Remove</button>

</div>
<div className='flex  pr-5 mb-4'>
<button className='w-36 h-10 font-normal text-sm bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot transition-all duration-300 hover:text-white'>Checkout</button>

</div>
            </div>
    

    </div>

        )
    )
}

export default CartBox
