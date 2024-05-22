import React from 'react'
import Navbar from '@/scenes/navbar'
import DropDownLocation from './DropDownLocation';
import DropDownGender from './DropDownGender';

const EditProfile = () => {
    const [textName, setTextName] = React.useState('');
    const [textDesc, setTextDesc] = React.useState('');
    const [textEmail, setTextEmail] = React.useState('');
  return (
    <div className='bg-blue-100'>
        <Navbar />
<div className='  mt-12 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Add Profile Picture
        </div>

        <input type='file' className={`bg-white hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  border-2 box-border border-black rounded-lg w-7/12 h-8`} 
            
               />  
    </div>

    <div className='  mt-20 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Name
        </div>

        <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} placeholder='Enter Full Name' 
                value={textName} onChange={e => setTextName(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
        
        
    </div>

    
    <div className='  mt-12 flex flex-row justify-center align-middle items-center z-10'>
        <div className='w-2/12 font-bold'>
        Location
        </div>

        <DropDownLocation />
        
        
    </div>
    <div className='  mt-12 flex flex-row justify-center align-middle items-center z-0'>
        <div className='w-2/12 font-bold'>
        Gender
        </div>

        <DropDownGender />
        
        
    </div>

    <div className='  mt-20 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Email
        </div>

        <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: px-4 border-2 box-border border-black rounded-lg w-7/12 h-8`} placeholder='Enter Email' 
                value={textEmail} onChange={e => setTextEmail(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
        
        
    </div>

    <div className='  mt-12 flex flex-row justify-center align-middle items-center '>
        <div className='w-2/12 font-bold'>
        Profile Description
        </div>

        <input type='text' className={`hover:placeholder:font-normal hover:placeholder:text-black transition-all duration-300 hover:border-2 hover:border-blue-500  hover:bg-blue-200  placeholder: pb-20 placeholder: px-4 pl-2 border-2 box-border border-black rounded-lg w-7/12 h-28`} placeholder='Enter Profile Description' 
                value={textDesc} onChange={e => setTextDesc(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
        
        
    </div>
    <div className='flex justify-end ml-auto mr-44 mt-12'>
    <div className='hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:rounded-md hover:p-1 hover:bg-blue-600  hover:text-white transition-all duration-300  mt-1 flex-column flex text-black bg-navGrad1 rounded-md w-24 h-10 items-center justify-end  '>
        <button className='w-full h-full'>Save</button>
    </div>
    </div>
    

    </div>
  )
}

export default EditProfile