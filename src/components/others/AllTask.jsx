import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48 noScrollBar'>  {/* noScrollBar mene banaye hai */}
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                    <h2 className='text-lg font-medium w-1/5'>New Task</h2>
                    <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                    <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                    <h5 className='text-lg font-medium w-1/5'>Failed</h5>
                </div>
        <div className='h-[80%] overflow-auto noScrollBar'>
        {authData.employees.map((elem) => (
            <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>{elem.firstname}</h2>
                <h2 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.new}</h2>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCount.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
            </div>
            ))}
        </div>

    </div>
  )
}

export default AllTask