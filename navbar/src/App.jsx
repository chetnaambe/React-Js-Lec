import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Careers from './Pages/Careers'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Nav from './Component/Nav'
import Random from './Pages/Random'
import NotFound from './Pages/NotFound'


const App = () => {
  return (
    <div className='h-screen w-full bg-black'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />}/>
        <Route path='/Product' element={<Product />} />
                <Route path='/Product/Men' element={<Men />} />


                 <Route path='/About/:id' element={<Random />} />


         <Route path='/Careers' element={<Careers />} />
          <Route path='/Blog' element={<Blog/>} />
            <Route path='/Contact' element={<Contact />}/>

{/* Not Foun Page  * ya /* bhi de sakte hai  */   }

<Route path='/*' element={<NotFound/>} />


      </Routes>
    </div>
  )
}

export default App

