import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { fetchTaskRequest, sendTaskRequest } from '../../store/actions/tasksActions'
import PassingBlock from '../PassingBlock/PassingBlock'
import FilesUploader from '../FilesUploader/FilesUploader'
import MainButton from '../UI/MainButton/MainButton'
import CoursePassingControls from '../CoursePassingControls/CoursePassingControls'
import './TaskPassing.scss'

const TaskPassing = ({ setModuleId }) => {
  const dispatch = useDispatch()
  const { courseId, taskId } = useParams()
  const task = useSelector(state => state.tasks.task)
  const user = useSelector(state => state.users.user)

  const [lastFile, setLastFile] = useState('')
  const [passed, setPassed] = useState('')

  useEffect(() => {
    setLastFile('')
    setPassed('')

    dispatch(fetchTaskRequest(taskId))
  }, [dispatch, taskId])

  useEffect(() => {
    if (user && task) {
      const userTask = user.tasks.find(obj => obj.task === task._id)

      if (userTask.passed === 'success') {
        setPassed('success')
      }
    }
  }, [user, task])

  const lastFileChangeHandler = e => {
    const selectedFile = e.target.files[0]
    setLastFile(selectedFile)
  }
  const sendHomework = () => {
    if (!lastFile) {
      return Swal.fire({
        toast: true,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        icon: 'error',
        title: `Выберите файл!`,
      })
    }

    const formData = new FormData()

    formData.append('file', lastFile)

    return dispatch(sendTaskRequest({ courseId, taskId, file: formData }))
  }

  return (
    task && (
      <>
        <PassingBlock event={task} />
        <div className="homework">
          <p className="homework__title">Загрузите задание</p>
          <FilesUploader type="file" onChange={lastFileChangeHandler} />
          <MainButton
            disabled={passed === 'success'}
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
