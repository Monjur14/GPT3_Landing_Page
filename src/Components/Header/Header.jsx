import './Header.css'
import heroimg from '../../assets/ai.webp'
import Button from '../Button/Button'
import grpimg from '../../assets/people.png'
import {gsap} from "gsap"
import {useRef, useEffect} from "react"

const Header = () => {
  let parent = useRef(null)
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".header__left h1", {
       x: -2000,
       duration: 1.5,
      })
      gsap.from(".header__right", {
        x: 2000,
        duration: 1.5
      })
      gsap.from(".header__left>p", {
        x: -2000,
        duration: 2,
        delay: 0.5
      })
      gsap.from(".input__div", {
        x: -2000,
        duration: 2,
        delay: 1
      })
      gsap.from(".img_content", {
        x: -2000,
        duration: 2,
        delay: 1.5
      })
    }, parent)
    return () => ctx.revert();
  },[])

  return (
    <div className='header gradient_bg' id='home' ref={parent}>
      <div className='header__inner container'>
        <div className="header__left">
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className="input__div">
            <input type="text" placeholder='Your Email Address' /><Button title="Get Started"/>
          </div>
          <div className="img_content">
            <img src={grpimg} alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="header__right">
          <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
