import React from 'react'
import {Link} from 'react-router-dom'
const HomeBottom = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <div className='text-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 h-25 border-white-200 flex items-center px-10 rounded-full uppercase'>
      <Link  className='text-[5vw] mt-4' to='/Project'>Projects</Link></div>
      <div className='text-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 h-25 border-white-200 flex items-center px-10 rounded-full uppercase'>
      <Link className='text-[5vw] mt-4' to='/Agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottom