import React, { useEffect, useState } from 'react';
import Navbar from '@/scenes/navbar';
import CartBox from '@/components/CartBox';
import Footer from '@/components/Footer';
import axios from 'axios';

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
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <main className="flex-grow flex flex-col justify-center items-center gap-y-7 mt-10">
                {data && data.length > 0 ? (
                    data.map(item => (
                        <CartBox key={item.id} item={item} />
                    ))
                ) : (
                    <div>No Cart available</div>
                )}
                <div className="flex flex-row bg-white w-7/12 justify-center items-center mb-20"></div>
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;
