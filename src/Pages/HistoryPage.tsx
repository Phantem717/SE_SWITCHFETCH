import React, {useEffect, useState} from 'react'
import Navbar from '@/scenes/navbar'
import HistoryBox from '../components/HistoryBox'
import Footer from '@/components/Footer'
import ProductContainer from "@/components/ProductContainer";
import axios from "axios";
const HistoryPage = () => {
    const userData = JSON.parse(localStorage.getItem('account'));
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                axios.get(`http://localhost:80/api/transaction/get-transaction/${userData['id']}`)
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
        data && (
    <div className='bg-gray-100'>
        <Navbar />

        <div className='flex justify-center align-middle content-center flex-wrap gap-y-7 mt-10 mb-24 min-h-screen'>
            {data['error'] !== 1 ? (
                data.map(item => (
                    <HistoryBox key={item.id} item={item} />
                ))
            ) : (
                <div>{data['message']}</div>
            )}
        </div>
        <Footer/>
    </div>
  )
    )
}

export default HistoryPage
