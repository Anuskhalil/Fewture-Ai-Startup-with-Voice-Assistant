import React from 'react';
import AppNav from './Components/AppNav'
import AppHero from './Pages/AppHero'
import AppPrice from './Pages/AppPrice'
import AppContact from './Pages/AppContact'
import { Routes, Route } from 'react-router-dom'


// import Home from './Pages/Home'
// import Login from './Pages/Login'
// import Register from './Pages/Register'

function App() {

  return (
    <>

      <AppNav />
      <Routes>
        <Route path='/' element={<AppHero />}></Route>
        <Route path='/Pricing' element={<AppPrice />}></Route>
        <Route path='/Contact' element={<AppContact />}></Route>
      </Routes>
    </>
  )
}

export default App
