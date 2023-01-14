import React, { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import TeacherCard from './TeacherCard/TeacherCard'
import CustomSlider from '../UI/CustomSlider/CustomSlider'
import Paragraph from '../Paragraph/Paragraph'
import Modal from '../UI/Modal2/Modal'
import Card from '../UI/Cards/Card/Card'
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
const TeachersBlock = ({ title, subtitle, teacherCheck, teachers, onVisibilityBlock, block, searchTeachers }) => {
  const [open, setOpen] = useState(false)
  const [teacher, setTeacher] = useState({
    user: '',
    description: '',
  })
  const currentSearchTeachers = []
  const newTeachers = [...teachers]

  const handlerClick = () => {
    setOpen(true)
  }
  const ChangeSearchItem = item => {
    setTeacher(prev => ({
      ...prev,
      user: item,
      description: prev.description,
    }))
  }

  const updateDescription = e => {
    e.preventDefault()

    newTeachers.push(teacher)

    onVisibilityBlock('lendingTeachers', newTeachers)
    setTeacher({
      user: '',
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

  if (searchTeachers) {
    searchTeachers.map(user =>
      currentSearchTeachers.push({
        _id: user._id,
        name: user.email,
        avatar: user.avatar,
        username: user.username,
      }),
    )
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
      {teacherCheck ? (
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
                  <Card>
                    <ReactSearchAutocomplete
                      className="inputModal"
                      items={currentSearchTeachers}
                      onSelect={ChangeSearchItem}
                    />
                  </Card>
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
                key={(teacherObj.user && teacherObj.user._id) || teacherObj.name}
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
