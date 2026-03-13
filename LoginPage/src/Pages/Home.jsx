import React from 'react'
import { useNavigate } from "react-router-dom";
const Home = () => {

const navigate = useNavigate();

  return (
         <div className="h-[550px] w-[330px] bg-[url('https://i.pinimg.com/736x/3d/d1/a7/3dd1a7caddcf180e6990eed5dec3511e.jpg')] bg-cover bg-center rounded-2xl flex flex-col justify-between px-2.5 py-4.5">

       <div className=' text-center'>
        <h1 className='text-[40px] font-[cursive] text-white font-medium'>FIND</h1>
       </div>

       <div className='flex flex-col items-center justify-center gap-18'>
        <div>
         <h2 className='text-[24px] font-semibold text-center'>Don't wait</h2>
         <p className='text-[13px] opacity-80'>Get cost experience now..</p>
        </div>
        <div className='w-full mb-3.5'>
          <button className='w-full p-2 rounded-3xl border-none outline-none bg-white text-amber-500 mb-3.5 font-semibold active:scale-95'  onClick={() => navigate("/login")}>Log in</button>
          <button className='bg-transparent border border-amber-600 outline-none text-gray-300 text-[10px]  w-full p-3 font-medium rounded-3xl active:scale-95'onClick={()=>{
            navigate("/Sign")
          }}>Don't have an Account? Sign Up</button>
        </div>
       </div>

      



    </div>
  )
}

export default Home
