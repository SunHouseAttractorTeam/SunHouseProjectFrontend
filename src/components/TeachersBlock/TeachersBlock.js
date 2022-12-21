import React from 'react'
import TeacherCard from './TeacherCard/TeacherCard'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import './TeachersBlock.scss'
import teacher_1 from '../../assets/icons/teacher_1.svg'
import teacher_2 from '../../assets/icons/teacher_2.svg'
import teacher_3 from '../../assets/icons/teacher_3.svg'
import Paragraph from '../Paragraph/Paragraph'

const sliderSettings = [
  {
    breakpoint: 1170,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '150px',
    },
  },
  {
    breakpoint: 870,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '50px',
    },
  },
  {
    breakpoint: 700,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
]
const TeachersBlock = ({ title, subtitle }) => (
  <>
    <div className="teachers_block">
      <div className="teachers_block_headline">
        <Paragraph title={title} subtitle={subtitle} section="teachersBlock" />
      </div>
      <CustomSlider response={sliderSettings}>
        <TeacherCard
          image={teacher_1}
          name="Александр Гаврилин"
          description="Руководитель правовой практики в сфере ПО, технологий, сделок с брендом и данными ЯНДЕКС"
        />
        <TeacherCard
          image={teacher_2}
          name="Александр Гаврилин"
          description="Руководитель правовой практики в сфере ПО, технологий, сделок с брендом и данными ЯНДЕКС"
        />
        <TeacherCard
          image={teacher_3}
          name="Александр Гаврилин"
          description="Руководитель правовой практики в сфере ПО, технологий, сделок с брендом и данными ЯНДЕКС"
        />
      </CustomSlider>
    </div>
  </>
)

export default TeachersBlock
