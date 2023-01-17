import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import LendingTeacherCard from './LendingTecherCard/LendingTeacherCard'
import { fetchTeachersRequest } from '../../store/actions/lendingTeachersActions'
import noPhoto from '../../assets/icons/cosmosChel.png'
import './LendingTeacherBlock.scss'
import { apiUrl } from '../../config'

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
const LendingTeacherBlock = () => {
  const dispatch = useDispatch()
  const teachers = useSelector(state => state.teachers.teachers)

  useEffect(() => {
    dispatch(fetchTeachersRequest())
  }, [dispatch])

  return (
    <>
      <div className="lending-teachers__block">
        <div className="container">
          <div className="lending-teachers__block-headline">
            <div className="lending-teachers__block-text">
              <h5 className="lending-teachers__block-title">Преподаватели — практикующие эксперты</h5>
              <span className="lending-teachers__block-subtitle">Доверьте свое обучение специалистам</span>
            </div>
          </div>
          <CustomSlider response={sliderSettings}>
            {teachers.map(teacher => (
              <LendingTeacherCard
                key={teacher._id}
                image={teacher.image ? `${apiUrl}/${teacher.image}` : noPhoto}
                name={teacher.name}
                description={teacher.description}
              />
            ))}
          </CustomSlider>
        </div>
      </div>
    </>
  )
}

export default LendingTeacherBlock
