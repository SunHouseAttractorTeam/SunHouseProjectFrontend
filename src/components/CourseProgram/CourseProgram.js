import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Paragraph from '../Paragraph/Paragraph'
import CardProgram from './CardProgram/CardProgram'
import { fetchModulesRequest } from '../../store/actions/modulesActions'
import './CourseProgram.scss'

const CourseProgram = ({ teacherCheck, modules, block, onVisibilityBlock }) => {
  const dispatch = useDispatch()
  const [courseModules] = useState(modules)

  useEffect(() => {
    dispatch(fetchModulesRequest())
  }, [dispatch])

  return (
    <div className="program-block">
      <Paragraph
        title="Программа курса"
        subtitle={block.description}
        teacherCheck={teacherCheck}
        type="blockModules"
        isVisibility={block.visibility}
        onVisibility={onVisibilityBlock}
      />
      <div className="program-block__cards">
        {courseModules &&
          courseModules.map(item => <CardProgram key={item._id} title={item.title} content={item.data} />)}
      </div>
    </div>
  )
}

export default CourseProgram
