import './Brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Brand = () => {
  return (
    <div className='brand'>
      <div className="container brand_container">
        <div className="brand_logo">
            <img src={google} alt="" />
        </div>
        <div className="brand_logo">
            <img src={slack} alt="" />
        </div>
        <div className="brand_logo">
            <img src={atlassian} alt="" />
        </div>
        <div className="brand_logo">
            <img src={dropbox} alt="" />
        </div>
        <div className="brand_logo">
            <img src={shopify} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Brand
