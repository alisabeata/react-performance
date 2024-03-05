import React from 'react'

export const DemoOutput = ({ show }) => {
  console.log('DemoOutput running')
  return <p>{show ? 'Some text here' : ''}</p>
}
