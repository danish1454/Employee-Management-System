import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] px-9 py-6 bg-red-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-9 py-6 bg-green-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-9 py-6 bg-yellow-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers