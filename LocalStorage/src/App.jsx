import React, { useState } from 'react'
import {X } from 'lucide-react'
const App = () => {

  const [destination, setdestination] = useState('');
  const [imageUrl, setimageUrl] = useState();
  const [Description, setDescription] = useState();

const localData  = JSON.parse(localStorage.getItem('all-users')) || []


 const [allUsers, setallUsers] = useState(localData);





 const submitHandler=(e)=>{
 e.preventDefault();
console.log("Submitted");

const oldData = [...allUsers ]
oldData.push({destination, imageUrl , Description})
setallUsers(oldData)
localStorage.setItem('all-users',JSON.stringify(oldData))

setdestination('')
setimageUrl('')
  setDescription('')

  }

const deleteHandler =(idx)=>{
  const copy = [...allUsers];
  copy.splice(idx,1);
  setallUsers(copy);
  localStorage.setItem('all-users' , JSON.stringify(copy));
}




  return (
    <div className='min-h-screen bg-black text-white'>
      
<form className='p-5 flex lg:flex-row flex-col gap-12 ' onSubmit={(e)=>{
submitHandler(e);
}}>

<input type="text"
className='outline:none border-1 px-4 py-3.5 lg:w-1/2 focus:shadow-[inset_1px_1px_8px_#FFFFFF] focus:outline-none'
placeholder='Enter destination name'
value={destination}
onChange={(e)=>{
setdestination(e.target.value);
}}
/>

<input type="text" 
className='outline:none border-1 px-4 py-3.5 lg:w-1/2  focus:shadow-[inset_1px_1px_8px_#FFFFFF] focus:outline-none'
placeholder='Enetr imageUrl'
value={imageUrl}
onChange={(e)=>{
  setimageUrl(e.target.value)
}}
/>

<input type="text"
className='outline:none border-1 px-4 py-3.5 lg:w-1/2  focus:shadow-[inset_1px_1px_8px_#FFFFFF] focus:outline-none'
placeholder='Enetr Description'
value={Description}
onChange={(e)=>{
  setDescription(e.target.value);
}}
/>

<button className='bg-white px-3 py-3.5 text-black text-2xl font-medium rounded-xl lg:text-[15px] lg:px-5 focus:scale-95'>Submit</button>

</form>


<div className='p-7 flex flex-wrap gap-10 text-white'>
 {allUsers.map(function(elem, idx){
  return <div key={idx} className=' w-[220px] bg-white rounded-xl text-black p-2.5'>
       <div className='flex justify-end '>
        <X className='h-6 w-6 p-1 rounded-full bg-black text-white' onClick={()=>{
          deleteHandler(idx)
        }} />
        </div>
        <div className='flex flex-col gap-3.5 items-center mt-1'>
          <h1 className='text-[22px] font-medium'>{elem.destination}</h1>
          <img className='h-[180px] w-full rounded-2xl' src={elem.imageUrl}  />
          <p className='text-[11px] opacity-90'>{elem.Description}</p>
        </div>
  </div>
 })}
</div>

      </div>
  )
}

export default App
