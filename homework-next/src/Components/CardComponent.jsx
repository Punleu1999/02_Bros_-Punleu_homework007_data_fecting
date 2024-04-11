
import { getAllMovies } from '@/service/getAllMovies.Service'
import { data } from 'autoprefixer';
import React from 'react'

const CardComponent = async () => {
  const getAllMovie = await getAllMovies();
  console.log("get movie",getAllMovie.payload);
  return (
   
    <main className='bg-gradient-to-r from-amber-950 to-red-950 w-full'>

    <h1 className=' mt-5 font-bold text-white'>All Movie &gt;</h1>
    <div className=' overflow-scroll flex gap-5 p-5'>
        {getAllMovie.payload.map((data) => (
            <div className='card  bg-base-100 shadow-xl rounded-lg p-5 bg-white'>
                <figure>
                    <img
                    fill = {true}
                    src={data.image}
                    alt="movie"/>
                    
                </figure>
                <div className='w-full '>

                </div>
                <div className='w-[390px]'>
                    <h1 className=' font-bold mt-3'>
                        {data.movie_title}
                    </h1>
                        <p className=' line-clamp-3 mt-2'>{data.description}</p>
                </div>
            </div>
        ))}
    
    </div>
    
   </main>
  )
}

export default CardComponent