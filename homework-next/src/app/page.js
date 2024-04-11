
import React from 'react'
import img from '../../public/image/background.webp'
import Image from 'next/image'
import { getAllMovies } from '@/service/getAllMovies.Service'
import CardComponent from '@/Components/CardComponent'
import Action from "@/Components/Action"
import DramaMovie from '@/Components/DramaMovie'




const page = async () => {
  const getActinMovie = await getAllMovies();
  console.log("get all:",getActinMovie);
  return (
    <div  className=''>
      <div>
      <Image src={img} className=' brightness-75'></Image>
      </div>
      <CardComponent/>
      <Action></Action>
      <DramaMovie/>
      
      {/* <CardComponent/>
      <CardComponent/> */}
        
       
        
          
      
    </div>



  )
}

export default page