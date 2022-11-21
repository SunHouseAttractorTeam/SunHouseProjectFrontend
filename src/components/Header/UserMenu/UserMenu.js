import React, { useState } from 'react'
import './UserMenu.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import teacher_1 from '../../../assets/icons/teacher_1.svg'
import { logoutUser } from '../../../store/actions/usersActions'

const UserMenu = ({ user }) => {
  const [menu, setMenu] = useState(false)
  const dispatch = useDispatch()
  const clickHandler = () => {
    setMenu(!menu)
  }
  const logoutHandler = async () => {
    await dispatch(logoutUser())
  }

  return (
    <div>
      <button type="button" className="user__menu" onClick={clickHandler}>
        <img className="user__menu_img" src={user.avatar ? user.avatar : teacher_1} alt={user.username} />
        {user.username}
      </button>
      {menu ? (
        <div className="user__menu_list">
          <div className="user__menu_list_item">
            <Link
              style={{
                color: 'black',
                fontWeight: 700,
                textDecoration: 'none',
              }}
              to="/user"
            >
              Profile
            </Link>
          </div>
          <div>
            <button type="button" className="user__menu_list_item" onClick={logoutHandler}>
              Log out
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default UserMenu
