import React from 'react'
import './QuestionsBlock.scss'
import FormInput from '../UI/Form/FormInput/FormInput'

const QuestionsBlock = ({ question, indexQuestion, setQuestion }) => {
  // const submitFormHandler = e => {
  //   e.preventDefault()
  //
  //   state.answers = JSON.stringify(answersState)
  //
  //   const formData = new FormData()
  //
  //   Object.keys(state).forEach(key => {
  //     formData.append(key, state[key])
  //   })
  //
  //   // onSubmit(formData)
  // }

  const inputChangeHandler = e => {
    const { name, value } = e.target

    setQuestion(prev => {
      const qCopy = {
        ...prev[indexQuestion],
        [name]: value,
      }

      return prev.map((q, i) => {
        if (indexQuestion === i) {
          return qCopy
        }

        return q
      })
    })
  }

  // const getFieldError = fieldName => {
  //   try {
  //     return error.errors[fieldName].message
  //   } catch {
  //     return undefined
  //   }
  // }

  const addAnswer = () => {
    setQuestion(prev => {
      const qCopy = {
        ...prev[indexQuestion],
        answers: [...prev[indexQuestion].answers, { title: '', status: false }],
      }

      return prev.map((q, i) => {
        if (indexQuestion === i) {
          return qCopy
        }

        return q
      })
    })
  }

  const inputChangeAnswerHandler = (e, ind) => {
    const { name, value } = e.target

    setQuestion(prev => {
      const ansCopy = {
        ...prev[indexQuestion].answers[ind],
        [name]: value,
      }

      const answersCopy = prev[indexQuestion].answers.map((a, i) => {
        if (ind === i) {
          return ansCopy
        }

        return a
      })

      const qCopy = {
        ...prev[indexQuestion],
        answers: answersCopy,
      }

      return prev.map((q, i) => {
        if (indexQuestion === i) {
          return qCopy
        }

        return q
      })
    })
  }

  const inputChangeAnswerStatusHandler = (e, ind) => {
    setQuestion(prev => {
      const ansCopy = {
        ...prev[indexQuestion].answers[ind],
        status: !prev[indexQuestion].answers[ind].status,
      }

      const answersCopy = prev[indexQuestion].answers.map((a, i) => {
        if (ind === i) {
          return ansCopy
        }

        return a
      })

      const qCopy = {
        ...prev[indexQuestion],
        answers: answersCopy,
      }

      return prev.map((q, i) => {
        if (indexQuestion === i) {
          return qCopy
        }

        return q
      })
    })
  }

  const inputRemoveAnswersHandler = ind => {
    setQuestion(prev => {
      const ansCopy = {
        ...prev[indexQuestion].answers[ind],
        status: !prev[indexQuestion].answers[ind].status,
      }

      const qCopy = {
        ...prev[indexQuestion],
        answers: [...prev[indexQuestion].answers.filter(ans => ans !== prev[indexQuestion].answers[ind])],
      }

      return prev.map((q, i) => {
        if (indexQuestion === i) {
          return qCopy
        }

        return q
      })
    })
    // setAnswersState([...answersState.slice(0, ind), ...answersState.slice(ind + 1)])
  }

  return (
    <form className="question-block" autoComplete="off">
      <div>
        <div className="question-block__buttons">
          <button type="button" className="question-block__check check-button icon-style">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM8.748 17.148L4.44 12.84C3.972 12.372 3.972 11.616 4.44 11.148C4.908 10.68 5.664 10.68 6.132 11.148L9.6 14.604L17.856 6.348C18.324 5.88 19.08 5.88 19.548 6.348C20.016 6.816 20.016 7.572 19.548 8.04L10.44 17.148C9.984 17.616 9.216 17.616 8.748 17.148Z"
                fill="#D1D1D6"
              />
            </svg>
          </button>
          <div className="question-block__buttons-right">
            <button type="button" className="question-block__remove remove-button icon-style">
              <i>
                <svg width="12" height="16" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.15273 0.0750122C7.42148 0.253137 6.82617 0.759387 6.41367 1.56095L6.1793 2.01564H4.65586C3.01992 2.01564 2.86523 2.03439 2.38711 2.26876C1.74492 2.58751 1.23867 3.2297 1.06992 3.94689C0.971484 4.35939 0.971484 5.53126 1.06992 5.71876C1.22461 6.01876 0.568359 6.00001 9.99961 6.00001C19.4309 6.00001 18.7746 6.01876 18.9293 5.71876C19.0277 5.53126 19.0277 4.35939 18.9293 3.94689C18.7605 3.2297 18.2543 2.58751 17.6121 2.26876C17.134 2.03439 16.9793 2.01564 15.3434 2.01564H13.8199L13.5855 1.56095C13.1684 0.750012 12.5777 0.24845 11.823 0.0703249C11.4059 -0.0281129 8.56523 -0.0234256 8.15273 0.0750122Z"
                    fill="#D1D1D6"
                  />
                  <path
                    d="M2.37678 7.01719C2.32053 7.02656 2.2174 7.10156 2.1424 7.17656L2.00647 7.31719V14.1469C2.00647 21.8719 1.97365 21.2297 2.39084 22.0781C2.57365 22.4531 2.68147 22.5938 3.03772 22.95C3.41272 23.3297 3.52053 23.4094 3.95178 23.6156C4.22365 23.7469 4.56115 23.8781 4.70178 23.9156C4.90803 23.9625 5.94397 23.9766 9.99865 23.9766C14.0533 23.9766 15.0893 23.9625 15.2955 23.9156C15.4362 23.8781 15.7737 23.7469 16.0455 23.6156C16.4768 23.4094 16.5846 23.3297 16.9596 22.95C17.3158 22.5938 17.4237 22.4531 17.6065 22.0781C18.0237 21.2297 17.9908 21.8719 17.9908 14.1469V7.3125L17.8362 7.1625L17.6862 7.00781L10.0783 7.00312C5.89709 6.99844 2.42834 7.00781 2.37678 7.01719ZM5.82678 8.14687C5.91584 8.23594 5.9674 8.34844 5.99084 8.48906C6.0049 8.60156 6.01428 11.3859 6.0049 14.6719C5.99084 20.3766 5.98615 20.6531 5.90647 20.775C5.72365 21.0469 5.27365 21.0469 5.09084 20.775C5.01115 20.6531 5.00647 20.3766 4.9924 14.6719C4.98303 11.3859 4.9924 8.60156 5.00647 8.48906C5.04865 8.19844 5.23615 8.01562 5.49865 8.01562C5.64865 8.01562 5.72365 8.04375 5.82678 8.14687ZM8.82678 8.14687C8.91584 8.23594 8.9674 8.34844 8.99084 8.48906C9.0049 8.60156 9.01428 11.3859 9.0049 14.6719C8.99084 20.3766 8.98615 20.6531 8.90647 20.775C8.72365 21.0469 8.27365 21.0469 8.09084 20.775C8.01115 20.6531 8.00646 20.3766 7.9924 14.6719C7.98303 11.3859 7.9924 8.60156 8.00646 8.48906C8.04865 8.19844 8.23615 8.01562 8.49865 8.01562C8.64865 8.01562 8.72365 8.04375 8.82678 8.14687ZM11.8268 8.14687C11.9158 8.23594 11.9674 8.34844 11.9908 8.48906C12.0049 8.60156 12.0143 11.3859 12.0049 14.6719C11.9908 20.3766 11.9862 20.6531 11.9065 20.775C11.7237 21.0469 11.2737 21.0469 11.0908 20.775C11.0112 20.6531 11.0065 20.3766 10.9924 14.6719C10.983 11.3859 10.9924 8.60156 11.0065 8.48906C11.0487 8.19844 11.2362 8.01562 11.4987 8.01562C11.6487 8.01562 11.7237 8.04375 11.8268 8.14687ZM14.8268 8.14687C14.9158 8.23594 14.9674 8.34844 14.9908 8.48906C15.0049 8.60156 15.0143 11.3859 15.0049 14.6719C14.9908 20.3766 14.9862 20.6531 14.9065 20.775C14.7237 21.0469 14.2737 21.0469 14.0908 20.775C14.0112 20.6531 14.0065 20.3766 13.9924 14.6719C13.983 11.3859 13.9924 8.60156 14.0065 8.48906C14.0487 8.19844 14.2362 8.01562 14.4987 8.01562C14.6487 8.01562 14.7237 8.04375 14.8268 8.14687Z"
                    fill="#D1D1D6"
                  />
                </svg>
              </i>
            </button>
            <button type="button" className="question-block__stripes stripes-button icon-style">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.888889 11H15.1111C15.6 11 16 10.5875 16 10.0833C16 9.57917 15.6 9.16667 15.1111 9.16667H0.888889C0.4 9.16667 0 9.57917 0 10.0833C0 10.5875 0.4 11 0.888889 11ZM0.888889 6.41667H15.1111C15.6 6.41667 16 6.00417 16 5.5C16 4.99583 15.6 4.58333 15.1111 4.58333H0.888889C0.4 4.58333 0 4.99583 0 5.5C0 6.00417 0.4 6.41667 0.888889 6.41667ZM0 0.916667C0 1.42083 0.4 1.83333 0.888889 1.83333H15.1111C15.6 1.83333 16 1.42083 16 0.916667C16 0.4125 15.6 0 15.1111 0H0.888889C0.4 0 0 0.4125 0 0.916667Z"
                  fill="#D1D1D6"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className="question-block__title">Введите вопрос:</p>
        <FormInput
          onChange={inputChangeHandler}
          name="title"
          value={question.title}
          // error={getFieldError('title')}
          className="question-block__input border-style"
        />
        <button type="button" className="question-block__add-description">
          + добавить описание
        </button>
        <p className="question-block__title">Добавьте варианты ответов:</p>
        <div className="question-block__answers">
          {question.answers.map((ans, ind) => (
            <div key={ind} className="question-block__answer">
              <FormInput
                onChange={e => inputChangeAnswerHandler(e, ind)}
                value={ans.title}
                name="title"
                // error={getFieldError('title')}
                className="question-block__answer-input border-style"
                placeholder="варианты ответа"
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="question-block__answer-checkbox border-style">
                <input
                  // id="answer-checkbox-1"
                  type="checkbox"
                  value={ans.status}
                  onChange={e => inputChangeAnswerStatusHandler(e, ind)}
                  name="status"
                />
                <p>Правильный ответ</p>
              </label>
              <div className="question-block__answer-buttons">
                <button
                  type="button"
                  className="question-block__answer-remove remove-button icon-style"
                  onClick={() => inputRemoveAnswersHandler(ind)}
                />
                <button type="button" className="question-block__answer-stripes stripes-button icon-style" />
              </div>
            </div>
          ))}
          <button type="button" onClick={addAnswer} className="question-block__add-button MainButton">
            + Добавить вариант
          </button>
        </div>
      </div>
    </form>
  )
}

export default QuestionsBlock
