import React from 'react'
import { Link } from 'react-router-dom';
const ProductContainer = ({item}) => {
    return (
        <div className='w-PCONTWidth2 h-PCONTHeight2 hover:cursor-pointer transition-all duration-300'>

                <div key={item.id} className='w-PCONTWidth h-PCONTHeight hover:cursor-pointer transition-all duration-300'>

                    {/* IMG */}
                    <div className='mb-1 bg-yellow-100 w-PCONTWidth h-PCONTHeight flex align-middle content-center items-center justify-center rounded-md'>
                        <img src={item.ProdIMG} alt="" className='w-PCIMGWidth h-PCIMGHeight'/>
                    </div>

                    {/* Details */}
                    <div>
                        <div className='underline font-bold text-lg'>
                            {item.product_name}
                        </div>

                        <div className='flex flex-row content-center align-middle items-center '>
                            <div>
                                Rp{item.price}
                            </div>
                            <div className='text-black items-center justify-center'>
                                <Link to={`/ProdDet?id=${item.id}`}>
                                <button className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 ml-10 w-16 h-8 font-semibold text-sm rounded-full bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot'>
                                    Find</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

        </div>
    );
};

export default ProductContainer;
