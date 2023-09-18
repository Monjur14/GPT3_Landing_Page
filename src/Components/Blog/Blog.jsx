import './Blog.css'
import blog1 from '../../assets/blog01.webp'
import blog2 from '../../assets/blog02.webp'
import blog3 from '../../assets/blog03.webp'
import blog4 from '../../assets/blog04.webp'
import blog5 from '../../assets/blog05.webp'
import Article from '../Article/Article'

const Blog = () => {
  return (
    <div className='blog' id='blog'>
      <div className="blog__container container">
        <div className="blog_sec_one">
            <h1 className='inner__h1'>A lot is happening,<br/>We are blogging about it.</h1>
        </div>
        <div className="blog__sec_two">
            <div className="blog__container__first__div">
                <Article img={blog1} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            </div>
            <div className="blog__container__second__div">
                <Article img={blog2} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                <Article img={blog3} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                <Article img={blog4} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                <Article img={blog5} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Blog
