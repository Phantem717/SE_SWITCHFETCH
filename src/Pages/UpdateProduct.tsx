import React, {useEffect, useState} from 'react';
import Navbar from '@/scenes/navbar'
import Footer from '@/components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useLocation, useNavigate} from "react-router-dom";

const UpdateProduct = () => {
    const [product, setProduct] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    useEffect(() => {

        const getProductData = async () => {
            try {
                const res = await axios.get(`http://localhost:80/api/product/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.error(err);
            }
            console.log(product);
        };
        getProductData();

    }, []);

        const [textProd, setTextProd] = useState('');
        const [textDesc, setTextDesc] = useState('');
        const [textQty, setTextQty] = useState('');
        const [textPrice, setTextPrice] = useState('');
        const [imgURL, setImgURL] = useState('');


    useEffect(() => {
        if (product) {
            setTextProd(product.product_name || '');
            setTextDesc(product.detail || '');
            setTextQty(product.remaining_stock || 0);
            setTextPrice(product.price || '');
            setImgURL(product.image || '');
        }
    }, [product]);

    let data : any;
    const inputTextProd = (event: any) => {
        setTextProd(event.target.value);
    };
    const inputTextPrice = (event: any) => {
        setTextPrice(event.target.value);
    };
    const inputTextQty = (event: any) => {
        setTextQty(event.target.value);
    };
    const inputTextDesc = (event: any) => {
        setTextDesc(event.target.value);
    };
    const inputImgURL = (event: any) => {
        setImgURL(event.target.value);
    };

    const handleOnSave = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to save changes?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Save',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if(result.isConfirmed){
                axios.post(`http://localhost:80/api/product/edit-product`,
                    {product_id: product.id,
                    product_name: textProd,
                    price: textPrice,
                    remaining_stock: textQty,
                    image: imgURL,
                    detail: textDesc})
                    .then(res => {
                        if (res['data']['error'] == 1) {
                            Swal.fire({
                                icon: "error",
                                title: "Failed to Delete",
                                text: res['data']['message'],
                            });
                        } else {
                            Swal.fire({
                                title: 'Success',
                                text: `${res['data']['message']}`,
                                icon: 'success',
                                confirmButtonText: 'Ok',
                                confirmButtonColor: '#3085d6',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate(`/itempage?id=${product.shop_id}`)
                                }
                            })
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        });
    }

  return (
      product ? (
          <div className='bg-blue-100 min-h-screen'>
              <Navbar />

              <div className='  mt-20 flex flex-row justify-center align-middle items-center '>
                  <div className='w-2/12 font-bold'>
                      Product Name
                  </div>

                  <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200 placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`}
                         placeholder='Enter Product Name'
                         value={textProd}
                         onChange={inputTextProd}
                         style={{ fontSize : '1 rem'} }/>


              </div>

              <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
                  <div className='w-2/12 font-bold'>
                      Price
                  </div>

                  <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`}
                         placeholder='Enter Product Price'
                         value={textPrice}
                         onChange={inputTextPrice}
                         style={{ fontSize : '1 rem'} }/>


              </div>

              <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
                  <div className='w-2/12 font-bold'>
                      Remaining Stock
                  </div>

                  <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`}
                         placeholder='Enter Remaining Stock'
                         value={textQty}
                         onChange={inputTextQty}
                         style={{ fontSize : '1 rem'} }/>


              </div>

              <div className='  mt-12 flex flex-row justify-center align-middle'>
                  <div className='w-2/12 font-bold'>
                      Product Description
                  </div>

                  <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: pb-20 placeholder: px-4 pl-2 border-2 box-border border-black rounded-lg w-7/12 h-28`}
                         placeholder='Enter Product Description'
                         value={textDesc}
                         onChange={inputTextDesc}
                         style={{ fontSize : '1 rem'} }/>


              </div>

              <div className='mt-12 flex flex-row justify-center align-middle items-center' >
                  <div className='w-2/12 font-bold'>
                      Add Product Picture
                  </div>
                  <input
                      type='text'
                      className='hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8'
                      placeholder='Enter Image Link'
                      value={imgURL}
                      onChange={inputImgURL}
                      style={{ fontSize : '1 rem'} }
                  />
              </div>

              <div className='mt-4 flex justify-center'>
                  <img src={imgURL} className={`flex items-center justify-center h-48`} alt="" />
              </div>

              <div className='flex justify-end ml-auto mr-44 mt-12 pb-12'>
                  <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 mt-1 mr-3 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-end'>
                      <button
                          type='submit'
                          className='w-full h-full'
                          onClick={handleOnSave}
                      >
                          Save
                      </button>
                  </div>
              </div>
              <Footer/>
          </div>
      ) : (<div>No Product Found</div>)

  )
}

export default UpdateProduct
