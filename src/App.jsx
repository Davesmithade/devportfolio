import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './pages/aboutUs/AboutUs';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='' element={<Home />} />
          <Route path='aboutUs' element={<AboutUs />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App