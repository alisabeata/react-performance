import React, { useState, useCallback } from 'react'
import './App.css'
import Button from './components/UI/Button/Button'
import { DemoOutput } from './components/Demo/DemoOutput'
import { DemoOutputWithStaticProps } from './components/Demo/DemoOutputWithStaticProps'

function App() {
  const [showText, setShowText] = useState(false)

  console.log('App running')

  // using useCallback prevents creating the new instance of the toggleText
  const toggleText = useCallback(() => {
    // Using the prevShowText proves that the last snapshot was used
    setShowText((prevShowText) => !prevShowText)
  }, [])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* Changing showText via props optimazes rerendering of the whole div.app  */}
      {/* The DOM rerenders only the p tag content inside of the DemoOutput  */}
      <DemoOutput show={showText} />
      {/* DemoOutputWithStaticProps contains info about React.memo */}
      <DemoOutputWithStaticProps show={false} />
      {/* Button also uses React.memo but by default rerenders it anyways */}
      {/* because of Object.is comparison method and how it works with */}
      {/* primitive and refferal types */}
      {/* using useCallback prevents creating the new instance of the toggleText */}
      {/* it doesn't call rerender */}
      <Button onClick={toggleText}>Toggle Text</Button>
    </div>
  )
}

export default App
