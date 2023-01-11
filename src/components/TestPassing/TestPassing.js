import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTestRequest } from '../../store/actions/testsActions'
import PassingBlock from '../PassingBlock/PassingBlock'

const TestPassing = () => {
  const dispatch = useDispatch()
  const { testId } = useParams()
  const test = useSelector(state => state.tests.test)

  useEffect(() => {
    dispatch(fetchTestRequest(testId))
  }, [dispatch, testId])

  useEffect(() => {
    console.log(test)
  }, [test])

  return (
    test && (
      <div>
        <PassingBlock event={test} />
      </div>
    )
  )
}

export default TestPassing
