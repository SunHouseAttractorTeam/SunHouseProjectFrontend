import React from 'react'
import './TestBlock.scss'
import ContentForm from '../ContentForm/ContentForm'

const TestBlock = () => (
  <div className="content-form ">
    <ContentForm title="Тест" type="test" subtitle="Содержимое теста" />
  </div>
)

export default TestBlock
