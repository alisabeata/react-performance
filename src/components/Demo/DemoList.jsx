import React, { useMemo } from 'react'

const DemoList = ({ title, items }) => {
  // useMemo memoizes the result of the function
  const sortedList = useMemo(() => {
    console.log('Items sorted')
    return items.sort((a, b) => a - b)
  }, [items])

  console.log('DemoList running')

  return (
    <p>
      {title}:{' '}
      {sortedList.map((item) => (
        <span key={item}>{item} </span>
      ))}
    </p>
  )
}

export default React.memo(DemoList)
