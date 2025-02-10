import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './Component/Header/About'
import Pricing from './Component/Header/Pricing'
import Customers from './Component/Header/Customers'
import Solutions from './Component/Header/Solutions'
import Error from './Component/Header/Error'
import NavbarArea from './Component/Navbar'
import Hero from './Component/Hero'
import Icon from './Component/Icon'
import Card from './Component/Card'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<NavbarArea/>}>

        {/* <Route index element={<Hero/>}/> */}
        {/* <Route index element={<Icon/>} /> */}
        <Route index element={<Card/>}/>
        

        <Route path='/About' element={<About/>}/>
        <Route path='/Pricing' element={<Pricing />}/>
        <Route path='/Customers' element={<Customers/>}/>
        <Route path='/Solutions' element={<Solutions/>}/>
        <Route path='*' element={<Error />}/>
        
        </Route>

      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
