import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TeachersBlock from '../TeachersBlock/TeachersBlock'
import { fetchTeachersRequest } from '../../store/actions/lendingTeachersActions'

const LendingTeacherBlock = () => {
  const dispatch = useDispatch()
  const teachers = useSelector(state => state.teachers.teachers)
  const newTeachers = []
  teachers.map(teacher => {
    newTeachers.push({ user: { avatar: teacher.image, username: teacher.name }, description: teacher.description })
    return teacher
  })
  useEffect(() => {
    dispatch(fetchTeachersRequest())
  }, [dispatch])
  return (
    <TeachersBlock
      title="Преподаватели — <span>практикующие эксперты</span>"
      subtitle="Доверьте свое обучение специалистам"
      teachers={newTeachers}
    />
  )
}

export default LendingTeacherBlock
