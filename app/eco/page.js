'use client'
import { useState } from 'react';
import Sidenav from '@/components/Sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown19, faArrowDown91 } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [expense, setexpense] = useState('');
  const [total, settotal] = useState(0.0);
  const [amount, setamount] = useState('');
  const [reversed, setreversed] = useState(false);
  const [expensesArray, setexpensesArray] = useState([]);

  const inputChange = (e) => {
    setexpense(e.target.value);
  };
  const amountChange = (e) => {
    setamount(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (expense.trim()) {
      setexpensesArray([...expensesArray, {expense: expense, amount: parseFloat(amount)}]);
      setexpense('');
      setamount('');
      settotal(total+parseFloat(amount));
      expensesArray.sort(compareByAmount);
    }
  };

  const handleReverse = () => {
    setreversed(!reversed)
    expensesArray.reverse()
  }

  const compareByAmount = (a,b) => {
    return a.amount - b.amount;
  }

  const handleDelete = (index) => {
    settotal(total-parseFloat(expensesArray[index].amount));
    setexpensesArray(expensesArray.filter((_, i) => i !== index));
    expensesArray.sort(compareByAmount);
  };

  return (
    <>
    <Sidenav />
    <div className='ml-24 p-12 space-y-4'>
      <h1 className="text-3xl font-bold tracking-tighter">Your Economy Logger</h1>
      <form onSubmit={inputSubmit} className='flex gap-4'>
        <input type="text" value={expense} onChange={inputChange} placeholder="Enter expense" className='flex-1 bg-gray-100 border-2 border-black/10 rounded-lg p-2 px-4 focus:border-[#81c0c5] transition-all duration-300' />
        <input type="text" value={amount} onChange={amountChange} placeholder="Enter amount" className='flex-1 bg-gray-100 border-2 border-black/10 rounded-lg p-2 px-4 focus:border-[#81c0c5] transition-all duration-300' />
        <button type="submit" className='p-2 px-4 bg-[#004B62] text-white rounded-lg'>Add expense</button>
        <button onClick={handleReverse} className='p-2 px-4 bg-[#004B62] text-white rounded-lg'>{reversed ? <FontAwesomeIcon icon={faArrowDown91} /> : <FontAwesomeIcon icon={faArrowDown19} />}</button>
      </form>
      <ul className='space-y-4'>
        {expensesArray.map((expense, index) => (
          <li key={index} className='px-4 p-2 w-full bg-gray-100 rounded-lg border-2 flex justify-between border-black/10'>
            <span>{expense.expense}</span>
            <div className='space-x-2'>
            <span className='text-sm'>₹ {expense.amount}</span>
            <button onClick={() => handleDelete(index)} className='text-xs p-1 px-3 bg-[#004b62] text-white rounded-lg'>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <h1>Total Expenses: ₹ {total}</h1>
    </div>
    </>
  );
}