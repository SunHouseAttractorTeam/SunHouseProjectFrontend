import React, { useEffect, useState } from 'react'
import './AllUsers.scss'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../UI/Title/Title'
import { deleteUserRequest, getAllUsersRequest } from '../../store/actions/usersActions'
import Modal from '../UI/Modal2/Modal'
import MainButton from '../UI/MainButton/MainButton'
import FormInput from '../UI/Form/FormInput/FormInput'
import { inputChangeHandler } from '../UI/Form/Handlers/Handlers'

const AllUsers = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const [open, setOpen] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [checkDelete, setCheckDelete] = useState(false)
  const [checkPassword, setCheckPassword] = useState({ password: '' })
  let a = true
  if (userInfo?.email === checkPassword.password) {
    a = false
  }
  useEffect(() => {
    dispatch(getAllUsersRequest())
  }, [dispatch])
  const deleteHandler = () => {
    dispatch(deleteUserRequest(userInfo._id))
    setCheckDelete(false)
  }
  return (
    <div className="users">
      <Title>Список пользователей</Title>
      <div className="users__inner-block">
        <h5 className="users__subtitle">Имя пользователя</h5>
        {users?.map(user => (
          <div
            key={user._id}
            onClick={() => {
              setOpen(true)
              setUserInfo(user)
            }}
          >
            <p className="users__names">{user.username}</p>
            <hr className="users__underline" />
          </div>
        ))}
      </div>
      {open ? (
        <Modal setOpen={setOpen}>
          <div className="users__modal">
            <div className="users__modal-info">
              <p>Email: {userInfo.email}</p>
              <p>Username: {userInfo.username}</p>
            </div>
            <div className="users__modal-control">
              <MainButton text="Заблокировать" className="GreenButton users__modal-control-yellow" />
              <MainButton
                text="Удалить пользователя"
                className="GreenButton users__modal-control-red"
                onClick={() => {
                  setCheckDelete(true)
                  setOpen(false)
                }}
              />
            </div>
          </div>
        </Modal>
      ) : null}
      {checkDelete ? (
        <Modal setOpen={setCheckDelete}>
          <h3 className="users__modal-inner-title">Необходимо подтвердить удаление</h3>
          <h4 className="users__modal-inner-title">
            Введите <span className="users__modal-email">{userInfo.email}</span> пользователя которого хотите удалить
          </h4>
          <FormInput type="text" name="password" onChange={e => inputChangeHandler(e, setCheckPassword)} />
          <div className="users__modal-crutch">
            <MainButton
              text="Удалить"
              className={!a ? 'GreenButton users__modal-control-red' : 'GreenButton users__modal-control-gray'}
              disabled={a}
              onClick={() => deleteHandler()}
            />
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

export default AllUsers
