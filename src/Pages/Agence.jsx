import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
 gsap.registerPlugin(ScrollTrigger)
    const imageDivRef = useRef(null)
   
    useGSAP(function(){
        gsap.to(imageDivRef.current,{
           scrollTrigger:{
             trigger:imageDivRef.current,
             markers:true,
             start:'top 24.6%',
             end:'top -100%',
             scrub:true,
             pin:true

           }
        })
    })
  return (
    <div>
        <div className='section1'>
        <div className='h-[20vw] w-[15vw] overflow-hidden rounded-2xl absolute top-45 left-[31vw]'>
            <img ref={imageDivRef} src="\Images\image1.jpg" className='h-full w-full object-cover rounded-2xl' alt="" />
        </div>
        <div className='relative h-screen font-[font2]'>
        <div className=' mt-[55vh]'>
        <h1 className='text-[19vw] uppercase text-center leading-[17vw]'>Soixan7e<br/>Douze</h1>
        </div>
        <div className='pl-[40%] mt-20'>
            <p className='text-4xl '>&emsp;&emsp;&emsp;&emsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
    </div>
    </div>
    <div className='section2 h-screen'>
       
    </div>
    </div>
  )
}

export default Agence