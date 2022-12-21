import React from 'react'
import TeacherCard from './TeacherCard/TeacherCard'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import './TeachersBlock.scss'
import teacher_1 from '../../assets/icons/teacher_1.svg'
import teacher_2 from '../../assets/icons/teacher_2.svg'
import teacher_3 from '../../assets/icons/teacher_3.svg'

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
const TeachersBlock = () => (
  <>
    <div className="teachers_block">
      <div className="container">
        <div className="teachers_block_headline">
          <div className="teachers_block_text">
            <h5 className="teachers_block_title">Преподаватели — практикующие эксперты</h5>
            <span className="teachers_block_subtitle">Доверьте свое обучение специалистам</span>
          </div>
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
    </div>
  </>
)

export default TeachersBlock
