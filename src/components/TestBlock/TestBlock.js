import React from 'react'
import './TestBlock.scss'
import ContentForm from '../ContentForm/ContentForm'

const Test = () => (
  <div className="test-block container">
    <ContentForm title="Test" type="test">
      <div className="lesson-block__editor">
        <p className="lesson-block__editor-title">Содержимое занятия</p>
      </div>
    </ContentForm>
  </div>
)

export default Test
