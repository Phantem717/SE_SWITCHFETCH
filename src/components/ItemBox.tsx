import React from 'react'
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
const ItemBox = ({item}) => {
    const navigate = useNavigate();
    const deleteProduct = () => {
        try {

            Swal.fire({
                title: 'Are you sure?',
                text: "Do you wish to delete this product?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post(`http://localhost:80/api/product/delete-product`,
                        {product_id: item.id})
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
                                        window.location.reload();
                                    }
                                })
                            }
                        })
                        .catch(err => {
                            console.error(err);
                        });
                }
            });
                } catch (err) {
            console.error(err);
        }
    }
    const goToEdit = () => {
        navigate(`/updateProduct?id=${item.id}`);
    }
  return (
    <div className=' flex  bg-white w-8/12 flex-col mt-6 mb-2'>
    
    <div className='flex flex-col ml-5 mt-6'>
   
    <div className=' ml-0 flex justify-between mb-4'>
    <div className='flex flex-row content-center'>
    <div className='bg-yellow-100 flex justify-center items-center align-middle p-4 w-32 h-32 rounded-lg  bg-opacity-50'>
        <img src={item.image} alt="" className='w-28 h-24' />
    </div>
    <div className='flex flex-col ml-2'>
        <div className='font-medium text-xl mb-0.5'>
            {item.product_name}
        </div>
        <div className='font-medium text-sm mb-0.5'>
          Stock : {item.remaining_stock}
        </div>

    </div>
    
    </div>
    <div className='font-semibold flex justify-end mr-5 text-lg items-center'>
          Rp. {item.price}
        </div>
    </div>
   

  
    

    </div>
    
        <div>
        </div>

      <div className='flex justify-end'>
        
      <div className=' flex flex-row justify-end'>
        <div className='flex pr-5 mb-4'>
<button className='w-36 h-10 font-normal text-sm bg-gradient-to-b bg-red-500 text-white  hover:text-black transition-all duration-300 hover:font-bold hover:shadow-md hover:shadow-red-400 hover:p-1 hover:bg-red-600  '
onClick={deleteProduct}
>Remove</button>

</div>
<div className='flex  pr-5 mb-4'>
<button
    onClick={goToEdit}
    className='w-36 h-10 text-sm bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot  hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium'>Edit</button>

</div>
        </div>
      </div>

      


</div>
  )
}

export default ItemBox
