import React from 'react'

const DemoOutputWithStaticProps = ({ show }) => {
  console.log('DemoOutputWithStaticProps running')
  return <p>{show ? 'Some never visible text here' : ''}</p>
}

// React.memo prevents unnecessary rerendering of this component
// till the props isn't updated
// have it's own cost: the prev and current props comparison
// usable for the deep nested tree structure if props don't change too often
// uses Object.is() fot the props comparison
export default React.memo(DemoOutputWithStaticProps)
