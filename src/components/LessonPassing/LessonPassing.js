import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLessonRequest } from '../../store/actions/lessonsActions'
import PassingBlock from '../PassingBlock/PassingBlock'

const LessonPassing = () => {
  const dispatch = useDispatch()
  const { lessonId } = useParams()
  const lesson = useSelector(state => state.lessons.lesson)
  useEffect(() => {
    dispatch(fetchLessonRequest(lessonId))
  }, [dispatch, lessonId])

  return lesson && <PassingBlock event={lesson} />
}

export default LessonPassing
