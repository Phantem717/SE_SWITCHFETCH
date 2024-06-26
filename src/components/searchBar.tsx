import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [text, setText] = useState('');
    const flexBetween = "flex items-center";

    const inputText = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = event.target.value;
        setText(value);
        onSearch(value);
    };

    const handleOnSearch = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onSearch(text);
    };


    return (
        <div className={`${flexBetween} flex items-center`}>
            <div className={`${flexBetween} text-black`}>
                <input
                    type='text'
                    className={`border-2 border-black hover:placeholder:text-black transition-all duration-100 hover:border-2 hover:border-black rounded-md w-SearchWidth h-9 pl-4 mr-2`}
                    placeholder='Cari Produk'
                    value={text}
                    onChange={inputText}
                    style={{ fontSize: '1rem' }}
                />
            </div>
            <div className={`hover:font-bold hover:shadow-md hover:shadow-blue-400 hover:p-1 hover:bg-blue-200 hover:text-black transition-all duration-300 flex text-xs text-white bg-navGrad1 rounded-md w-20 h-9 items-center justify-center`}>
                <button
                    type='submit'
                    className='w-full h-full'
                    onClick={handleOnSearch}
                    style={{ fontSize: '1rem' }}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
