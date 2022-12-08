import React from 'react'
import './QuestionsBlock.scss'

const QuestionsBlock = () => (
  <div className="question-block">
    <div className="question-block__buttons">
      <button type="button" className="question-block__check check-button icon-style" />
      <div className="question-block__buttons-right">
        <button type="button" className="question-block__remove remove-button icon-style" />
        <button type="button" className="question-block__stripes stripes-button icon-style" />
      </div>
    </div>
    <p className="question-block__title">Введите вопрос:</p>
    <input type="text" className="question-block__input border-style" />
    <button type="button" className="question-block__add-description">
      + добавить описание
    </button>
    <p className="question-block__title">Добавьте варианты ответов:</p>
    <div className="question-block__answers">
      <div className="question-block__answer">
        <input type="text" className="question-block__answer-input border-style" placeholder="Варианты ответа" />
        <label htmlFor="answer-checkbox-1" className="question-block__answer-checkbox border-style">
          <input id="answer-checkbox-1" type="checkbox" />
          <p>Правильный ответ</p>
        </label>
        <div className="question-block__answer-buttons">
          <button type="button" className="question-block__answer-remove remove-button icon-style" />
          <button type="button" className="question-block__answer-stripes stripes-button icon-style" />
        </div>
      </div>
      <div className="question-block__answer">
        <input type="text" className="question-block__answer-input border-style" placeholder="Варианты ответа" />
        <label htmlFor="answer-checkbox-2" className="question-block__answer-checkbox border-style">
          <input id="answer-checkbox-2" type="checkbox" />
          <p>Правильный ответ</p>
        </label>
        <div className="question-block__answer-buttons">
          <button type="button" className="question-block__answer-remove remove-button icon-style" />
          <button type="button" className="question-block__answer-stripes stripes-button icon-style" />
        </div>
      </div>
      <button type="button" className="question-block__add-button MainButton">
        + Добавить вариант
      </button>
    </div>
  </div>
)

export default QuestionsBlock
