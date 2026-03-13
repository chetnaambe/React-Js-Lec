import React, { useState } from 'react'
import  {Mail } from 'lucide-react'
import {Lock}  from 'lucide-react'
  import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();

const [userMail, setuserMail] = useState('');
const [userPass, setuserPass] = useState('');
const [allUsers, setallUsers] = useState([]);

const submitHandle =(e)=>{
e.preventDefault();
console.log("Submitted");


if(userPass.length<6){
    alert("Password must be at least 6 characters")
}



setallUsers([...allUsers, {userMail, userPass}])
setuserMail('')
setuserPass('')

}

  return (
    <div className="h-[550px] w-[330px] bg-[url('https://i.pinimg.com/736x/3d/d1/a7/3dd1a7caddcf180e6990eed5dec3511e.jpg')] bg-cover bg-center rounded-2xl p-4 flex flex-col items-center gap-2">
     <div className='flex flex-col items-center px-3.5 py-6'>
       <h1 className='text-xl font-medium'>Login</h1>
      <p className='text-[13px] text-gray-300'>Create your Own itenerary!</p>
     </div>
     <form className='flex flex-col items-center justify-center h-full w-full bg-[#fce8bd03] rounded-4xl gap-5 p-9'onSubmit={(e)=>{
submitHandle(e)
     }}>
    <div className="flex items-center gap-5 border-b-2  border-amber-600">
        <Mail size={22} className="text-amber-600" />

        <input
          type="text"
          placeholder="Email"
          className="w-full py-2 outline-none bg-transparent text-[16px]"
          value={userMail}
          required
          onChange={(e)=>{
            setuserMail(e.target.value)
          }}
        />
      </div>


        <div className="flex items-center gap-5 border-b-2  border-amber-600">
        <Lock size={22} className="text-amber-600" 
 /> 
        <input
          type="password"
          placeholder="Password"
          className="w-full py-2 outline-none bg-transparent text-[16px]"
          value={userPass}
          minLength={6}
          required
        onChange={(e)=>{
          setuserPass(e.target.value)
        }}
        />
      </div>

      <button className='bg-amber-600 w-full ml-5.5 mr-7 p-2.5 mt-8 rounded-xl active:scale-90' >Log in</button>
     </form>


    </div>
  )
}

export default Login
