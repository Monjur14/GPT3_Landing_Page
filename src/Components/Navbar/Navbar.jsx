import './Navbar.css'
import logo from '../../assets/logo.svg'
import Button from '../Button/Button'
import {RxHamburgerMenu} from 'react-icons/rx'
import {RiMenu3Line} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const change = () => {
    setToggle((prev)=> !prev)
  }
  return (
    <div className='navbar'>
      <div className="navitem">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className='big__screen_ul'>
          <li><a href="#">Home</a></li>
          <li><a href="#">What is GPT?</a></li>
          <li><a href="#">OpenAI</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Library</a></li>
        </ul>
        <div className="buttons">
          <button className='btn1'>Sign In</button>
          <Button title="Sign Up"/>
        </div>
        {toggle ? <><RiMenu3Line color='#fff' className='open_btn' onClick={change}/></> : <><div className="small__screen_div">
          <AiOutlineClose color='#fff' className='close_btn' onClick={change}/>
          <ul className='small__screen_ul'>
            <li onClick={change}><a href="#">Home</a></li>
            <li onClick={change}><a href="#">What is GPT?</a></li>
            <li onClick={change}><a href="#">OpenAI</a></li>
            <li onClick={change}><a href="#">Case Studies</a></li>
            <li onClick={change}><a href="#">Library</a></li>
          </ul>
        </div></>}
        
        
      </div>
    </div>
  )
}

export default Navbar
