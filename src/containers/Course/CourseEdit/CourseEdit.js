import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../../store/actions/coursesActions'
import Modal from '../../../components/UI/Modal2/Modal'
import FormInput from '../../../components/UI/Form/FormInput/FormInput'
import { createModuleRequest } from '../../../store/actions/modulesActions'
import { createTaskRequest } from '../../../store/actions/tasksActions'
import { createLessonRequest } from '../../../store/actions/lessonsActions'
import { createTestRequest } from '../../../store/actions/testsActions'
import ModalTaskSetting from '../../../components/Modals/ModalTaskSetting/ModalTaskSetting'

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
    setState({
      title: '',
    })
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
    } else if (contentType === 'test') {
      setModalType('test')
    }
  }

  const handleCreateContent = () => {
    if (contentType === 'task') {
      dispatch(createTaskRequest({ courseId: id, moduleId, taskData: state }))
    } else if (contentType === 'lesson') {
      dispatch(createLessonRequest({ courseId: id, moduleId, lessonData: state }))
    } else if (contentType === 'test') {
      dispatch(createTestRequest({ courseId: id, moduleId, testData: state }))
    }

    setOpen(false)
    setState({
      title: '',
    })
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
                          <Link to={`/course/${id}/edit/${item.type}/${item.id}`}> {item.title}</Link>
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
          {modalType === 'task' && <ModalTaskSetting clicked={setOpen} />}
          {modalType === 'lesson' && (
            <Modal setOpen={setOpen}>
              <h6>Настройте занятие</h6>
              <FormInput
                onChange={inputChangeHandler}
                name="title"
                placeholder="Название занятия"
                value={state.title}
              />
              <button type="button" onClick={handleCreateContent}>
                Добавить занятие
              </button>
            </Modal>
          )}
          {modalType === 'test' && (
            <Modal setOpen={setOpen}>
              <h6>Настройте тест</h6>
              <FormInput onChange={inputChangeHandler} name="title" placeholder="Название теста" value={state.title} />
              <button type="button" onClick={handleCreateContent}>
                Добавить тест
              </button>
            </Modal>
          )}
        </>
      )}
    </>
  )
}

export default CourseEdit
