import React, {useEffect, useState} from 'react'
import Navbar from '@/scenes/navbar'
import ProdImg from '../assets/Rectangle64.png'
import Pradah from '../assets/Elige Al Gaib.png'
import axios from "axios";
const ProductDetGall = ({id}) => {

    const mainImg = "bg-opacity-50 flex w-WidthMain h-HeightMain justify-center items-center bg-yellow-100 rounded-lg drop-shadow-lg";
    const optIMG = "bg-opacity-50 w-36 h-32 bg-yellow-100 rounded-lg mr-4 pt-4 pb-4 drop-shadow-lg"

    const [product, setData] = useState(null);

    useEffect(() => {
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
    return (
        product ? (
            <div className='z-0 flex flex-col mt-12'>
                <div className='flex flex-col'>
                    <div className={`${mainImg}`}>
                        <img src={product.image} alt="" className="w-WMIMGWidth h-HMIMGHeight"/>
                    </div>
                </div>
            </div>
        ) : null
    );
}

export default ProductDetGall
