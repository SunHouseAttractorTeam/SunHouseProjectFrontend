import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import LendingTeacherCard from './LendingTecherCard/LendingTeacherCard'
import { fetchTeachersRequest } from '../../store/actions/lendingTeachersActions'
import noPhoto from '../../assets/icons/cosmosChel.png'
import './LendingTeacherBlock.scss'
import { apiUrl } from '../../config'

const LendingTeacherBlock = () => {
  const dispatch = useDispatch()
  const teachers = useSelector(state => state.teachers.teachers)

  useEffect(() => {
    dispatch(fetchTeachersRequest())
  }, [dispatch])

  return (
    <>
      <div className="lending-teachers_block">
        <div className="container">
          <div className="lending-teachers_block_headline">
            <div className="lending-teachers_block_text">
              <h5 className="lending-teachers_block_title">Преподаватели — практикующие эксперты</h5>
              <span className="lending-teachers_block_subtitle">Доверьте свое обучение специалистам</span>
            </div>
          </div>
          <CustomSlider>
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
