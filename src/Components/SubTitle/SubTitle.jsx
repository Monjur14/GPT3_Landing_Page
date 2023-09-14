import './SubTitle.css'

const SubTitle = ({title, para}) => {
  return (
    <div className='subtitle'>
      <div className="upper__line"></div>
      <h1>{title}</h1>
      <p>{para}</p>
    </div>
  )
}

export default SubTitle
