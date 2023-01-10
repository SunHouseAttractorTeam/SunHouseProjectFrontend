import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiUrl } from '../../config'
import './PassingBlock.scss'

const PassingBlock = ({ event }) => {
  const course = useSelector(state => state.courses.course)
  const [numberOf, setNumberOf] = useState(0)
  useEffect(() => {
    course.modules.forEach(item => {
      const lessonIndex = item.data.findIndex(lessonAsd => lessonAsd._id === event._id)
      if (lessonIndex !== -1) setNumberOf(lessonIndex + 1)
    })
  }, [])
  return (
    <div className="passing">
      <div className="passing_title">
        <p>Урок № {numberOf}</p>
        <h3>{event.title}</h3>
      </div>
      <div className="passing_block">
        <div className="passing_block__title">
          <p>Содержимое занятия</p>
        </div>
        <h6 className="passing_block__subtitle">{event.title}</h6>
        {event.data.map((content, index) => {
          switch (Object.keys(content)[0]) {
            case 'text':
              // eslint-disable-next-line react/no-danger
              return (
                <div
                  key={`${index}textDW`}
                  className="passing_block__text"
                  dangerouslySetInnerHTML={{ __html: event.data[0].text }}
                />
              )
            case 'video':
              // eslint-disable-next-line no-case-declarations
              const link = content.video.replace('watch?v=', 'embed/')
              return (
                <iframe
                  key={index}
                  width="730"
                  height="400"
                  src={link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            case 'audio':
              return (
                <audio key={index} controls>
                  <source src={`${apiUrl}/uploads/${content.audio}`} />
                  <track src={content.audio} kind="captions" srcLang="en" label="english_captions" />
                </audio>
              )
            default:
              return null
          }
        })}
        {event.file && (
          <a className="download" href={`${apiUrl}/uploads/${event.file}`} target="_blank" rel="noreferrer">
            Скачать файл
          </a>
        )}
      </div>
    </div>
  )
}

export default PassingBlock
