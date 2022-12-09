import React from 'react'
import './TestBlock.scss'
import ContentForm from '../ContentForm/ContentForm'

const Test = () => (
  <div className="content-form ">
    <ContentForm title="Test" type="test">
      <div className="content-form__editor">
        <p className="content-form__editor-title">Содержимое теста</p>
      </div>
    </ContentForm>
  </div>
)

export default Test
