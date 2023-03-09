import React from 'react'
import './App.css'
import Header from './components/Header'
import Tinder_Cards from './components/Tinder_Cards'
import Swipe_Buttons from './components/Swipe_Buttons'

function App() {

  return (
    <div className="app">
     <Header/>
     <Tinder_Cards/>
     <Swipe_Buttons/>
    </div>
  )
}

export default App
