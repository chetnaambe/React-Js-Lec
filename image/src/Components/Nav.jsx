import React from 'react'
import {Menu} from 'lucide-react'
const Nav = () => {
  return (
    <div className=' w-full h-[40px] flex items-center justify-between p-2.5'>

<div>
  <Menu className='text-[#700E34] size-5' />
</div>

<div>
<h1 className='font-serif text-[22px] text-[#700E34]'>Image</h1>
</div>


<div className='pt-2.5 flex gap-4.5 items-center'>
<img className='h-10 w-10 rounded-full' src="https://i.pinimg.com/736x/52/e3/1c/52e31c2a8de5cfe50f79a119ff5ba78e.jpg" alt="" />
<p className='text-[#700E34] text-[10px] font-bold'>Riccardo Cavalio</p>
</div>



    </div>
  )
}

export default Nav