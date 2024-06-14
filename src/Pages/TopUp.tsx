import React, { useState } from 'react';
import Navbar from '@/scenes/navbar';
import Footer from '@/components/Footer';
import ProfIMG from '@/assets/Elige Al Gaib.png';
import Indomaret from '@/assets/Logo_Indomaret.png';
import QRIS from '@/assets/QRIS_logo.svg';
import OVO from '@/assets/OVO.png';
import DANA from '@/assets/Logo_dana_blue.svg.png';
import Gopay from '@/assets/logo-gopay-vector.png';
import spay from '@/assets/SPAY.png';
import Swal from "sweetalert2";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const TopUp: React.FC = () => {
    const navigate = useNavigate();
    const [textNominal, setTextNominal] = useState('');
    const [textEmail, setTextEmail] = useState('');
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const userData = JSON.parse(localStorage.getItem('account'));
    const options = [
        { src: spay, alt: 'SPay', width: 'h-12 w-12' },
        { src: QRIS, alt: 'QRIS', width: 'h-24 w-36' },
        { src: Gopay, alt: 'Gopay', width: 'h-8 w-24' },
        { src: DANA, alt: 'DANA', width: 'h-8 w-24' },
        { src: OVO, alt: 'OVO', width: 'h-8 w-20' },
        { src: Indomaret, alt: 'Indomaret', width: 'h-8 w-24' }
    ];

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    const commonClasses = "border-2 box-border font-semibold items-center justify-center flex mr-4 h-10 cursor-pointer transition-all duration-300";
    const grayClasses = "border-gray-400 text-gray-400";
    const blueClasses = "border-blue-700 text-blue-700 font-bold";

    const topUp = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to top up this amount?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then((result) => {
            if(result.isConfirmed){

                axios.post('http://localhost:80/api/auth/top-up',{
                   amount: textNominal,
                    user_id:userData['id']
                })
                    .then(res => {
                        if (res['data']['error'] == 1){
                            Swal.fire({
                                icon: "error",
                                title: "Failed",
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
                                    navigate(`/Home`)
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
    }
    return (
        <div className='bg-gray-200 min-h-screen'>
            <Navbar />
            <div className='flex justify-center mt-16 mb-16'>
                <div className='rounded-md bg-white w-9/12 h-PAYHEIGHT flex flex-row align-middle content-center justify-center'>
                    <div className='flex flex-col align-middle'>
                        <div className='text-xl font-medium mb-4 mt-6'>Top Up</div>
                        <div className='mb-8 flex flex-row items-center align-middle font-medium'>
                            <img src={userData['photo']} alt="" className='rounded-full w-10 h-10 mr-2' />
                            <div>
                                {userData['name']} - Rp. {userData['balance']}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='text-sm font-medium mb-1'>
                                Jumlah Nominal
                            </div>
                            <input
                                type='text'
                                className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500 hover:bg-blue-300 placeholder:px-4 border-2 box-border border-gray-400 w-full h-8`}
                                placeholder='Masukkan Nominal Disini'
                                value={textNominal}
                                onChange={e => setTextNominal(e.target.value)}
                                style={{ fontSize: '1rem' }}
                            />
                        </div>
                        <div className='w-TXTWIDTH'>
                            <div className='text-sm font-medium mb-1'>
                                Email (Bukti Pembayaran)
                            </div>
                            <input
                                type='text'
                                className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500 hover:bg-blue-300 placeholder:px-4 border-2 box-border border-gray-400 w-full h-8`}
                                placeholder='Masukkan Email Disini'
                                value={textEmail}
                                onChange={e => setTextEmail(e.target.value)}
                                style={{ fontSize: '1rem' }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-wrap h-48 mt-36 w-6/12 justify-center'>
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={`mb-4 mr-4 cursor-pointer items-center flex justify-center bg-white border-2 box-border rounded-lg w-56 h-16 ${selectedIndex === index ? blueClasses : grayClasses}`}
                                onClick={() => handleClick(index)}
                            >
                                <img src={option.src} alt={option.alt} className={option.width} />
                            </div>
                        ))}
                        <div className='flex flex-col justify-end mr-12 ml-auto'>
                            <button onClick={topUp}className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-600 hover:text-white transition-all duration-300 w-32 h-8 font-semibold text-sm rounded-md bg-gradient-to-b from-OrderBTNTop to-OrderBTNBot'>
                                Top Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TopUp;
