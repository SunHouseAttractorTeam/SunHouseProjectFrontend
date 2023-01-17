import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TeachersBlock from '../TeachersBlock/TeachersBlock'
import { fetchTeachersRequest } from '../../store/actions/lendingTeachersActions'

const LendingTeacherBlock = () => {
  const dispatch = useDispatch()
  const teachers = useSelector(state => state.teachers.teachers)
  useEffect(() => {
    dispatch(fetchTeachersRequest())
  }, [dispatch])
  console.log(teachers)
  return (
    <TeachersBlock
      title="Преподаватели — <span>практикующие эксперты</span>"
      subtitle="Доверьте свое обучение специалистам"
      teachers={teachers}
    />
  )
}

export default LendingTeacherBlock
