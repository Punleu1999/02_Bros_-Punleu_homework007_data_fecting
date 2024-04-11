

import { getActinMovie } from '@/service/getAllMovies.Service';
import React from 'react'

const ActionMovie = async () => {
    const getActin = await getActinMovie("Action");
    // console.log("get action movie", getActinMovie);
  return (
    <div  className='bg-gradient-to-r from-amber-950 to-red-950 w-full'>
          {/* action movie */}
          <h1 className=' mt-5 font-bold text-white'>Action Movie &gt;</h1>
    <div className=' overflow-scroll flex gap-5 p-5'>
        {getActin.payload.map((items) =>(
          <div className=' p-1 w-[420px] bg-white rounded-lg'>
            {/* key={items.movie_id}  */}
          
          <img
          src={items.image}
          class="shadow rounded-lg overflow-hidden border"
          />
           <div className='card  bg-base-100 shadow-xl rounded-lg p-5 bg-white'>
            
                <div className='w-full '>

                </div>
                <div className='w-[390px]'>
                    <h1 className=' font-bold mt-3'>
                        {items.movie_title}
                    </h1>
                        <p className=' line-clamp-3 mt-2'>{items.description}</p>
                </div>
            </div>

          </div>
        ))}
        
          
       </div>
      
    </div>
  )
}

export default ActionMovie