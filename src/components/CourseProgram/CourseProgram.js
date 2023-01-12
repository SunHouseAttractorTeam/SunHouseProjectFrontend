import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paragraph from '../Paragraph/Paragraph'
import './CourseProgram.scss'
import CardProgram from './CardProgram/CardProgram'
import { fetchModulesRequest } from '../../store/actions/modulesActions'

const CourseProgram = ({ teacherCheck }) => {
  const modules = useSelector(state => state.modules.modules)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchModulesRequest())
  }, [dispatch])

  return (
    <div className="program-block">
      <Paragraph title="Программа курса" section="courseProgram" teacherCheck={teacherCheck} />
      <div className="program-block__cards">
        {modules && modules.map(item => <CardProgram key={item._id} title={item.title} content={item.data} />)}
      </div>
    </div>
  )
}

export default CourseProgram
