import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Sign from "./Pages/Sign"

const App = () => {

  return (
    <div className="bg-gradient-to-r from-[#D09C84] to-[#B68C7C] h-screen w-full flex items-center justify-center text-white">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
                <Route path="/Sign" element={<Sign />} />
      </Routes>

    </div>
  )
}

export default App