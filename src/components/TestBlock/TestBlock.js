import React, { useEffect, useState } from 'react'
import './TestBlock.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTestRequest } from '../../store/actions/testsActions'
import ContentForm from '../ContentForm/ContentForm'
import QuestionsBlock from '../QuestionsBlock/QuestionsBlock'

const Test = () => {
  const { testId } = useParams()
  const dispatch = useDispatch()
  const test = useSelector(state => state.tests.test)

  const [questionsState, setQuestionsState] = useState([{ title: '', answers: [{ title: '', status: false }] }])

  useEffect(() => {
    dispatch(fetchTestRequest(testId))
  }, [dispatch, testId])

  const handleSaveTest = data => {
    console.log(data)
    // dispatch(editTestRequest(data))
  }

  const addQuestion = () => {
    setQuestionsState(prev => [...prev, { title: '', answers: [{ title: '', status: false }] }])
  }

  return (
    <>
      {test && (
        <>
          <ContentForm contentData={test} contentId={testId} handleSave={handleSaveTest} />
          {questionsState.map((q, index) => (
            <div key={index}>
              <QuestionsBlock question={q} indexQuestion={index} setQuestion={setQuestionsState} />
            </div>
          ))}
          <button type="button" onClick={addQuestion} className="question-block__add-button MainButton">
            + Добавить вопрос
          </button>
        </>
      )}
    </>
  )
}

export default Test
