import React, { useState , useEffect} from 'react'
import axios from 'axios'
import Nav from './Components/Nav'
import {ChevronLeft} from 'lucide-react'
import {ChevronRight} from 'lucide-react'



const App = () => {


const [userData, setuserData] = useState([]);
const [index, setindex] = useState(1);


const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=3`)
   console.log(response.data);
    setuserData(response.data);

}


useEffect(function(){
    getData()
},[index])



let printData = <h3 className='text-[12px] font-bold absolute top-1/2 left-1/2'>Loading...</h3>

if (userData.length>0) {
  printData = userData.map(function(elem, idx){
    return  <div key={idx} >
      <a href={elem.url} target='_blank'>
      <div>
        <img className='h-[180px] w-full rounded-xl' src={elem.download_url} alt="" />
      </div>
      
    </a>
   

    </div>
    
    
  })
}



  return (
    <div className='h-screen  bg-[#700E34] text-black flex items-center justify-center'>

 <div className='h-[500px] w-[800px] bg-white p-2 overflow-hidden'>
<Nav />

<div className='text-[#700E34] mt-15.5'>
<div className='flex items-center justify-between'>
   
   {/*first  */}
 <ChevronLeft className='hover:text-[#700E34] cursor-pointer active:scale-95 text-[#ADADAD] size-10.5' onClick={()=>{
  if(index>1){
    setindex(index-1);
    setuserData([])
  }
 }} />



{/* Second */}
<div className='h-[300px] w-[550px]'>
<div className='flex flex-row gap-5.5 mt-20 mb-4 overflow-x-auto'>
  {printData}
</div>

</div>



{/* third */}
<ChevronRight className='hover:text-[#700E34] cursor-pointer active:scale-95 text-[#ADADAD] size-10.5' onClick={()=>{
  setindex(index+1)
  setuserData([])
}} />


</div>


<div className='flex items-center justify-center  gap-10'>
   <h3 className='text-[12px] font-bold'> {index-1}</h3>
   <h3 className='text-[12px] font-bold'>{index}</h3>
   <h3 className='text-[12px] font-bold'>{index+1}</h3>
</div>

</div>


 </div>


    </div>
  )
}

export default App