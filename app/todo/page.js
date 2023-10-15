'use client'
import { useState } from 'react';
import Sidenav from '@/components/Sidenav';

export default function Home() {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [tasksArray, setTasksArray] = useState([]);

  const inputChange = (e) => {
    setTask(e.target.value);
  };
  const deadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasksArray([...tasksArray, {task: task, deadline: deadline}]);
      setTask('');
      setDeadline('');
    }
  };

  const handleDelete = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  return (
    <>
    <Sidenav />
    <div className='ml-24 p-12 space-y-4'>
      <h1 className="text-3xl font-bold tracking-tighter">Your To-Do List</h1>
      <form onSubmit={inputSubmit} className='flex gap-4'>
        <input type="text" value={task} onChange={inputChange} placeholder="Enter a task" className='flex-1 bg-gray-100 border-2 border-black/10 rounded-lg p-2 px-4 focus:border-[#81c0c5] transition-all duration-300' />
        <input type="text" value={deadline} onChange={deadlineChange} placeholder="Enter deadline" className='flex-1 bg-gray-100 border-2 border-black/10 rounded-lg p-2 px-4 focus:border-[#81c0c5] transition-all duration-300' />
        <button type="submit" className='p-2 px-4 bg-[#004B62] text-white rounded-lg'>Add task</button>
      </form>
      <ul className='space-y-4'>
        {tasksArray.map((task, index) => (
          <li key={index} className='px-4 p-2 w-full bg-gray-100 rounded-lg border-2 flex justify-between border-black/10'>
            <span>{task.task}</span>
            <div className='space-x-2'>
            <span className='text-sm'>{task.deadline}</span>
            <button onClick={() => handleDelete(index)} className='text-xs p-1 px-3 bg-[#004b62] text-white rounded-lg'>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}