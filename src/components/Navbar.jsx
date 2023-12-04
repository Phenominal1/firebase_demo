import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { FirebaseAuth, useFirebase } from '../context/Firebase'
import {onAuthStateChanged, signOut } from 'firebase/auth'

const Navbar = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    const auth =FirebaseAuth;
    

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
        })
    },[])

  return (
    <div className='bg-yellow-500 flex justify-between p-4'>

        <div onClick={()=>navigate('/')} className='cursor-pointer'>
            <h1>logo</h1>
        </div>

        <div>
            <h1 className='text-4xl font-bold'>FireBase Demo</h1>
        </div>
        
   
            {
                user===null?
                (
                <div className='flex gap-2'>
                    <button onClick={()=>navigate('/login')} className='py-2 px-4 bg-blue-200 text-red-black font-semibold shadow-lg hover:scale-105 transition-all duration-300 rounded-full'>Login </button>
                    <button onClick={()=>navigate('/signup')} className='py-2 px-4 bg-blue-200 text-red-black font-semibold shadow-lg hover:scale-105 transition-all duration-300 rounded-full'>SignUp</button>     
                </div>
                )
                :
                (
                    <div className='flex gap-2'>
                        <button onClick={()=>signOut(auth)} className='py-2 px-4 bg-blue-200 text-red-black font-semibold shadow-lg hover:scale-105 transition-all duration-300 rounded-full'>Logout </button>
                        <button onClick={()=>navigate('/signup')} className='py-2 px-4 bg-blue-200 text-red-black font-semibold shadow-lg hover:scale-105 transition-all duration-300 rounded-full'>Edit</button>     
                    </div>
                )
            }
                 
        


    </div>
  )
}

export default Navbar