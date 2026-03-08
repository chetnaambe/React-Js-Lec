import React, { useState } from 'react'



const App = () => {
const [taskName, settaskName] = useState('');
const [details, setdetails] = useState('');
const [allTodo, setallTodo] = useState([]);

const submitHandler = (e)=>{
e.preventDefault();
console.log("Submitted");

setallTodo([...allTodo ,{taskName, details}])
setdetails('')
settaskName('')
}


const deleteHandler = (idx)=>{
  const remove = [...allTodo]
  remove.splice(idx,1)
  setallTodo(remove)
}


  return (
    <div className='p-6 bg-black h-screen text-white'>
<div className='flex items-center justify-between h-full w-full'>

  <form className='h-full w-[35%] p-5.5 flex gap-12 flex-col' onSubmit={submitHandler}>
      
        <h1 className='text-center text-3xl font-bold'>Add Task</h1>
        <input className='outline outline-emerald-600 w-full p-3.5' type="text" placeholder='Enter Task' value={taskName} onChange={(e)=>{
          settaskName(e.target.value);
        }}/>
<textarea name="" id="" placeholder='Enter Details' cols={20} rows={18} className='outline outline-emerald-600 w-full p-3.5' value={details} onChange={(e)=>{
  setdetails(e.target.value);
}}></textarea>
        <button className='bg-emerald-700 px-3 py-3 rounded font-bold'>Submited</button>
   
</form>


    <div className=' h-full w-[60%] text-white p-15 flex flex-wrap   gap-5 overflow-auto'>
      
      {allTodo.map(function(elem, idx){
      return <div className='h-[300px] w-[200px] bg-white text-black rounded-2xl p-2'>
        {/* <X className='bg-orange-700 text-white size-8 py-1 px-1 rounded-full ' /> */}
        <h1 className='text-center text-3xl font-semibold '>{elem.taskName}</h1>
        <p className='mt-8 text-[15px]'>{elem.details}</p>

<div className='text-center text-white' >
        <button className='bg-red-600 px-4.5 py-2.5 rounded' onClick={()=>{
          deleteHandler(idx)
        }}>Clear</button>
</div>
      </div>

     })}
    </div>
</div>

    </div>
  )
}

export default App
