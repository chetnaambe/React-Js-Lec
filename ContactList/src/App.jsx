import React, { useState } from 'react'
import './index.css'

const App = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [allusers, setallUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
alert("Contact Saved Successfully"); 
    // setallUsers(prev => [...prev, { name, number }]);
  const newUsers  = [...allusers];
  newUsers.push({name, number})
  setallUsers(newUsers);
    setName('');
    setNumber('');
  };

  return (
    <div className='h-screen w-screen bg-black flex'>

     
      <div className='w-1/2 flex justify-center items-start mt-9'>
        <form className='w-3/4' onSubmit={submitHandler}>
          <div className='flex flex-col gap-6'>
            <h1 className='text-white text-center text-[30px] font-[500]'>
              Add Contact
            </h1>

            <input
              className='border-white border text-white px-3 py-4 rounded'
              required
              type="text"
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className='border-white border text-white px-3 py-4 rounded'
              type="tel"
              maxLength="10"
            pattern="[0-9]{10}"
              placeholder='Enter Mobile Number'
              value={number}
              required
              onChange={(e) => setNumber(e.target.value)}
            />

            <button className='border-white border text-black bg-white px-3 py-4 rounded active:scale-95'>
              Add to Contact
            </button>
          </div>
        </form>
      </div>


      <div className='w-1/2 p-8 overflow-y-auto ml-20'>
      <h1 className='text-white text-[28px] font-[500] '>Contact Details</h1>
        {allusers.map((elem, idx) => (
          <div key={idx} className='mb-6 bg-white mt-9 px-4.5 py-0.5 rounded-xl flex items-center justify-between'>
           <div className='flex flex-col'>
             <h4 className='text-black text-[23px] font-[400]'>
              {elem.name}
            </h4>
            <p className='text-black text-[15px]'>
              {elem.number}
            </p>
           </div>
            <i className="text-[25px] ri-phone-line px-1.5 bg-black rounded-full text-white active:scale-95 active:bg-gray-700"></i>
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;
