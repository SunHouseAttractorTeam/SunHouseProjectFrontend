import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SunEditorWYSIWYG from '../UI/SunEditorWYSIWYG/SunEditorWYSIWYG'
import FilesUploader from '../FilesUploader/FilesUploader'
import AddContentBlock from '../AddContentBlock/AddContentBlock'
import { editLessonRequest, fetchLessonRequest } from '../../store/actions/lessonsActions'
import './Lesson.scss'

const Lesson = () => {
  const { lessonId, courseId } = useParams()
  const dispatch = useDispatch()
  const lesson = useSelector(state => state.lessons.lesson)

  const [data, setData] = useState([])

  useEffect(() => {
    dispatch(fetchLessonRequest(lessonId))
  }, [dispatch, lessonId])

  useEffect(() => {
    if (lesson) {
      if (data.length === 0) {
        setData([{ title: lesson.title }])
      }
    }
  }, [lesson])

  const handleAddContent = type => {
    setData([...data, { [type]: '' }])
  }

  const inputChangeHandler = (e, index) => {
    const value = JSON.stringify(e)

    setData(prevState => {
      const contentCopy = {
        ...prevState[index],
        text: value,
      }

      return prevState.map((content, i) => {
        if (index === i) {
          return contentCopy
        }
        return content
      })
    })
  }

  const fileChangeHandler = (index, e) => {
    const file = e.target.files[0]

    setData(prevState => {
      const contentCopy = {
        ...prevState[index],
        audio: file,
      }

      return prevState.map((content, i) => {
        if (index === i) {
          return contentCopy
        }
        return content
      })
    })
  }

  const lastFileChangeHandler = e => {
    const file = e.target.files[0]
    setData(prevState => [...prevState, { file }])
  }

  const handleSave = () => {
    const formData = new FormData()

    data.forEach(elem => {
      Object.keys(elem).forEach(key => {
        if (key === 'audio' || key === 'file') {
          formData.append(key, elem[key])
        }
      })
    })

    formData.append('payload', JSON.stringify(data))

    dispatch(editLessonRequest({ courseId, lessonId, data: formData, title: lesson.title }))
  }

  return (
    <>
      {lesson && (
        <div className="lesson-blank">
          <div className="lesson-block">
            <button className="lesson-block__remove" type="button" />
            <h1 className="lesson-block__title">{lesson?.title}</h1>
            <p className="lesson-block__editor-title">Содержимое занятия</p>
            {data.map((content, index) => {
              switch (Object.keys(content)[0]) {
                case 'text':
                  return (
                    <div key={index} className="lesson-block__editor">
                      <SunEditorWYSIWYG onChange={e => inputChangeHandler(e, index)} value={content.description} />
                    </div>
                  )
                case 'video':
                  return <FilesUploader key={index} type="video" />
                case 'audio':
                  return <FilesUploader key={index} type="audio" onChange={e => fileChangeHandler(index, e)} />
                default:
                  return null
              }
            })}
            <AddContentBlock addContent={handleAddContent} />
            <div className="lesson-block__files">
              <p className="lesson-block__files-title">Прикреплённые файлы</p>
              <FilesUploader type="file" onChange={lastFileChangeHandler} />
            </div>
          </div>
          <button className="MainButton GreenButton lesson-save-button" type="button" onClick={handleSave}>
            Сохранить
          </button>
          {data.map(item => (
            <>
              {item.title && <div style={{ marginBottom: '20px' }}>{item.title}</div>}
              {item.text && <div style={{ marginBottom: '20px' }}>{item.text}</div>}
              {item.audio && <div style={{ marginBottom: '20px' }}>audio</div>}
            </>
          ))}
        </div>
      )}
    </>
  )
}

export default Lesson
