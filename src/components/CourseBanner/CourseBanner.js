import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../assets/images/banner.jpg'
import './CourseBanner.scss'

const CourseBanner = ({ id, user, courseImage, title }) => {
  let image = banner

  if (courseImage) {
    image = courseImage
  }

  return (
    <div className="course-banner">
      <div className="container">
        <Link to={`/course/${id}`} className="course-banner__course-button">
          <i>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.61333 13.1733L3.43999 7.99997L8.61333 2.82664C9.13333 2.30664 9.13333 1.46664 8.61333 0.946641C8.09333 0.426641 7.25333 0.426641 6.73333 0.946641L0.613328 7.06664C0.0933277 7.58664 0.0933277 8.42664 0.613328 8.94664L6.73333 15.0666C7.25333 15.5866 8.09333 15.5866 8.61333 15.0666C9.11999 14.5466 9.13333 13.6933 8.61333 13.1733Z"
                fill="#1C1C1E"
              />
            </svg>
          </i>
          Главная страница курса
        </Link>
      </div>
      <div className="course-banner__image">
        <img src={image} alt={title} />
        <div className="container course-banner__image-container">
          {user?.role === 'teacher' && (
            <Link to={`/course/${id}/edit`} className="course__banner-edit-button">
              <i>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 15.4601V18.5001C0 18.7801 0.22 19.0001 0.5 19.0001H3.54C3.67 19.0001 3.8 18.9501 3.89 18.8501L14.81 7.94006L11.06 4.19006L0.15 15.1001C0.0500001 15.2001 0 15.3201 0 15.4601ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006V5.04006Z"
                    fill="#2C2C2E"
                  />
                </svg>
              </i>
              Редактор курса
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseBanner
