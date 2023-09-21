import './Footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container footer__inner">
        <div className="footer__top">
        <h1 className='text'>Do you want to step in to the<br/>future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className="footer__bottom">
            <div>
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>Crechterwoord K12 182 DK<br/>Alknjkcb, All Rights Reserved</p>
                </div>
            </div>
            <div>
                <h3>Links</h3>
                <ul>
                    <li>Overons</li>
                    <li>Social Media</li>
                    <li>Counters</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h3>Company</h3>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h3>Get in touch</h3>
                <ul>
                    <li>Crechterwoord K12<br/>182 DK Alknjkcb</li>
                    <li>085-132567</li>
                    <li>info@payme.net</li>
                </ul>
            </div>
      </div>
      <div>
      <pre>© 2023 &nbsp;GPT-3&nbsp;&nbsp;|&nbsp;&nbsp;Developed By Monjur Hossen</pre>
      </div>
        </div>
      
    </div>
  )
}

export default Footer
