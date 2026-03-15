import React from 'react'
import Card from './components/Card'
import Msg from './components/message'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar />
      <Card />
      {Card()}
      {Msg()}
      <Msg />
    </div>
  )
}

export default App
