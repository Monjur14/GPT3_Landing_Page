import Headroom from 'react-headroom'
import './App.css'
import Blog from './Components/Blog/Blog'
import Brand from './Components/Brand/Brand'
import Cta from './Components/CTA/Cta'
import Credit from './Components/Credit/Credit'
import Footer from './Components/Footer/Footer'
import Future from './Components/Future/Future'
import Header from './Components/Header/Header'
import Imagination from './Components/Imagination/Imagination'
import Navbar from './Components/Navbar/Navbar'
import SubTitle from './Components/SubTitle/SubTitle'
import WhatIs from './Components/WhatIs/WhatIs'

function App() {
  return (
    <>
      <Headroom>
        <Navbar/>
      </Headroom>
      <Header/>
      <Brand/>
      <WhatIs/>
      <Future/>
      <Imagination/>
      <Cta/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
