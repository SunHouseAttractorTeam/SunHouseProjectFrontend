import React from 'react'
import { useHistory } from 'react-router-dom'

const CourseReview = ({ user, course }) => {
  const history = useHistory()

  const handleSettings = () => {
    history.push(`/course/${course._id}/settings`)
  }

  return (
    <div className="course-review">
      <div className="course-review__top">
        <div className="container">
          <div className="course-review__top-inner">
            <div className="course-review__top-left">
              <img src="" alt={course?.title} className="course-review__top-left-img" />
              <div className="course-review__top-left-title">
                <p className="course-review__top-left-title-name">{course?.title}</p>
                <p className="course-review__top-left-title-description">{course?.description}</p>
              </div>
            </div>
            {user?.role === 'teacher' && (
              <div className="course-review__top-right">
                <button type="button" onClick={handleSettings}>
                  Настройки
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="course-review__bottom" />
    </div>
  )
}

export default CourseReview
