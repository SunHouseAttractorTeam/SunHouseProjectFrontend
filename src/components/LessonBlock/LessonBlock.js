import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ContentForm from '../ContentForm/ContentForm'
import { fetchLessonRequest } from '../../store/actions/lessonsActions'

const LessonBlock = () => {
  const { lessonId } = useParams()
  const dispatch = useDispatch()
  const lesson = useSelector(state => state.lessons.lesson)

  useEffect(() => {
    dispatch(fetchLessonRequest(lessonId))
  }, [dispatch, lessonId])

  return <> {lesson && <ContentForm contentData={lesson} contentId={lessonId} />}</>
}

export default LessonBlock
