import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import LendingTeacherCard from './LendingTecherCard/LendingTeacherCard'
import { fetchTeachersRequest } from '../../store/actions/lendingTeachersActions'
import './LendingTeacherBlock.scss'

const LendingTeacherBlock = () => {
  const dispatch = useDispatch()
  const teachers = useSelector(state => state.teachers.teachers)

  useEffect(() => {
    dispatch(fetchTeachersRequest())
  }, [dispatch])
  console.log(teachers)

  return (
    <>
      <div className="teachers_block">
        <div className="container">
          <div className="teachers_block_headline">
            <div className="teachers_block_text">
              <h5 className="teachers_block_title">Преподаватели — практикующие эксперты</h5>
              <span className="teachers_block_subtitle">Доверьте свое обучение специалистам</span>
            </div>
          </div>
          <CustomSlider>
            <LendingTeacherCard
              // image={teacher_1}
              name="Александр Гаврилин"
              description="Руководитель правовой практики в сфере ПО, технологий, сделок с брендом и данными ЯНДЕКС"
            />
          </CustomSlider>
        </div>
      </div>
    </>
  )
}

export default LendingTeacherBlock
