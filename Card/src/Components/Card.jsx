import React from 'react'
import {X} from 'lucide-react'
import {Bookmark } from 'lucide-react'
const Card = (props) => {


  return (
    <div className='bg-gradient-to-b from-[#EBEBEB] via-[#b9e2ed] to-[#90d5df] w-[250px] rounded-3xl text-black border-2 border-white p-3.5 flex items-center flex-col justify-start gap-1'>
       
       <img className='h-17 w-17 rounded-full object-cover object-center' src={props.elem.imageUrl} alt="" />
       <h1 className='text-[20px] font-medium'>{props.elem.userName}</h1>
       <p className='text-[15px] opacity-40'>{props.elem.userRole}</p>
       <div className='flex gap-2 flex-row '>
        <button className='bg-transparent border-1 border-[white]  px-2 py-1 rounded-2xl text-[#4f4d4d] text-[10px] mt-1.5'>{props.elem.userSkills}</button>
        <button className='bg-transparent border-1 border-[white]  px-2 py-1 rounded-2xl  text-[10px] mt-1.5'>{props.elem.userSkill}</button>
       </div>
       <div className='flex items-center gap-3 mt-9.5' >
        <button className='bg-transparent border-1 border-white px-4 py-2 font-medium rounded-full'>Get in touch</button>
        <button className='bg-white px-1.5 py-1.5 rounded-full '><Bookmark /></button>
       <button className='bg-white  px-1.5 py-1.5 rounded-full' onClick={()=>{
      props.deleteHandler(props.idx)
       }}>  < X /></button>
       </div>

    </div>
  )
}

export default Card