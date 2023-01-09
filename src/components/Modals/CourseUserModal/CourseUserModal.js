import React, { useEffect, useState } from 'react'
import './CourseUserModal.scss'
import { useDispatch } from 'react-redux'
import Modal from '../../UI/Modal2/Modal'
import Avatar from '../../UI/Avatar/Avatar'
import { getUserRequest } from '../../../store/actions/coursesActions'

const CourseUserModal = ({ setOpen, email }) => {
  const dispatch = useDispatch()
  const [course, setCourse] = useState({
    title: '',
    category: '',
  })

  useEffect(() => {
    dispatch(getUserRequest(email))
    console.log(email)
  }, [email, dispatch])

  const handlerClick = e => {
    setOpen(false)
  }

  return (
    <div className="course-user-modal__backdrop" onClick={handlerClick}>
      <Modal setOpen={setOpen}>
        <div className="course-user-modal__header">
          <Avatar className="course-user-modal__avatar" user={null} />
          <h2 className="course-user-modal__title">email</h2>
          <p className="course-user-modal__text">{email}</p>
        </div>
      </Modal>
    </div>
  )
}

export default CourseUserModal
