import React from 'react'
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div>
        <Navbar/>

        <div className='bg-gray-600 flex-grow-0 flex justify-center items-center'>
            <div className='flex flex-col gap-8 pt-8 pb-8'>
                <a href="#" className='py-2 px-12 bg-green-200 text-lg font-semibold rounded-2xl'>Login with Mail</a>
                <a href="#" className='py-2 px-10 bg-green-200 text-lg font-semibold rounded-2xl'>Login with Phone</a>
                <a href="#" className='py-2 px-10 bg-green-200 text-lg font-semibold rounded-2xl'>Login with Google</a>
            </div>
        </div>
    </div>
  )
}

export default Login;