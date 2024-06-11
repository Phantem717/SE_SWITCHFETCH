import React, {useEffect, useState} from 'react'
import QTYIncrement from './QTYIncrement'
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
const ProdInfoBox: React.FC = ({ id }) => {
    const [product, setData] = useState(null);
    const [shop, setShop] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        Swal.showLoading();
        const getData = async () => {
            try {
                axios.get(`http://localhost:80/api/product/${id}`)
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
    }, [id]);
    useEffect(() => {
        if (product) {
            const getShopData = async () => {
                try {
                    const res = await axios.get(`http://localhost:80/api/shop/get-shop-info/${product.shop_id}`);
                    setShop(res.data[0]);
                    Swal.close();
                } catch (err) {
                    console.error(err);
                }
            };
            getShopData();
        }
    }, [product]);

    const [count, setCount] = useState<number>(0);

    const handleCountChange = (newCount: number) => {
        setCount(newCount);
    };
    const goToPayment = () => {

        if(count === 0){
            Swal.fire({
                icon: "error",
                title: "Something Went Wrong",
                text: "Please add quantity",
            });
            return;
        }


        navigate(`/TransactionDetails?product_id=${product.id}&quantity=${count}`);
    };



    return (
        <div>
            {product && shop && (
                <div className='w-EditWidth h-EditHeight flex justify-center mt-12'>
                    <div className=''>

                        {/* Profile Pic */}
                        <div className='flex flex-row justify-start content-center items-center'>
                            <div>
                                <img src={shop.image} alt="" className='rounded-CircleProfPic w-ProfWidth h-ProfHeight ' />
                            </div>

                            <div className='font-bold text-2xl ml-5'>
                                {shop.shop_name}
                            </div>
                        </div>

                        <div className='flex flex-row items-center mt-5'>
                            <div className='font-semibold text-5xl flex justify-start'>
                                {product.product_name}
                            </div>
                        </div>

                        <div className='mt-5 text-4xl font-medium mb-5'>
                            Rp. {product.price}
                        </div>
                        <div className='mt-5 text-xl font-medium mb-5'>
                            Stock: {product.remaining_stock}
                        </div>
                        <div className='mt-5 text-xl font-medium mb-5'>
                            Total Sold: {product.sold}
                        </div>

                        {/* Description */}
                        <div className='text-md'>
                            <div className='font-medium'>
                                Description
                            </div>

                            <div className='text-black text-opacity-50 mb-5'>
                                {product.description}
                            </div>
                        </div>
                        <div className='mb-5'>
                            <QTYIncrement  count={count}
                                           onChange={handleCountChange}
                                           remaining={product.remaining_stock}
                                           minValue={0} />
                        </div>

                        {/* Total */}
                        <div className='flex items-center mb-5'>
                            <div className='text-black text-opacity-40 font-medium text-lg'>
                                Total Price Including Delivery:
                            </div>

                            <div className='font-semibold text-2xl ml-2'>
                                Rp.{product.price * count}
                            </div>
                        </div>

                        {/* Button */}
                        <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600  hover:text-white transition-all duration-300  ml-auto flex-column flex text-white rounded-md w-full h-16 items-center justify-center '>
                            <button className='w-full h-full font-semibold text-2xl rounded-md bg-gradient-to-t from-OrderBTNTop to-OrderBTNBot'
                            onClick={goToPayment}>Order</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default ProdInfoBox
