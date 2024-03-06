import React, { useState, useCallback, useMemo } from 'react'
import './App.css'
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput'
import DemoOutputWithStaticProps from './components/Demo/DemoOutputWithStaticProps'
import DemoList from './components/Demo/DemoList'

function App() {
  // useState is considered once while first initialization
  // later can be updated only
  // applying the update function (setShowText here) React schedules the update
  // doesn't do it immediately
  const [showText, setShowText] = useState(false)
  const [listTitle, setListTitle] = useState('List')

  // (!) React combines all state updates inside a function into one
  // example: setShowText(val); setOtherState(val)
  // for all this functions state is the same between the execution

  console.log('App running')

  // using useCallback prevents creating the new instance of the toggleText
  const toggleText = useCallback(() => {
    // Using the prevShowText proves that the last snapshot was used
    setShowText((prevShowText) => !prevShowText)
  }, [])
  // this parametr [] contains the dependencies in the closure of useCallback
  // any dependencies of the function
  // example: if (smth) setShowText((prevShowText) => !prevShowText) then
  // dependencies should contain [smth] here

  const updateTitle = useCallback(() => {
    setListTitle('New List')
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
      {/* DemoList contains the info about useMemo */}
      {/* it's useful to memoize the data to optimize the heavy calculation */}
      {/* here we using useMemo to keep the same refferal type */}
      <DemoList title={listTitle} items={useMemo(() => [5, 3, 1, 10, 9], [])} />
      <button onClick={updateTitle}>update title</button>
    </div>
  )
}

export default App
