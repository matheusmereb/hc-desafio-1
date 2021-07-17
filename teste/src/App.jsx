import React from 'react'
import './App.css'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


export default function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  )
}
