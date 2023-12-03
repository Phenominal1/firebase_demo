import React, {useState} from 'react'
import Navbar from '../components/Navbar';

import {getAuth, createUserWithEmailAndPassword} from'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import {app} from '../firebase-config';


const db = getDatabase(app);
const auth =getAuth(app);

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const putData = (e) =>{
        set(ref(db, "users/ritesh"),{
            id:1,
            name: 'Ritesh Dubey',
            age:21,
        });
    };


    const Signup = () => {
        createUserWithEmailAndPassword(
            auth, 
            email, 
            password,
            ).then((value)=>alert("Signup successfully"));
            window.location.reload();
    };
   
  return (
    <div className='bg-gray-600'>
        <Navbar/>

        
            <div className='flex flex-col gap-6 justify-center items-center pt-6'>
                <div className='flex gap-16 items-center'>
                    <label htmlFor="name" className='text-white font-semibold text-lg'>Name: </label>

                    <input  
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder='enter your name' 
                    className='rounded-xl p-2'/>
                </div>
                
                <div className='flex gap-8 items-center'>
                <label htmlFor="password" className='text-white font-semibold text-lg'>Password: </label>

                    <input 
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password} 
                    type="password" 
                    name='password' 
                    id="password" 
                    placeholder='enter your password' 
                    className='rounded-xl p-2'/>
                </div>

                <div className='flex gap-16 items-center'>
                    <label htmlFor="email" className='text-white font-semibold text-lg'>Email: </label>
                    <input 
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email}
                     type="email"
                      name="email" 
                      id="email" 
                      placeholder='enter your email' 
                      className='rounded-xl p-2'/>
                </div>
                
                <div className='flex gap-4 items-center'>
                    <label htmlFor="mobile" className='text-white font-semibold text-lg'>Mobile No: </label>
                    <input type="text" name='mobile' id='mobile' placeholder='enter yout mobile number' className='rounded-xl p-2'/>
                </div>
                
                <div className='flex gap-16 items-center'>
                    <label htmlFor="gender" className='text-white font-semibold text-lg'>Gender: </label>
                    <select name="gender" id="gender" className='rounded-xl p-2' >
                        <option value="1" selected disabled>select your gender</option>
                        <option value="2">male</option>
                        <option value="3">female</option>
                    </select>
                </div>

                <a href="#"  className='px-12 py-2 bg-blue-500 font-semibold text-lg text-white hover:scale-105 transition-all duration-300 shadow-xl rounded-full mt-8' onClick={Signup}>Submit</a>

            </div>
 

        <div className='flex justify-center items-center pt-8'>
            <div className='w-40 h-[1px] bg-white'></div>
            <p className='text-white text-xl pr-2 pl-2'>or</p> 
            <div className='w-40 h-[1px] bg-white'> </div>
        </div>
        

        <div className=' flex-grow-0 flex justify-center items-center'>
            <div className='flex flex-col gap-8 pt-8 pb-8'>
                {/* <a href="#" onClick={Signup} className='py-2 px-12 bg-green-200 text-lg font-semibold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300' >SignUp with Mail</a> */}
                <a href="#" className='py-2 px-10 bg-green-200 text-lg font-semibold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300'>SignUp with Phone</a>
                <a href="#" onClick={putData} className='py-2 px-10 bg-green-200 text-lg font-semibold rounded-2xl shadow-xl hover:scale-105 transition-all duration-300' >SignUp with Google</a>
            </div>
        </div>
    </div>
  )
}

export default SignUp;