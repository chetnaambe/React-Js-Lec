import React, { useState } from 'react'
import Card from './Components/Card'
const App = () => {

  const [imageUrl, setimageUrl] = useState('');
  const [userName, setuserName] = useState('');
  const [userRole, setuserRole] = useState('');
  const [userSkills, setuserSkills] = useState('');
  const [userSkill, setuserSkill] = useState('');
const [allUsers, setallUsers] = useState([]);


const formHandler = (e)=>{
  e.preventDefault();
  console.log("Submitted");


setallUsers([...allUsers , {imageUrl, userName, userRole, userSkills, userSkill}])

  setimageUrl('')
  setuserName('')
  setuserRole('')
  setuserSkills('')
   setuserSkill('')
}  

const deleteHandler = (idx)=>{
    const remove = [...allUsers]
    remove.splice(idx,1)
    setallUsers(remove)
}

  return (
    <div className='h-screen bg-black text-white'>
  
           <form className='p-5' onSubmit={(e)=>{
               formHandler(e)
           }}>
             <input className='outline-none border-1 px-3 m-2 py-3 w-[45%]' 
             type="text" 
             placeholder='Enter img Url'
             value={imageUrl}
             onChange={(e)=>{
              setimageUrl(e.target.value);
             }}
              />

              <input className='outline-none border-1 px-3 py-3 m-2 w-[45%]'
               type="text" 
               placeholder='Enter Name' 
                 value={userName}
             onChange={(e)=>{
                 setuserName(e.target.value);
             }}
               />

               
               <input className='outline-none border-1 px-3 py-3 m-2 w-[45%]'
              type="text" 
              placeholder='Enter Role'
              value={userRole}
              onChange={(e)=>{
              setuserRole(e.target.value);
              }}
               />

            <input className='outline-none border-1 px-3 py-3 m-2 w-[45%]'
             type="text"
             placeholder='Enter Skills' 
             value={userSkills}
            onChange={(e)=>{
              setuserSkills(e.target.value);
            }} 
             />

     <input className='outline-none border-1 px-3 py-3 m-2 w-[45%]'
             type="text"
             placeholder='Enter Skills' 
             value={userSkill}
            onChange={(e)=>{
              setuserSkill(e.target.value);
            }} 
             />



          
             <button className='w-[91%] m-2 bg-green-800 border-none outline-none py-2 active:scale-95'>Submit</button>
                </form>
<div className='px-8 py-10 flex flex-wrap gap-12'>
       {allUsers.map(function(elem,idx){
          return <Card key={idx} elem = {elem} idx = {idx}  deleteHandler={deleteHandler} />
       })

       }

</div>
    </div>
  )
}

export default App