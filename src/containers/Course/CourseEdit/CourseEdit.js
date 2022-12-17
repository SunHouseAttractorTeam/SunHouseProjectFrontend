import React, { useEffect, useState } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourseRequest } from '../../../store/actions/coursesActions'
import ModalTaskSetting from '../../../components/Modals/ModalTaskSetting/ModalTaskSetting'
import ModalCreateModal from '../../../components/Modals/ModuleCreateModal/ModuleCreateModal'
import CreateLessonModal from '../../../components/Modals/CreateLessonModal/CreateLessonModal'
import CreateTestModal from '../../../components/Modals/CreateTestModal/CreateTestModal'
import ModalAddContent from '../../../components/Modals/ModalAddContent/ModalAddContent'
import CourseModules from '../../../components/CourseModules/CourseModules'
import LessonBlock from '../../../components/LessonBlock/LessonBlock'
import TaskBlock from '../../../components/TaskBlock/TaskBlock'
import TestBlock from '../../../components/TestBlock/TestBlock'
import './CourseEdit.scss'

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
    <div className="container">
      {course && (
        <div className="course-edit">
          <div className="course-edit__left">
            <CourseModules
              id={id}
              course={course}
              handleAddModule={handleAddModule}
              handleAddContent={handleAddContent}
            />
          </div>
          <div className="course-edit__right">
            <Switch>
              <Route path="/course/:courseId/edit/lesson/:lessonId" component={LessonBlock} />
              <Route path="/course/:courseId/edit/task/:taskId" component={TaskBlock} />
              <Route path="/course/:courseId/edit/test/:testId" component={TestBlock} />
            </Switch>
          </div>
        </div>
      )}
      {open && (
        <>
          {modalType === 'content' && (
            <ModalAddContent
              setOpen={setOpen}
              contentType={contentType}
              setContentType={setContentType}
              handleClick={handleClickNext}
            />
          )}
          {modalType === 'module' && <ModalCreateModal id={id} setOpen={setOpen} />}
          {modalType === 'task' && (
            <ModalTaskSetting setOpen={setOpen} courseId={id} moduleId={moduleId} setModalType={setModalType} />
          )}
          {modalType === 'lesson' && (
            <CreateLessonModal setOpen={setOpen} courseId={id} moduleId={moduleId} setModalType={setModalType} />
          )}
          {modalType === 'test' && (
            <CreateTestModal setOpen={setOpen} courseId={id} moduleId={moduleId} setModalType={setModalType} />
          )}
        </>
      )}
    </div>
  )
}

export default CourseEdit
