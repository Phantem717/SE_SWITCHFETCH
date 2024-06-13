import React, {useEffect, useState} from 'react'
import Navbar from '@/scenes/navbar'
import Footer from '@/components/Footer'
import SearchBar from '../components/searchBar.tsx'
import {useLocation} from "react-router-dom";
import axios from "axios";
import ItemBox from "@/components/ItemBox";
import CartBox from "@/components/CartBox";

const ItemPage = () => {
    const [shop, setShop] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    useEffect(() => {

        const getShopData = async () => {
            try {
                const res = await axios.get(`http://localhost:80/api/shop/${id}`);
                setShop(res.data);
                console.log(shop);
            } catch (err) {
                console.error(err);
            }
        };
        getShopData();

    }, []);

  return (
    <div className=''>
        <Navbar/>
<div className='bg-gray-200 flex flex-col min-h-screen'>
    <div className='mt-8  flex justify-center'>
    <SearchBar/>
    </div>
   <div className='flex flex-col justify-center items-center'>
   <div className='flex justify-start w-8/12 pr-5   mt-6'>
<button className='w-36 h-10 font-bold text-sm bg-gradient-to-b to-OrderBTNTop from-OrderBTNBot transition-all duration-300  hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white '
>
 Add Item
</button>

</div>

       {shop && shop.length > 0 ? (
           shop.map(item => (
               <ItemBox key={item.id} item={item} />
           ))
       ) : (
           <div>No Cart available</div>
       )}



   </div>


</div>
<Footer/>
    </div>
  )
}

export default ItemPage
