import React, { useEffect } from 'react'
import './TestBlock.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ContentForm from '../ContentForm/ContentForm'
import { editTestRequest, fetchTestRequest } from '../../store/actions/testsActions'
import QuestionsBlock from '../QuestionsBlock/QuestionsBlock'

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
          <ContentForm contentData={test} contentId={testId} handleSave={handleSaveTest} />
          <QuestionsBlock />
        </>
      )}
    </>
  )
}

export default Test
