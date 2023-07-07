import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Analize from '../pages/Analize'
import HomePage from '../pages/HomePage'
import Transactions from '../pages/Transactions'


const Router = () => {
  return (
   <BrowserRouter>
  
    <Routes>

        {/* <Route path="*" element={<PageNotFound />}/> */}
        <Route path="/" element={<HomePage />}/>
        <Route path="/analize" element={<Analize />}/>
        <Route path="/transactions" element={<Transactions />}/>
    </Routes>

   </BrowserRouter>
  )
}

export default Router