import React, { useEffect } from 'react'
import './AllUsers.scss'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../UI/Title/Title'
import { getAllUsersRequest } from '../../store/actions/usersActions'

const AllUsers = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  useEffect(() => {
    dispatch(getAllUsersRequest())
  }, [dispatch])
  return (
    <div className="users">
      <Title>Список пользователей</Title>
      <div className="users__inner-block">
        <h5 className="users__subtitle">Имя пользователя</h5>
        {users?.map(user => (
          <div key={user._id}>
            <p className="users__names">{user.username}</p>
            <hr className="users__underline" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllUsers
