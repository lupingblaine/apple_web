import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';


const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const handleVideoSrcSet = () => {
        if(window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);
    
        return () => {
          window.removeEventListener('reisze', handleVideoSrcSet)
        }
      }, [])

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.5 })
    }, [])

    return (
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">iPhone 15 Pro</p>
        </div>
        <div className="md:w-10/12 w-9/12 flex justify-center items-center">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </section>
  )
}

export default Hero