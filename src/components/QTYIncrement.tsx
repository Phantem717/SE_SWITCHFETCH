import React, { useState } from 'react';

interface IncrementDecrementBtnProps {
  minValue?: number;
  maxValue?: number;
}

const IncrementDecrementBtn: React.FC<IncrementDecrementBtnProps> = ({ minValue = 0, maxValue = 100 }) => {
  const [count, setCount] = useState<number>(minValue);

  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className='flex flex-row  align-middle content-center '>
      <button onClick={handleDecrementCounter} className='text-white bg-black px-3 py-1 font-bold text-DescFont flex justify-center align-middle content-center'>-</button>
      <span className='font-medium ml-10 mr-10 text-ProfName w-QTYCONTWIDTH flex flex-row justify-center align-middle content-center'>{count}</span>
      <button onClick={handleIncrementCounter} className='text-white  bg-black px-3 py-1 font-bold rounded-sm text-DescFont justify-center flex align-middle content-center'>+</button>
    </div>
  );
};

export default IncrementDecrementBtn;
