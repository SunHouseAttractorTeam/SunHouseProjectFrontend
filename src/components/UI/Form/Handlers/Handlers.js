export const inputChangeHandler = (e, setState) => {
  const { name, value } = e.target
  return setState(prev => ({ ...prev, [name]: value }))
}

export const submitFormHandler = async (e, fetch) => {
  e.preventDefault()
  await fetch
}
