import './App.css'
import Brand from './Components/Brand/Brand'
import Cta from './Components/CTA/Cta'
import Future from './Components/Future/Future'
import Header from './Components/Header/Header'
import Imagination from './Components/Imagination/Imagination'
import Navbar from './Components/Navbar/Navbar'
import SubTitle from './Components/SubTitle/SubTitle'
import WhatIs from './Components/WhatIs/WhatIs'

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Brand/>
      <WhatIs/>
      <Future/>
      <Imagination/>
      <Cta/>
    </>
  )
}

export default App
