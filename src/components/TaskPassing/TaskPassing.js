import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTaskRequest } from '../../store/actions/tasksActions'

const TaskPassing = () => {
  const dispatch = useDispatch()
  const { lessonId } = useParams()
  const task = useSelector(state => state.tasks.task)

  useEffect(() => {
    dispatch(fetchTaskRequest(lessonId))
  }, [dispatch, lessonId])

  return (
    task && (
      <div>
        <h3>{task.title}</h3>
        {task.data.map((content, index) => {
          switch (Object.keys(content)[0]) {
            case 'text':
              // eslint-disable-next-line react/no-danger
              return <div key={`${index}textDW`} dangerouslySetInnerHTML={{ __html: task.data[0].text }} />
            case 'video':
              return <p key={`${index}textDW`}>Тут будет ВИДЕО</p>
            case 'audio':
              return <p key={`${index}textDW`}>Тут будет АУДИО</p>
            default:
              return null
          }
        })}
        {task.file && <p>Тут будет файл</p>}
      </div>
    )
  )
}

export default TaskPassing
