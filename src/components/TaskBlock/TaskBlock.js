import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ContentForm from '../ContentForm/ContentForm'
import { fetchTaskRequest } from '../../store/actions/tasksActions'

const TaskBlock = () => {
  const { taskId } = useParams()
  const dispatch = useDispatch()
  const task = useSelector(state => state.tasks.task)

  useEffect(() => {
    dispatch(fetchTaskRequest(taskId))
  }, [dispatch, taskId])

  return <> {task && <ContentForm contentData={task} contentId={taskId} />}</>
}

export default TaskBlock
