import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';

import { useFirebase } from '../context/Firebase';
import {useNavigate} from 'react-router-dom';

const Login = () => {

  const firebase = useFirebase();
  console.log('firebase', firebase);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () =>{
    firebase.LoginUserWithEmailAndPassword(email, password)
    // alert('Login successful')
    setTimeout(()=>{
      
      navigate('/');
      
    },1000)
   
  }
  

  return (
    <div>
        <Navbar/>

       
      <div className='bg-gray-600'>

        <img src={logo} alt="logo" className='w-20 mx-auto pt-8'/>
        <h1 className='text-center pt-16 text-white text-xl font-bold'>Login</h1>

      <div className='flex flex-col justify-center items-center pt-6 gap-5'>
        <div className='flex flex-col'>
          <label htmlFor="eamil" className='text-lg text-white font-semibold pl-2'>Username</label>
        <input
        required
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        type="email" name='email' id='email' placeholder='enter your email' className='rounded-2xl py-1 px-2 w-[24dvw] '/>
        </div>
        

        <div className='flex flex-col'>
        <label htmlFor="password" className='text-lg text-white font-semibold pl-2'>Password</label>
        <input
        required
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        type='password' name='password' id='password' placeholder='enter your password ' className='rounded-2xl px-2 py-1 w-[24dvw]'/>
        </div>
        
        <button  onClick={Login} className='bg-blue-300 py-2 px-16 text-lg font-semibold  rounded-full'>Login</button>
      </div>

      <div className='flex justify-center items-center pt-8'>
            <div className='w-40 h-[1px] bg-white'></div>
            <p className='text-white text-xl pr-2 pl-2'>or</p> 
            <div className='w-40 h-[1px] bg-white'> </div>
      </div>

        <div className=' flex-grow-0 flex justify-center items-center'>
            <div className='flex  gap-8 pt-8 pb-8'>
                <a href="#" className='py-2 px-10 bg-green-200 text-lg font-semibold rounded-2xl'>Login with Phone</a>
                <a href="#" className='py-2 px-10 bg-green-200 text-lg font-semibold rounded-2xl'>Login with Google</a>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Login;