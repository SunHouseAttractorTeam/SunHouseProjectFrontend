import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTaskRequest, sendTaskRequest } from '../../store/actions/tasksActions'
import './TaskPassing.scss'
import PassingBlock from '../PassingBlock/PassingBlock'
import FilesUploader from '../FilesUploader/FilesUploader'
import MainButton from '../UI/MainButton/MainButton'
import CoursePassingControls from '../CoursePassingControls/CoursePassingControls'

const TaskPassing = ({ setModuleId }) => {
  const dispatch = useDispatch()
  const { courseId, taskId } = useParams()
  const task = useSelector(state => state.tasks.task)
  const [lastFile, setLastFile] = useState('')

  useEffect(() => {
    dispatch(fetchTaskRequest(taskId))
  }, [dispatch, taskId])

  const lastFileChangeHandler = e => {
    const file = e.target.files[0]
    setLastFile(file)
  }
  const sendHomework = () => {
    dispatch(sendTaskRequest({ courseId, taskId, task: lastFile }))
  }

  return (
    task && (
      <>
        <PassingBlock event={task} />
        <div className="homework">
          <p className="homework__title">Загрузите задание</p>
          <FilesUploader type="file" onChange={lastFileChangeHandler} />
          <MainButton
            type="button"
            text="Отправить задание"
            className="GreenButton homework__button"
            onClick={sendHomework}
          />
        </div>
        <CoursePassingControls setModuleId={setModuleId} />
      </>
    )
  )
}

export default TaskPassing
