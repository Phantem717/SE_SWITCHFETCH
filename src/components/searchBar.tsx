import React from 'react'


const searchBar = () => {
    const [text, setText] = React.useState('');
    const flexBetween = "flex items-center ";
    return (
        <div className={`${flexBetween} flex items-center`}>
            <div className={`${flexBetween} text-black `}>
                <input type='text' className={`hover:placeholder:text-black hover:rounded-tl-md hover:rounded-bl-md transition-all duration-100 hover:border-2 hover:border-black placeholder:pl-2 rounded-tl-sm rounded-bl-sm w-96 h-8`} 
                placeholder='Cari Produk' 
                value={text} onChange={e => setText(e.target.value)} 
                style={{ fontSize : '1 rem'} }
                />
            </div>
            <div className={`hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-200  hover:text-black transition-all duration-300  flex text-xs text-white bg-navGrad1 rounded-tr-sm rounded-br-sm w-20 h-8 items-center justify-center `}>
                <button className='w-full h-full'>Search</button>
            </div>
        </div>
    )
}

export default searchBar
