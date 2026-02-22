import React, { useState } from 'react'

const App = () => {
const [count, setCount] = useState(0);

function increase(){
  if(count<10){
    setCount(count+1)
  }
}

function decrease(){
  if(count>0){
    setCount(count-1)
  }
}
function reset(){
  
    setCount(0)
  }


  return (
    <div className='h-screen bg-black  flex items-center justify-center'>
      <div className='h-[400px] w-[400px] bg-white rounded-3xl relative'>
                <h1 className='text-black text-[50px] text-center mt-2.5'>{count}</h1>

                <button className={`text-white px-2.5 py-1.5 mt-25 ml-16.5 rounded active:scale-95
  ${count === 10 ? "bg-red-600" : "bg-[green]"}`}onClick={increase}>Increase</button>

                <button className={` text-white px-2.5 py-1.5 ml-4 rounded active:scale-95
                  ${count <10 ? "bg-[red]" : "bg-[black]"}`} onClick={decrease}>Decrease</button>

                <button className='bg-black text-white px-5.5 py-1.5 ml-4 rounded active:scale-95'onClick={reset}>Reset</button>


                
      </div>
  
    </div>
  )
}

export default App
