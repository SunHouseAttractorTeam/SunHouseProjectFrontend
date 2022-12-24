import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TeacherCard from './TeacherCard/TeacherCard'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import './TeachersBlock.scss'
import teacher_1 from '../../assets/icons/teacher_1.svg'
import teacher_2 from '../../assets/icons/teacher_2.svg'
import teacher_3 from '../../assets/icons/teacher_3.svg'
import Paragraph from '../Paragraph/Paragraph'
import Modal from '../UI/Modal2/Modal'
import { updateDescriptionRequest } from '../../store/actions/descriptionsActions'

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
const TeachersBlock = ({ title, subtitle, accessCheck, section }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState({
    gmail: '',
    name: '',
  })

  const handlerClick = () => {
    setOpen(true)
  }

  const updateDescription = e => {
    e.preventDefault()
    if (!section) {
      setOpen(false)
      return
    }
    dispatch(
      updateDescriptionRequest({
        section,
        text: description,
      }),
    )
    setOpen(false)
  }

  const inputChangeHandler = e => {
    const { name, value } = e.target
    setDescription(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="teachers_block">
      <div className="teachers_block_headline">
        <Paragraph title={title} subtitle={subtitle} section="teachersBlock" accessCheck={accessCheck} />
      </div>
      {accessCheck && accessCheck() ? (
        <>
          <button type="button" className="teachers_block__btn-plus" onClick={handlerClick}>
            +
          </button>
          {open && (
            <Modal setOpen={setOpen}>
              <form onSubmit={updateDescription}>
                <div className="block__modal">
                  <input
                    className="block__add-description"
                    name="gmail"
                    value={description.gmail}
                    onChange={inputChangeHandler}
                    placeholder="Введите почту..."
                  />
                  <input
                    className="block__add-description"
                    name="name"
                    value={description.name}
                    onChange={inputChangeHandler}
                    placeholder="Введите описание..."
                  />
                  <button className="block__modal-btn" type="submit">
                    Сохранить
                  </button>
                </div>
              </form>
            </Modal>
          )}
        </>
      ) : (
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
      )}
    </div>
  )
}

export default TeachersBlock
