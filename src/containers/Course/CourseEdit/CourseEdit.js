import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../../store/actions/coursesActions'
import ModalTaskSetting from '../../../components/Modals/ModalTaskSetting/ModalTaskSetting'
import ModalCreateModal from '../../../components/Modals/ModuleCreateModal/ModuleCreateModal'
import CreateLessonModal from '../../../components/Modals/CreateLessonModal/CreateLessonModal'
import CreateTestModal from '../../../components/Modals/CreateTestModal/CreateTestModal'
import Modal from '../../../components/UI/Modal2/Modal'
import Lesson from '../../../components/Lesson/Lesson'

const CourseEdit = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const course = useSelector(state => state.courses.course)

  const [open, setOpen] = useState(false)
  const [modalType, setModalType] = useState('')
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
                          key={item._id}
                          className={`course-edit__left-card-module-list-item course-edit__left-card-module-list-item--${item.type}`}
                        >
                          <Link to={`/course/${id}/edit/${item.type}/${item._id}`}> {item.title}</Link>
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
          <div className="course-edit__right">
            <Switch>
              <Route path="/course/:courseId/edit/Lesson/:lessonId" component={Lesson} />
            </Switch>
          </div>
        </div>
      )}
      {open && (
        <>
          {modalType === 'module' && <ModalCreateModal id={id} setOpen={setOpen} />}
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
          {modalType === 'task' && <ModalTaskSetting setOpen={setOpen} courseId={id} moduleId={moduleId} />}
          {modalType === 'lesson' && <CreateLessonModal setOpen={setOpen} courseId={id} moduleId={moduleId} />}
          {modalType === 'test' && <CreateTestModal setOpen={setOpen} courseId={id} moduleId={moduleId} />}
        </>
      )}
    </>
  )
}

export default CourseEdit
