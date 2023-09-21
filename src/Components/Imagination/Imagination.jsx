import './Imagination.css'
import imagine from '../../assets/possibility.webp'
import {gsap} from 'gsap'
import {useRef, useEffect} from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Imagination = () => {
  let animate = useRef(null)
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".left__content",{
        x: -2000,
        duration: 2,
        scrollTrigger: {
          trigger: ".left__content",
        }
      })
      gsap.from(".right__content__ign>p:nth-child(1)",{
        x: 2000,
        duration: 2,
        scrollTrigger: {
          trigger: ".right__content__ign>p:nth-child(1)"
        }
      })
      gsap.from(".right__content__ign p:nth-child(3)",{
        x: 2000,
        duration: 2,
        scrollTrigger: {
          trigger: ".right__content__ign p:nth-child(3)"
        },
        delay: 1
      })
      gsap.from(".right__content__ign h1", {
        x: 2000,
        duration: 2,
        scrollTrigger: {
          trigger: ".right__content__ign h1"
        },
        delay: 0.5
      })
      gsap.from(".right__content__ign p:nth-child(4)", {
        x: 2000,
        duration: 2,
        scrollTrigger: {
          trigger: ".right__content__ign p:nth-child(4)"
        },
        delay: 1.5
      })
    }, animate)
    return () => ctx.revert();
  },[])
  return (
    <div className='imagination' id='openai' ref={animate}>
      <div className='inner__imagination container'>
        <div className="left__content">
            <img src={imagine} alt="" />
        </div>
        <div className="right__content__ign">
            <p>Request Early Access to Get Started</p>
            <h1>The possibilities are beyond your imagination</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <p>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  )
}

export default Imagination
