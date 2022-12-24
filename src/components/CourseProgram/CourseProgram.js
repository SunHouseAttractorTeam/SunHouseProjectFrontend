import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paragraph from '../Paragraph/Paragraph'
import './CourseProgram.scss'
import CardProgram from './CardProgram/CardProgram'
import { fetchModulesRequest } from '../../store/actions/modulesActions'

const CourseProgram = ({ accessCheck }) => {
  const modules = useSelector(state => state.modules.modules)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchModulesRequest())
  }, [dispatch])

  return (
    <div className="program-block">
      <Paragraph title="Программа курса" section="courseProgram" accessCheck={accessCheck} />
      <div className="program-block__cards">
        {modules && modules.map(item => <CardProgram key={item._id} title={item.title} />)}
        <button type="button" className="program-block__btn MainButton GreenButton">
          {accessCheck && accessCheck() ? <>Сохранить изменения</> : <>Записаться на курс</>}
        </button>
      </div>
    </div>
  )
}

export default CourseProgram
