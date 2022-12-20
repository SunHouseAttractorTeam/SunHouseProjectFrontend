import React, { useEffect } from 'react'
import './TestBlock.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editTestRequest, fetchTestRequest } from '../../store/actions/testsActions'
import ContentFormTest from '../ContentForm/ContentFormTest/ContentFormTest'

const Test = () => {
  const { testId } = useParams()
  const dispatch = useDispatch()
  const test = useSelector(state => state.tests.test)

  useEffect(() => {
    dispatch(fetchTestRequest(testId))
  }, [dispatch, testId])

  const handleSaveTest = data => {
    dispatch(editTestRequest(data))
  }

  return (
    <>
      {test && (
        <>
          <ContentFormTest contentData={test} contentId={testId} handleSave={handleSaveTest} />
        </>
      )}
    </>
  )
}

export default Test
