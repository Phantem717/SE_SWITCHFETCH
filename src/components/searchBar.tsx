import React from 'react'

const searchBar = () => {
    const [text, setText] = React.useState('');
    const flexBetween = "flex items-center justify-between";
    return (
        <div className={`${flexBetween}`}>
            <div className={`${flexBetween} text-black`}>
                <input type='text' className={`rounded-md w-96`} placeholder='Cari Produk' 
                value={text} onChange={e => setText(e.target.value)} 
                style={{ fontSize : '0.8em' }}/>
            </div>
            <div className={`${flexBetween} text-xs`}>
                <button>Search</button>
            </div>
        </div>
    )
}

export default searchBar