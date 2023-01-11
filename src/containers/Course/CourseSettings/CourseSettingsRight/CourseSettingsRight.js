import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { getAllUsersRequest } from '../../../../store/actions/usersActions'
import { addUsersCourseRequest, fetchCourseRequest } from '../../../../store/actions/coursesActions'
import Modal from '../../../../components/UI/Modal2/Modal'
import MainButton from '../../../../components/UI/MainButton/MainButton'
import Card from '../../../../components/UI/Cards/Card/Card'
import './CourseSettingsRight.scss'
import CourseUserModal from '../../../../components/Modals/CourseUserModal/CourseUserModal'

const CourseSettingsRight = ({ course }) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const users = useSelector(state => state.users.users)
  const items = []
  const [open, setOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const [role, setRole] = useState('users')
  const [isChecked, setIsChecked] = useState(false)
  const [participant, setParticipant] = useState(null)
  const [userModal, setUserModal] = useState(null)

  useEffect(() => {
    dispatch(getAllUsersRequest())
  }, [dispatch])

  const ChangeSearchItem = item => {
    setParticipant(item)
  }

  const handleOnChange = e => {
    setIsChecked(!isChecked)
    setRole(e)
  }

  const addParticipantInCourse = async () => {
    await dispatch(addUsersCourseRequest({ idCourse: id, idUser: participant.id, role }))
    await dispatch(fetchCourseRequest(id))
    setOpen(false)
  }

  if (users) {
    users.map(user => items.push({ id: user._id, name: user.email }))
  }

  return (
    <>
      <div className="block-right">
        <div className="container">
          <div className="block-right_top-block">
            <span className="block-right_top-block_title">Все ученики курса</span>
            <div className="block-right_top-block_btn">
              <MainButton
                className="GreenButton block-right_top-block_btn"
                type="button"
                onClick={() => setOpen(true)}
                text="+ Пригласить ученика"
              />
            </div>
          </div>
          <div className="block-right_name-block">
            <div className="block-right_name-block_top">
              <span className="block-right_name-block_top_title">Имя ученика</span>
              <span className="block-right_name-block_top_title">Задания учеников</span>
              <span className="block-right_name-block_top_title">Одобрение задания</span>
            </div>
            {course.users.map(user => (
              <div
                key={user._id}
                className="block-right_name-block_top"
                onClick={async () => {
                  // await dispatch(getUserRequest(user.email))
                  await setUserModal(user)
                  setUserOpen(true)
                }}
              >
                <span className="block-right_name-block_top_name">{user.username}</span>
                <span>Task</span>
                <div className="block-right_name-block_top_buttons">
                  <div>
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM8.748 17.148L4.44 12.84C3.972 12.372 3.972 11.616 4.44 11.148C4.908 10.68 5.664 10.68 6.132 11.148L9.6 14.604L17.856 6.348C18.324 5.88 19.08 5.88 19.548 6.348C20.016 6.816 20.016 7.572 19.548 8.04L10.44 17.148C9.984 17.616 9.216 17.616 8.748 17.148Z"
                        fill="#828282"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 0C5.364 0 0 5.364 0 12C0 18.636 5.364 24 12 24C18.636 24 24 18.636 24 12C24 5.364 18.636 0 12 0ZM17.16 17.16C16.692 17.628 15.936 17.628 15.468 17.16L12 13.692L8.532 17.16C8.064 17.628 7.308 17.628 6.84 17.16C6.372 16.692 6.372 15.936 6.84 15.468L10.308 12L6.84 8.532C6.372 8.064 6.372 7.308 6.84 6.84C7.308 6.372 8.064 6.372 8.532 6.84L12 10.308L15.468 6.84C15.936 6.372 16.692 6.372 17.16 6.84C17.628 7.308 17.628 8.064 17.16 8.532L13.692 12L17.16 15.468C17.616 15.924 17.616 16.692 17.16 17.16Z"
                        fill="#828282"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {userOpen ? <CourseUserModal setOpen={setUserOpen} user={userModal} /> : null}
      {open ? (
        <Modal setOpen={setOpen}>
          <Card>
            <ReactSearchAutocomplete className="inputModal" items={items} onSelect={ChangeSearchItem} />
            <input
              type="checkbox"
              name="student"
              value="student"
              onChange={() => handleOnChange('users')}
              checked={!isChecked}
            />
            Студент
            <input
              type="checkbox"
              name="teacher"
              value="teacher"
              onChange={() => handleOnChange('teachers')}
              checked={isChecked}
            />
            Учитель
            <MainButton className="GreenButton" type="button" text="+ Пригласить" onClick={addParticipantInCourse} />
          </Card>
        </Modal>
      ) : null}
    </>
  )
}

export default CourseSettingsRight
