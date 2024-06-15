import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const HistoryBox = ({item}) => {
    const navigate = useNavigate();
    const toProduct =  () => {
        navigate(`/ProdDet?id=${item.product_id}`);
    }
    const submitOrder = () => {
        try {
           if (item.status === "On Delivery" && item.seller_done === 1) {
               Swal.fire({
                   title: 'Are you sure?',
                   text: `Are you sure to done this transaction?`,
                   icon: 'warning',
                   showCancelButton: true,
                   confirmButtonText: 'Save',
                   confirmButtonColor: '#3085d6',
                   cancelButtonColor: '#d33',
               }).then((result) => {
                   if (result.isConfirmed) {
                       axios.post(`http://localhost:80/api/transaction/change-status`, {
                           transaction_id: item.id,
                           status: "Done",
                           seller_done: 0
                       })
                           .then(res => {
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


                           })
                           .catch(err => {
                               console.error(err);
                           });
                   }
               });
           }
        } catch (err) {
            console.error(err);
        }
    }
    return (
    <div className=' flex  bg-white w-8/12 flex-col  mb-8'>
    
<div className='flex flex-col ml-5 mt-3'>
<div className='flex flex-row items-center content-center gap-x-2 mb-2' >
    <img src={item.shop_image}  alt="" className='rounded-CircleProfPic w-8 h-8 ' />
    <div className='font-semibold text-xs'>{item.shop_name}</div>
    <button className='w-12 h-5 font-semibold text-xs rounded-full bg-gradient-to-t from-OrderBTNTop to-OrderBTNBot hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300'>Chat</button>

</div>
<div className=' ml-0 flex justify-between mb-4'>
<div className='flex flex-row content-center'>
<div className='bg-yellow-100 flex justify-center items-center align-middle p-4 w-32 h-32 rounded-lg  bg-opacity-50'>
    <img src={item.product_image} alt="" className='w-28 h-24' />
</div>
<div className='flex flex-col ml-2'>
    <div className='font-medium text-xl mb-0.5'>
        {item.product_name}
    </div>
    <div className='font-medium text-sm mb-0.5'>
        Quantity: {item.quantity}
    </div>
   
    
</div>

</div>

<div className='font-semibold flex flex-col items-end mr-5 text-lg ' onClick={submitOrder}><div
    className={`font-medium text-xl mb-2 hover:underline ${
        item.status === 'Pending'
            ? 'text-red-500'
            : item.status === 'Processing'
                ? 'text-orange-500'
                : item.status === 'On Delivery' && item.seller_done === 0
                    ? 'text-yellow-500'
                    : item.status === 'Done'
                        ? 'text-green-500'
                        : item.seller_done === 1 ? 'text-yellow-300 border-4 w-full flex justify-center border-green-700 bg-green-700 hover:text-red-300' : ''
    }`}
>
    {item.seller_done === 0 ? item.status : 'Done'}
</div>
    <div className="mb-0.5">
        Rp. {item.payment}
    </div>
</div>

</div>





</div>

    <div>

    </div>

  <div className='flex justify-end'>
    
  <div className=' flex flex-row justify-end'>
  <div className='flex  pr-5 mb-4'>
      {item && item.status === "Done" ? (


          <button
              className={`w-36 h-10 font-normal text-sm transition-all duration-300 
    ${item.remaining === 0 ? 'bg-dark-blue text-white cursor-not-allowed' : 'bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white'}`}
              onClick={item.remaining === 0 ? null : toProduct}
              disabled={item.remaining === 0}
          >
              Buy Again
          </button>
      ) : (<div></div>)
      }


</div>

    </div>
  </div>

  


</div>
  )
}

export default HistoryBox
