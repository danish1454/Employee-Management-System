import React, {useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({data}) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('admin')
  // }
  // else{
  //   setUsername(data.firstname)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between text-white pb-5'>
        <h1 className='text-2xl font-medium text-black'>Hello  <br/><span className='text-3xl font-semibold'>username</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-2xl'>Log out</button>
    </div>
  )
}

export default Header 