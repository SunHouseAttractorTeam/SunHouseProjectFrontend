import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTaskRequest } from '../../store/actions/tasksActions'
import './TaskPassing.scss'
import PassingBlock from '../PassingBlock/PassingBlock'
import FilesUploader from '../FilesUploader/FilesUploader'

const TaskPassing = () => {
  const dispatch = useDispatch()
  const { taskId } = useParams()
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
    console.log(lastFile)
  }
  return (
    task && (
      <>
        <PassingBlock event={task} />
        <div className="homework">
          <p className="homework_title">Загрузите задание</p>
          <FilesUploader type="file" onChange={lastFileChangeHandler} />
          <button className="download" style={{ marginTop: '30px' }} onClick={sendHomework}>
            Отправить задание
          </button>
        </div>
      </>
    )
  )
}

export default TaskPassing
