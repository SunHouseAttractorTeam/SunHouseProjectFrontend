import React, { useState } from 'react'
import Paragraph from '../Paragraph/Paragraph'
import CardProgram from './CardProgram/CardProgram'
import './CourseProgram.scss'

const CourseProgram = ({ teacherCheck, modules, block, onVisibilityBlock }) => {
  const [courseModules] = useState(modules)
  if (!courseModules.length) return null

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
