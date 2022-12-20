import React from 'react'
import TeacherCard from './TeacherCard/TeacherCard'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import './TeachersBlock.scss'
import Paragraph from '../Paragraph/Paragraph'

const TeachersBlock = ({ title, subtitle, teachers }) => (
  <>
    <div className="teachers_block">
      <div className="teachers_block_headline">
        <Paragraph title={title} subtitle={subtitle} section="teachersBlock" />
      </div>
      {teachers && (
        <CustomSlider>
          {teachers.map(item => (
            <TeacherCard key={item.name} image={item.image} name={item.name} description={item.description} />
          ))}
        </CustomSlider>
      )}
    </div>
  </>
)

export default TeachersBlock
