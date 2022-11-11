export const inputChangeHandler = (e, setState) => {
  const { name, value } = e.target
  return setState(prev => ({ ...prev, [name]: value }))
}

export const submitFormHandler = (e, fetch) => {
  e.preventDefault()
  return fetch
}

export const getFieldError = (error, fieldName) => {
  try {
    return error.errors[fieldName].message
  } catch {
    return undefined
  }
}
