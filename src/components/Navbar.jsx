import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-yellow-500 flex justify-between p-4'>

        <div onClick={()=>navigate('/')} className='cursor-pointer'>
            <h1>logo</h1>
        </div>

        <div>
            <h1 className='text-4xl font-bold'>FireBase Demo</h1>
        </div>
        
        <div className='flex gap-2'>
            <a href='/login' className='py-2 px-4 bg-blue-200 text-red-black font-semibold shadow-lg hover:scale-105 transition-all duration-300 rounded-full'>Login </a>
            <a href='/signup' className='py-2 px-4 bg-blue-200 text-red-black font-semibold shadow-lg hover:scale-105 transition-all duration-300 rounded-full'>SignUp</a>          
        </div>


    </div>
  )
}

export default Navbar