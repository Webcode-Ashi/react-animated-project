import React from 'react'
import Video from '../Components/Home/Video'
import HomeHeroText from '../Components/Home/HomeHeroText'
import HomeBottom from '../Components/Home/HomeBottom'

const Home = () => {
  return (
    < >
    <div className='h-screen w-screen  fixed'>
        <Video/>
    </div>
    <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHeroText/>
        <HomeBottom/>
    </div>
    </>
  )
}

export default Home