import React from 'react'
import axios from "axios";
import Swal from "sweetalert2";

const SellerBox = ({item}) => {

    let statusNext = "Processing";

    if (item.status === "Pending"){
        statusNext = "Processing";
    } else if (item.status === "Processing") {
        statusNext = "On Delivery";
    } else if (item.status === "On Delivery") {
        statusNext = "Done";
    }

    const changeStatus = () => {
        try {

            Swal.fire({
                title: 'Are you sure?',
                text: `Are you sure changing the status to ${statusNext}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Save',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if(result.isConfirmed){
                    axios.post(`http://localhost:80/api/transaction/change-status`,{
                        transaction_id: item.id,
                        status: statusNext,
                        seller_done: statusNext === "Done" ? 1 : 0
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
        } catch (err) {
            console.error(err);
        }
    }

    const cancelOrder = () => {
        try {

            Swal.fire({
                title: 'Are you sure?',
                text: `Are you sure to cancel this order?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            }).then((result) => {
                if(result.isConfirmed){
                    axios.post(`http://localhost:80/api/transaction/cancel-order`,{
                        transaction_id: item.id,
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
        } catch (err) {
            console.error(err);
        }
    }


  return (

    <div className=' flex  bg-white w-full flex-col mb-4'>
    <div className='flex flex-col ml-5 mt-3'>
    <div className='flex flex-row items-center content-center gap-x-2 mb-2' >
        <img src={item.user_image}  alt="" className='rounded-CircleProfPic w-8 h-8 ' />
        <div className='font-semibold text-xs'>{item.user_name}</div>
        <button className='w-12 h-5 font-semibold text-xs rounded-full bg-gradient-to-t from-OrderBTNTop to-OrderBTNBot'>Chat</button>

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
          Quantity : {item.quantity}
        </div>
       
        
    </div>
    
    </div>
    <div className='font-semibold flex justify-end mr-5 text-lg items-center'>
        {item.status}
        </div>
    </div>
    

    </div>
    
        <div>

        </div>

      <div className='flex justify-between'>
        <div className='text-md font-medium ml-5 flex items-end mb-4'></div>
        

          {
              item && item.seller_done !== 1 && (item.status !== "Done" && item.status !== "Cancelled") ? (
                  <div className=' flex flex-row justify-end'>
                      <div className='flex pr-5 mb-4'>
                          <button onClick={cancelOrder} className='w-36 h-10 font-normal text-sm bg-gradient-to-b bg-red-500 text-white hover:text-black transition-all duration-300 hover:font-bold hover:shadow-md hover:shadow-red-400 hover:p-1 hover:bg-red-600  '>Cancel</button>

                      </div>
                  <div className='flex  pr-5 mb-4'>
                      <button onClick={changeStatus} className='w-36 h-10 font-normal text-sm bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot transition-all duration-300 hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white '>{statusNext}</button>

                  </div>
                  </div>
              ) : (<div> </div>)
          }
      </div>

      


</div>
  )
}

export default SellerBox
