import React, { useState } from 'react'
import TeacherCard from './TeacherCard/TeacherCard'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import Paragraph from '../Paragraph/Paragraph'
import Modal from '../UI/Modal2/Modal'
import './TeachersBlock.scss'

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
const TeachersBlock = ({ title, subtitle, teacherCheck, teachers, onVisibilityBlock, block, newTeachers }) => {
  const [open, setOpen] = useState(false)
  const [teacher, setTeacher] = useState({
    email: '',
    description: '',
  })

  const handlerClick = () => {
    setOpen(true)
  }

  const updateDescription = e => {
    e.preventDefault()

    newTeachers.push(teacher)

    onVisibilityBlock('lendingTeachers', newTeachers)
    setTeacher({
      email: '',
      description: '',
    })
    setOpen(false)
  }

  const inputChangeHandler = e => {
    const { name, value } = e.target
    setTeacher(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="teachers_block">
      <div className="teachers_block_headline">
        <Paragraph
          title={title}
          subtitle={subtitle}
          teacherCheck={teacherCheck}
          onVisibility={onVisibilityBlock}
          type="blockTeachers"
          isVisibility={block?.visibility}
        />
      </div>
      {teacherCheck && teacherCheck() ? (
        <>
          <CustomSlider response={sliderSettings}>
            {teachers.length !== 0 &&
              teachers.map(teacherObj => (
                <TeacherCard
                  key={teacherObj._id || teacherObj.name}
                  user={teacherObj.user}
                  description={teacherObj.description}
                />
              ))}
          </CustomSlider>
          <button type="button" className="teachers_block__btn-plus" onClick={handlerClick}>
            +
          </button>
          {open && (
            <Modal setOpen={setOpen}>
              <form onSubmit={updateDescription}>
                <div className="block__modal">
                  <input
                    className="block__add-description"
                    name="email"
                    value={teacher.email}
                    onChange={inputChangeHandler}
                    placeholder="Введите почту..."
                  />
                  <input
                    className="block__add-description"
                    name="description"
                    value={teacher.description}
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
          {teachers.length !== 0 &&
            teachers.map(teacherObj => (
              <TeacherCard
                key={teacherObj._id || teacherObj.name}
                user={teacherObj.user}
                description={teacherObj.description}
              />
            ))}
        </CustomSlider>
      )}
    </div>
  )
}

export default TeachersBlock
