import './Navbar.css'
import logo from '../../assets/logo.svg'
import Button from '../Button/Button'
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
          <li><a href="#home">Home</a></li>
          <li><a href="#whatisgpt">What is GPT?</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#openai">OpenAI</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <div className="buttons">
          <button className='btn1'>Sign In</button>
          <Button title="Sign Up"/>
        </div>
        {toggle ? <><RiMenu3Line color='#fff' className='open_btn' onClick={change}/></> : <><div className="small__screen_div">
          <AiOutlineClose color='#fff' className='close_btn' onClick={change}/>
          <ul className='small__screen_ul'>
            <li onClick={change}><a href="#home">Home</a></li>
            <li onClick={change}><a href="#whatisgpt">What is GPT?</a></li>
            <li onClick={change}><a href="#aboutus">About Us</a></li>
            <li onClick={change}><a href="#openai">OpenAI</a></li>
            <li onClick={change}><a href="#blog">Blog</a></li>
          </ul>
        </div></>}       
      </div>
    </div>
  )
}

export default Navbar
