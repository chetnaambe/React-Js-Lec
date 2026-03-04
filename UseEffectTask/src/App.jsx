import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

const [user, setuser] = useState('');
const [num, setnum] = useState(0);

  const getData = async ()=>{
      const response = await axios.get('https://randomuser.me/api/')
    setuser((response.data.results[0].name.first) +" "+ (response.data.results[0].name.last))

  }

useEffect(function(){
  getData()
},[num])



  return (
    <div>
      <h1>{num}</h1>
<button className='px-2.5 py-2 bg-green-300' onClick={()=>{
  setnum(num+1)
}}>clicked here</button>

{user}
    </div>
  )
}

export default App
