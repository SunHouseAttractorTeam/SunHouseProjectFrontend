import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../../store/actions/coursesActions'
import Modal from '../../../components/UI/ModalWin/Modal/Modal'
import FormInput from '../../../components/UI/Form/FormInput/FormInput'
import { createModuleRequest } from '../../../store/actions/modulesActions'
import { createTaskRequest } from '../../../store/actions/tasksActions'
import { createLessonRequest } from '../../../store/actions/lessonsActions'

const CourseEdit = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)

  const [open, setOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const [state, setState] = useState({
    title: '',
  })
  const [contentType, setContentType] = useState('')
  const [moduleId, setModuleId] = useState(null)

  useEffect(() => {
    if (!course) {
      dispatch(fetchCourseRequest(id))
    }
  }, [dispatch, id, course])

  const handleAddModule = () => {
    setOpen(true)
    setModalType('module')
  }

  const inputChangeHandler = e => {
    const { name, value } = e.target

    setState(prev => ({ ...prev, [name]: value }))
  }

  const handleCreateModule = () => {
    dispatch(createModuleRequest({ id, moduleData: state }))
    setOpen(false)
  }

  const handleAddContent = idModule => {
    setModuleId(idModule)
    setOpen(true)
    setModalType('content')
  }

  const handleClickNext = () => {
    if (contentType === 'task') {
      setModalType('task')
    } else if (contentType === 'lesson') {
      setModalType('lesson')
    }
  }

  const handleCreateTask = () => {
    if (contentType === 'task') {
      dispatch(createTaskRequest({ courseId: id, moduleId, taskData: state }))
    } else if (contentType === 'lesson') {
      dispatch(createLessonRequest({ courseId: id, moduleId, lessonData: state }))
    }

    dispatch(createTaskRequest({ courseId: id, moduleId, taskData: state }))

    setOpen(false)
  }

  return (
    <>
      {course && (
        <div className="course-edit">
          <div className="course-edit__left">
            <div className="course-edit__left-card">
              <h6 className="course-edit__left-card-title">Структура курса</h6>
              {course.modules.length > 0 &&
                course.modules.map(module => (
                  <div key={module._id}>
                    <h6 className="course-edit__left-card-module-title">{module.title}</h6>
                    <ul className="course-edit__left-card-module-list">
                      {module.data.map(item => (
                        <li
                          key={item.id}
                          className={`course-edit__left-card-module-list-item course-edit__left-card-module-list-item--${item.type}`}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                    <button type="button" onClick={() => handleAddContent(module._id)}>
                      + Занятие
                    </button>
                  </div>
                ))}
              <button type="button" onClick={handleAddModule}>
                + Модуль
              </button>
            </div>
          </div>
          <div className="course-edit__right" />
        </div>
      )}
      {open && (
        <>
          {modalType === 'module' && (
            <Modal setOpen={setOpen}>
              <h6>Создать модуля</h6>
              <FormInput
                onChange={inputChangeHandler}
                name="title"
                placeholder="Введите название модуля"
                value={state.title}
              />
              <button type="button" onClick={handleCreateModule}>
                Создать модуль
              </button>
            </Modal>
          )}
          {modalType === 'content' && (
            <Modal setOpen={setOpen}>
              <h6>Добавить контент</h6>
              <form>
                <div>
                  <div>
                    <input
                      type="radio"
                      value="lesson"
                      checked={contentType === 'lesson'}
                      onChange={e => setContentType(e.target.value)}
                    />
                    Lesson
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="task"
                      checked={contentType === 'task'}
                      onChange={e => setContentType(e.target.value)}
                    />
                    Task
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="test"
                      checked={contentType === 'test'}
                      onChange={e => setContentType(e.target.value)}
                    />
                    Test
                  </div>
                </div>
              </form>
              <button type="button" onClick={handleClickNext}>
                Далее
              </button>
            </Modal>
          )}
          {modalType === 'task' && (
            <Modal setOpen={setOpen}>
              <h6>Настройте задание</h6>
              <FormInput
                onChange={inputChangeHandler}
                name="title"
                placeholder="Название задания"
                value={state.title}
              />
              <button type="button" onClick={handleCreateTask}>
                Добавить задание
              </button>
            </Modal>
          )}
          {modalType === 'lesson' && (
            <Modal setOpen={setOpen}>
              <h6>Настройте занятие</h6>
              <FormInput
                onChange={inputChangeHandler}
                name="title"
                placeholder="Название занятия"
                value={state.title}
              />
              <button type="button" onClick={handleCreateTask}>
                Добавить занятие
              </button>
            </Modal>
          )}
        </>
      )}
    </>
  )
}

export default CourseEdit
