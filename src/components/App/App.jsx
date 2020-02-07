import React from 'react'
import Form from '../Form/Form'
import SentMessages from '../SentMessages/SentMessages'
import Logo from '../UI/Icons/Logo'

const App = () => {
  return (
    <div className="container">
      <Logo />
      <Form />
      <SentMessages />
    </div>
  )
}

export default App
