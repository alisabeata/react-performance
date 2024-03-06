import React from 'react'

const DemoOutput = ({ show }) => {
  console.log('DemoOutput running')
  return <p>{show ? 'Some text here' : ''}</p>
}

export default DemoOutput
