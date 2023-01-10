import React, { useEffect, useState } from 'react'
import './CourseUserModal.scss'
import { useDispatch, useSelector } from 'react-redux'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import Modal from '../../UI/Modal2/Modal'
import { getUserRequest } from '../../../store/actions/coursesActions'
import avatarStub from '../../../assets/icons/avatarStub.svg'
import { apiUrl } from '../../../config'
import MainButton from '../../UI/MainButton/MainButton'

const CourseUserModal = ({ setOpen, email }) => {
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)
  let avatarImage = avatarStub
  const [showMore, setShowMore] = useState(false)
  const percentage = 66

  useEffect(() => {
    dispatch(getUserRequest(email))
  }, [email, dispatch])

  const handlerClick = e => {
    setOpen(false)
  }
  const onShowMoreBtn = () => {
    setShowMore(!showMore)
  }

  if (course.image && course.image !== 'undefined') {
    avatarImage = `${apiUrl}/${course.image}`
  }
  return (
    <>
      <div className="course-user-modal__backdrop" onClick={handlerClick} />
      <Modal setOpen={setOpen}>
        <div className="course-user-modal__header">
          {/* <div> */}
          <div className="course-user-modal__header__avatar">
            <img src={avatarImage} alt={course.title} />
          </div>
          {/* </div> */}
          <h2 className="course-user-modal__header__title">email</h2>
          <p className="course-user-modal__header__text">{email}</p>
        </div>
        <div className="container">
          <div className="course-user-modal__title__inner">
            <div className="course-user-modal__title__left">
              <div>
                <div className="course-user-modal__title__left-image">
                  <img src={avatarImage} alt={course.title} />
                </div>
              </div>
              <div className="course-user-modal__title__left-info">
                <h2 className="course-user-modal__title__left-info-title">{course.title}</h2>
              </div>
            </div>
            <div className="course-user-modal__progress">
              <div className="course-user-modal__progress__circle">
                <CircularProgressbar
                  value={percentage}
                  strokeWidth={50}
                  styles={buildStyles({
                    textColor: '#1C1C1E',
                    strokeLinecap: 'butt',
                    pathColor: '#ADFA00',
                    trailColor: '#F2F2F7',
                  })}
                />
              </div>
              <h4 className="course-user-modal__progress__text">{percentage}%</h4>
            </div>
            <MainButton
              className=" course-user-modal__title__button WhiteButton"
              type="button"
              onClick={onShowMoreBtn}
              text={
                <>
                  <i>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.1733 1.38686L7.99997 6.56019L2.82664 1.38686C2.30664 0.866856 1.46664 0.866856 0.946641 1.38686C0.426641 1.90686 0.426641 2.74686 0.946641 3.26686L7.06664 9.38686C7.58664 9.90686 8.42664 9.90686 8.94664 9.38686L15.0666 3.26686C15.5866 2.74686 15.5866 1.90686 15.0666 1.38686C14.5466 0.880189 13.6933 0.866856 13.1733 1.38686Z"
                        fill="#1C1C1E"
                      />
                    </svg>
                  </i>
                </>
              }
            />
          </div>
        </div>
        {showMore && (
          <div className="course-user-modal__tests">
            <h2 className="course-user-modal__test__title">Прогресс студента</h2>
          </div>
        )}
      </Modal>
    </>
  )
}

export default CourseUserModal
