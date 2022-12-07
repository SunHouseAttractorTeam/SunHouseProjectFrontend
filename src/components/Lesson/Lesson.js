import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SunEditorWYSIWYG from '../UI/SunEditorWYSIWYG/SunEditorWYSIWYG'
import FilesUploader from '../FilesUploader/FilesUploader'
import './Lesson.scss'
import AddContentBlock from '../AddContentBlock/AddContentBlock'
import { editLessonRequest, fetchLessonRequest } from '../../store/actions/lessonsActions'

const Lesson = () => {
  const { lessonId, courseId } = useParams()
  const dispatch = useDispatch()
  const lesson = useSelector(state => state.lessons.lesson)

  const [data, setData] = useState([])

  useEffect(() => {
    dispatch(fetchLessonRequest(lessonId))
  }, [dispatch, lessonId])

  const handleAddContent = type => {
    if (type === 'text') {
      setData([...data, { type, description: '' }])
      // dispatch(addContentInLesson({ type, description: '' }))
    } else if (type === 'video') {
      setData([...data, { type, video: '' }])
      // dispatch(
      //   addContentInLesson({
      //     type,
      //     link: '',
      //   }),
      // )
    } else if (type === 'audio') {
      setData([...data, { type, audio: '' }])
      // dispatch(
      //   addContentInLesson({
      //     type,
      //     audio: '',
      //   }),
      // )
    }
  }

  const inputChangeHandler = (e, index) => {
    const value = JSON.stringify(e)

    setData(prevState => {
      const contentCopy = {
        ...prevState[index],
        description: value,
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
    // const dataAudioCount = data.filter(content => content.type === 'audio')
    //
    // const fileIndex = dataAudioCount.length - 1
    //
    // console.log(fileIndex)

    const file = e.target.files[0]

    console.log(e.target.files)

    setData(prevState => {
      const contentCopy = {
        ...prevState[index],
        audio: file,
      }

      return prevState.map((content, i) => {
        if (index === i) {
          console.log(contentCopy)
          return contentCopy
        }
        return content
      })
    })

    // dispatch(changeLessonAudio({ index, file }))
  }

  const handleSave = () => {
    const formData = new FormData()

    // data.forEach(obj => {
    //   Object.keys(obj).forEach(key => {})
    // })

    formData.append('data', JSON.stringify(data))

    console.log(formData)
    // const dataCopy = data.map(content => {
    //   const formData = new FormData()
    //
    //   Object.keys(content).forEach(key => {
    //     formData.append(key, content[key])
    //   })
    //
    //   return formData
    // })

    dispatch(editLessonRequest({ courseId, lessonId, data: formData }))
  }

  return (
    <>
      {lesson && (
        <div className="lesson-blank">
          <div className="lesson-block">
            <button className="lesson-block__remove" type="button" />
            <h1 className="lesson-block__title">{lesson.title}</h1>
            <p className="lesson-block__editor-title">Содержимое занятия</p>
            {data.map((content, index) => {
              switch (content.type) {
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
            {/* <div className="lesson-block__editor"> */}
            {/*  <p className="lesson-block__editor-title">{lesson.description}</p> */}
            {/*  <SunEditorWYSIWYG /> */}
            {/* </div> */}
            {/* <FilesUploader type="video" /> */}
            {/* <FilesUploader type="audio" /> */}
            <AddContentBlock addContent={handleAddContent} />
            <div className="lesson-block__files">
              <p className="lesson-block__files-title">Прикреплённые файлы</p>
              <FilesUploader />
            </div>
          </div>
          <button className="MainButton GreenButton lesson-save-button" type="button" onClick={handleSave}>
            Сохранить
          </button>
        </div>
      )}
    </>
  )
}

export default Lesson
