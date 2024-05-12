import React from 'react'

const searchBar = () => {
    const [text, setText] = React.useState('');
    const flexBetween = "flex items-center justify-between";
    return (
        <div className={`${flexBetween} flex items-center`}>
            <div className={`${flexBetween} text-black `}>
                <input type='text' className={`rounded-tl-sm rounded-bl-sm w-96 h-8`} placeholder='Cari Produk' 
                value={text} onChange={e => setText(e.target.value)} 
                style={{ fontSize : '1 rem'} }/>
            </div>
            <div className={`flex text-xs text-white bg-navGrad1 rounded-tr-sm rounded-br-sm w-20 h-8 items-center justify-center `}>
                <button>Search</button>
            </div>
        </div>
    )
}

export default searchBar