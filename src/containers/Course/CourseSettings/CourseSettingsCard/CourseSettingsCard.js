import React from 'react'
import { inputChangeHandler } from '../../../../components/UI/Form/Handlers/Handlers'
import banner from '../../../../assets/images/banner.jpg'
import { apiUrl } from '../../../../config'
import './CourseSettingsCard.scss'

const CourseSettingsCard = ({ course, setCourse }) => {
  const changeInputState = e => {
    inputChangeHandler({ target: { name: 'image', value: e.target.files[0] } }, setCourse)
  }

  return (
    <div className="left-card">
      <div className="left-card__image-block">
        <img
          src={course.image ? `${apiUrl}/${course.image}` : banner}
          alt={course.title}
          className="left-card__image-block-image"
        />
        <i className="left-card__image-block-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.87501 2.57813C3.88126 2.8875 2.86876 3.91875 2.57813 4.92188C2.45626 5.33438 2.43751 7.86563 2.45626 24.1875L2.48438 42.9844L2.75626 43.5469C3.11251 44.2594 3.74063 44.8875 4.45313 45.2438L5.01563 45.5156L14.5125 45.5438L24 45.5625V43.1719V40.7813H15.975H7.95001L7.58438 40.4156C7.26563 40.1063 7.21876 39.9938 7.21876 39.6375C7.21876 39.3563 7.28438 39.1313 7.43438 38.9438C7.54688 38.7844 9.55313 36.4781 11.8969 33.8156C15.5438 29.6531 16.2 28.9594 16.5 28.8656C17.2031 28.65 17.3438 28.7625 19.5563 31.275C20.6719 32.5406 21.6 33.5531 21.6281 33.525C21.6563 33.4969 23.325 30.9 25.35 27.7406C27.3656 24.5813 29.1375 21.9188 29.2688 21.8156C29.5875 21.5719 30.2438 21.5625 30.5906 21.7875C30.7406 21.8906 31.1813 22.5469 31.6875 23.4281C32.1469 24.2344 32.5688 24.9469 32.6063 25.0125C32.6719 25.1156 32.8875 25.0688 33.675 24.8063C35.8313 24.0844 36 24.075 41.0438 24.0281L45.5625 23.9813L45.5438 14.5031L45.5156 5.01563L45.2438 4.45313C44.8875 3.74063 44.2594 3.1125 43.5469 2.75625L42.9844 2.48438L24.1406 2.46563C8.20313 2.45625 5.23126 2.46563 4.87501 2.57813ZM18.9563 10.9125C19.8469 11.1094 20.5594 11.475 21.2156 12.0938C21.9188 12.75 22.3781 13.4813 22.6031 14.325C23.4469 17.3625 21.1688 20.3625 18 20.3625C14.8313 20.3625 12.5531 17.3625 13.3969 14.325C13.8563 12.6469 15.3 11.2969 17.0156 10.9219C17.7563 10.7531 18.1969 10.7531 18.9563 10.9125Z"
              fill="white"
            />
            <path
              d="M37.6125 28.9498C37.05 29.156 36.5438 29.5873 36.2531 30.1404C36.0563 30.4967 36.0469 30.656 36.0188 33.2529L35.9906 35.9904L33.2531 36.0185C30.6469 36.0467 30.4969 36.056 30.1313 36.2529C28.9594 36.881 28.4813 38.3248 29.0719 39.4779C29.2969 39.9373 30 40.5373 30.45 40.6685C30.6938 40.7435 31.6969 40.781 33.4031 40.781H35.9906L36.0188 43.5185C36.0469 45.9842 36.0656 46.3029 36.225 46.5935C37.0313 48.1123 38.9063 48.4592 40.0688 47.2873C40.7438 46.6217 40.7813 46.3967 40.7813 43.3873V40.781H43.3875C46.3406 40.781 46.6125 40.7342 47.2313 40.1342C47.7656 39.6092 47.9531 39.1592 47.9531 38.3904C47.9438 37.9029 47.8969 37.631 47.7469 37.3498C47.4563 36.806 46.7719 36.2342 46.2656 36.1029C46.0125 36.0373 44.8781 35.9998 43.3219 35.9998H40.7813V33.4123C40.7813 31.6967 40.7438 30.6935 40.6688 30.4498C40.5375 29.9904 39.9375 29.2967 39.4688 29.0623C38.925 28.781 38.2031 28.7435 37.6125 28.9498Z"
              fill="white"
            />
          </svg>
        </i>
        <input type="file" onChange={changeInputState} className="left-card__image-block-input" />
      </div>
      <div className="left-card_info-block">
        {course.publish ? (
          <p className="left-card_info-block_status publish">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#ADFA00" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM5.832 11.432L2.96 8.56C2.648 8.248 2.648 7.744 2.96 7.432C3.272 7.12 3.776 7.12 4.088 7.432L6.4 9.736L11.904 4.232C12.216 3.92 12.72 3.92 13.032 4.232C13.344 4.544 13.344 5.048 13.032 5.36L6.96 11.432C6.656 11.744 6.144 11.744 5.832 11.432Z"
                fill="#ADFA00"
              />
            </svg>
            Опубликовано
          </p>
        ) : (
          <p className="left-card_info-block_status no-publish">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#FF3B30" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0C3.576 0 0 3.576 0 8C0 12.424 3.576 16 8 16C12.424 16 16 12.424 16 8C16 3.576 12.424 0 8 0ZM11.44 11.44C11.128 11.752 10.624 11.752 10.312 11.44L8 9.128L5.688 11.44C5.376 11.752 4.872 11.752 4.56 11.44C4.248 11.128 4.248 10.624 4.56 10.312L6.872 8L4.56 5.688C4.248 5.376 4.248 4.872 4.56 4.56C4.872 4.248 5.376 4.248 5.688 4.56L8 6.872L10.312 4.56C10.624 4.248 11.128 4.248 11.44 4.56C11.752 4.872 11.752 5.376 11.44 5.688L9.128 8L11.44 10.312C11.744 10.616 11.744 11.128 11.44 11.44Z"
                fill="#FF3B30"
              />
            </svg>
            Не опубликовано
          </p>
        )}

        <p className="left-card_info-block_title">{course.title}</p>
        <p className="left-card_info-block_description">
          {course.description ? course.description : 'добавьте описание если необходимо'}
        </p>
      </div>
    </div>
  )
}
export default CourseSettingsCard
