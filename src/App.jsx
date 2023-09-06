import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Core from './components/core'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-full min-w-[100vw] pagebg'>
        {/* <Navbar /> */}
        <Hero/>
        {/* <Core /> */}
      </div>
    </>
  )
}

export default App
