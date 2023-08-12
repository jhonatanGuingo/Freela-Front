import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      aaaa
      <Route path = "/signUp" element={<SignUpPage/>}></Route>
      <Route path = "/" element={<SignInPage/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
