import './Header.css'
import heroimg from '../../assets/ai.webp'
import Button from '../Button/Button'
import grpimg from '../../assets/people.png'
const Header = () => {
  return (
    <div className='header gradient_bg'>
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
