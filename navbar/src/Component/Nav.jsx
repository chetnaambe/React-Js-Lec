import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='bg-white w-full p-3 flex items-center justify-between'>
      <div className='font-semibold text-2xl'>
        Navbar
      </div>
      <div className='flex items-center gap-6.5'>
<Link to='/'>Home</Link>
<Link to='/Product'>Products</Link>
<Link to='/About'>About us</Link>
<Link to='/Blog'>Blog</Link>
<Link to='Careers'>Careers</Link>
<Link to='contact'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Nav
