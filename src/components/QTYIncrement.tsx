import React, { useState, useEffect } from 'react';

interface IncrementDecrementBtnProps {
  minValue?: number;
  maxValue?: number;
  remaining?: number;
  count: number;
  onChange: (count: number) => void;
}

const IncrementDecrementBtn: React.FC<IncrementDecrementBtnProps> = ({ minValue = 0, remaining = 50, count, onChange }) => {
  const [localCount, setLocalCount] = useState<number>(count);

  useEffect(() => {
    setLocalCount(count);
  }, [count]);

  const handleIncrementCounter = () => {
    if (localCount < remaining) {
      const newCount = localCount + 1;
      setLocalCount(newCount);
      onChange(newCount);
    }
  };

  const handleDecrementCounter = () => {
    if (localCount > minValue) {
      const newCount = localCount - 1;
      setLocalCount(newCount);
      onChange(newCount);
    }
  };

  return (
      <div className='flex flex-row align-middle content-center'>
        <button onClick={handleDecrementCounter} className='text-white bg-black w-8 h-8 rounded-sm font-bold text-DescFont flex justify-center align-middle content-center'>-</button>
        <span className='font-medium ml-10 mr-10 text-ProfName w-QTYCONTWIDTH flex flex-row justify-center align-middle content-center'>{localCount}</span>
        <button onClick={handleIncrementCounter} className='text-white bg-black w-8 h-8 font-bold rounded-sm text-DescFont justify-center flex align-middle content-center'>+</button>
      </div>
  );
};

export default IncrementDecrementBtn;
