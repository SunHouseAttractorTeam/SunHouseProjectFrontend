import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTestRequest } from '../../store/actions/testsActions'

const TestPassing = () => {
  const dispatch = useDispatch()
  const { lessonId } = useParams()
  const test = useSelector(state => state.tests.test)

  useEffect(() => {
    dispatch(fetchTestRequest(lessonId))
  }, [dispatch, lessonId])

  return (
    test && (
      <div>
        <h3>{test.title}</h3>
        {test.data.map((content, index) => {
          switch (Object.keys(content)[0]) {
            case 'text':
              // eslint-disable-next-line react/no-danger
              return <div key={`${index}textDW`} dangerouslySetInnerHTML={{ __html: test.data[0].text }} />
            case 'video':
              return <p key={`${index}textDW`}>Тут будет ВИДЕО</p>
            case 'audio':
              return <p key={`${index}textDW`}>Тут будет АУДИО</p>
            default:
              return null
          }
        })}
        {test.file && <p>Тут будет файл</p>}
      </div>
    )
  )
}

export default TestPassing
