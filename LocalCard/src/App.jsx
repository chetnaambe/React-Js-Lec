import React from 'react'
import Card from './Components/Card'
import './index.css'
const App = () => {

const cardData = {
  username:'Anubhav',
  role:'Engineer',
  email:'anu@gmail.com',
  profile:'https://i.pinimg.com/736x/b3/d9/19/b3d919a9e5a459e82a4db4e83a853a4c.jpg'
}

  return (
    <>
    <Card cardData ={cardData} />
    </>
  )
}

export default App
