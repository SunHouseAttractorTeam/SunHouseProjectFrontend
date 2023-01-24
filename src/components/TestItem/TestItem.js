import React from 'react'
import './TestItem.scss'
import { useDispatch } from 'react-redux'

const TestItem = ({ test }) => {
  const dispatch = useDispatch()
  console.log(test)

  return (
    <div>
      <p>Test</p>
    </div>
  )
}

export default TestItem
