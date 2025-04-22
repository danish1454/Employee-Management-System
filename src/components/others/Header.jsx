import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between text-white pb-5'>
        <h1 className='text-2xl font-medium text-white'>Hello  <br/><span className='text-3xl font-semibold'>Danish</span></h1>
        <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-2xl'>Log out</button>
    </div>
  )
}

export default Header 