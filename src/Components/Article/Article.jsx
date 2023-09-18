import './Article.css'
import img1 from '../../assets/blog02.webp'

const Article = ({img, date, heading}) => {
  return (
    <div className='article'>
     <img src={img} alt="" />
      <div className="article__content">
        <div>
            <p style={{color: "#fff"}}>{date}</p>
            <h1>{heading}</h1>
        </div>
        <p style={{color: "#fff"}}>View Full Article</p>
      </div>
    </div>
  )
}

export default Article
