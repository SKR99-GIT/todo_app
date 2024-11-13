import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
      <div className='p-4 w-2/6 rounded bg-gray-800'>
      <div className='text-2xl font-semibold'>Sign-Up</div>
      <input type="username" placeholder='username' className='bg-gray-700 px-3 py-2 my-3 w-full rounded'name='username'/>

      <input type="email" placeholder='email' className='bg-gray-700 px-3 py-2 my-3 w-full rounded'name='abc@email.com' required/>

      <input type="password" placeholder='password' className='bg-gray-700 px-3 py-2 my-3 w-full rounded'name='password'/>
      <div className='w-full flex items-center justify-between'>
      <button className='bg-yellow-400 text-xl font-semibold text-black px-3 py-2 rounded'>SignUp</button>
      <Link to="/login" className='text-gray-600 hover:text-yellow-400'>Already having an account? Login here</Link>
      </div>
      </div>
    </div>
  )
}

export default Signup