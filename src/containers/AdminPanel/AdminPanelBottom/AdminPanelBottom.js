import React from 'react'
import { useDispatch } from 'react-redux'
import ProfileSidebarLink from '../../../components/UI/ProfileSidebarLink/ProfileSidebarLink'
import { logoutUser } from '../../../store/actions/usersActions'

const AdminPanelBottom = () => {
  const dispatch = useDispatch()
  const logoutHandler = async () => {
    await dispatch(logoutUser())
  }
  return (
    <div className="profile__sidebar-bottom">
      <nav className="profile__sidebar-bottom-nav">
        <ul className="profile__sidebar-bottom-nav-list">
          <ProfileSidebarLink to="/">
            <i className="profile__sidebar-bottom-nav-list-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.4515 0.0703125C10.8422 0.239061 11.0109 0.0843735 5.61092 5.475C2.80779 8.27812 0.449979 10.6641 0.374979 10.7766C-0.206271 11.6437 -0.089084 12.8062 0.651541 13.5516C1.08279 13.9781 1.63123 14.2031 2.25935 14.2031H2.5781V17.9531C2.5781 20.4891 2.59685 21.7781 2.62967 21.9469C2.80779 22.8 3.49685 23.5734 4.34998 23.8687C4.65935 23.9766 4.68279 23.9766 6.94685 23.9766C9.1781 23.9766 9.22967 23.9766 9.35623 23.8781C9.42654 23.8266 9.52967 23.7234 9.58123 23.6531C9.67967 23.5266 9.67967 23.4656 9.7031 20.3953L9.72654 17.2641L9.86717 17.0344C10.0453 16.7484 10.4062 16.5187 10.7531 16.4766C10.8844 16.4578 11.5406 16.4531 12.2109 16.4625L13.4297 16.4766L13.6781 16.6125C13.9125 16.7437 14.0625 16.8984 14.2078 17.1562C14.2594 17.2547 14.2781 17.8312 14.2969 20.4C14.3203 23.4656 14.3203 23.5266 14.4187 23.6531C14.4703 23.7234 14.5734 23.8266 14.6437 23.8781C14.7703 23.9766 14.8219 23.9766 17.0531 23.9766C19.3172 23.9766 19.3406 23.9766 19.65 23.8687C20.5031 23.5734 21.1922 22.8 21.3703 21.9469C21.4031 21.7781 21.4219 20.4891 21.4219 17.9531V14.2031H21.7406C22.8656 14.2031 23.775 13.4391 23.9625 12.3375C24.0328 11.9062 23.9625 11.4469 23.7609 11.0156C23.625 10.7344 23.2172 10.3125 18.5203 5.61094C15.7219 2.80781 13.3312 0.449999 13.2094 0.370312C13.0875 0.290625 12.8765 0.182812 12.7406 0.131248C12.4125 0.00468636 11.7844 -0.0234375 11.4515 0.0703125Z"
                  fill="#2C2C2E"
                />
              </svg>
            </i>
            Главная
          </ProfileSidebarLink>
          <ProfileSidebarLink to="/admin_panel/all_users">
            <i className="profile__sidebar-bottom-nav-list-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.94532 3.46879C6.01876 3.76879 4.51407 5.34848 4.3172 7.28442C4.23751 8.07192 4.35938 8.79848 4.6922 9.50629C5.55938 11.3719 7.6547 12.3704 9.63282 11.8594C10.0453 11.7563 10.6641 11.475 10.9969 11.2454C11.8219 10.6782 12.4547 9.76411 12.7313 8.73754C12.8531 8.27817 12.8531 7.14379 12.7313 6.67973C12.225 4.79067 10.65 3.52036 8.71876 3.44536C8.44688 3.43598 8.10001 3.44536 7.94532 3.46879Z"
                  fill="#2C2C2E"
                />
                <path
                  d="M16.9453 6.07503C16.2609 6.22034 15.5297 6.68441 15.1125 7.23284C14.5359 7.99222 14.325 8.92035 14.5125 9.83441C14.8922 11.6766 16.7906 12.7875 18.5859 12.2157C20.4093 11.6344 21.314 9.5766 20.5125 7.85159C19.8797 6.5016 18.4078 5.76566 16.9453 6.07503Z"
                  fill="#2C2C2E"
                />
                <path
                  d="M7.71092 13.2281C4.06405 13.6359 1.21405 16.5094 0.792174 20.1937C0.693737 21.075 0.759362 21.375 1.09686 21.6281C1.22342 21.7266 1.2328 21.7266 8.52186 21.7359L15.8203 21.75L16.0078 21.6422C16.139 21.5719 16.2281 21.4688 16.3078 21.3094C16.4203 21.0797 16.4203 21.075 16.3687 20.4422C16.3359 20.0906 16.2797 19.6453 16.2375 19.4531C16.1297 18.9375 15.825 18.0375 15.5859 17.5453C14.9812 16.3031 13.8609 15.0656 12.6797 14.3437C11.2078 13.4391 9.4078 13.0359 7.71092 13.2281Z"
                  fill="#2C2C2E"
                />
                <path
                  d="M16.6688 13.3406C16.2 13.425 15.5672 13.6359 15.1406 13.8516C14.9625 13.9406 14.8125 14.025 14.8125 14.0391C14.8125 14.0484 15 14.2453 15.225 14.475C16.425 15.6844 17.3156 17.3438 17.6719 19.0312C17.7328 19.3031 17.7844 19.5516 17.7938 19.5797C17.8078 19.6266 18.3281 19.6406 20.2172 19.6406C22.6172 19.6406 22.6219 19.6406 22.8281 19.5375C23.2406 19.3266 23.325 18.9797 23.1844 18.0469C23.0625 17.2359 22.725 16.3875 22.2563 15.6891C21.7781 14.9719 20.775 14.1328 19.95 13.7578C18.975 13.3125 17.7094 13.1531 16.6688 13.3406Z"
                  fill="#2C2C2E"
                />
              </svg>
            </i>
            Список пользователей
          </ProfileSidebarLink>
          <ProfileSidebarLink to="/admin_panel/notifications">
            <i className="profile__sidebar-bottom-nav-list-item-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.3265 0.0670834C16.0937 0.423334 1.30468 5.00771 1.15936 5.08271C0.887488 5.21396 0.52655 5.54208 0.343738 5.82802C-0.0921997 6.50771 -0.0921997 7.44521 0.343738 8.1249C0.653113 8.6124 0.7703 8.67802 3.89217 10.2577L6.82655 11.739L8.75311 9.81708C10.1969 8.37802 10.7312 7.87177 10.8906 7.80146C11.7484 7.4124 12.6015 8.29365 12.1797 9.1374C12.0953 9.30615 11.5797 9.8499 10.1687 11.2608L8.27499 13.1546L9.74218 16.0936C11.3219 19.253 11.4109 19.3936 11.9078 19.689C12.5969 20.0921 13.5109 20.078 14.1719 19.6561C14.4765 19.4593 14.7953 19.103 14.9359 18.7983C15.0015 18.6624 16.1547 14.9686 17.5047 10.5858C19.7265 3.3624 19.9609 2.57958 19.975 2.23271C20.0031 1.61396 19.825 1.12646 19.4078 0.681147C19.1219 0.385834 18.8687 0.22646 18.4797 0.104584C18.175 0.0108337 17.5937 -0.0079155 17.3265 0.0670834Z"
                  fill="#2C2C2E"
                />
              </svg>
            </i>
            Отправить объявления
          </ProfileSidebarLink>
          <ProfileSidebarLink to="/admin_panel/course_category_control">
            <i className="profile__sidebar-bottom-nav-list-item-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.3265 0.0670834C16.0937 0.423334 1.30468 5.00771 1.15936 5.08271C0.887488 5.21396 0.52655 5.54208 0.343738 5.82802C-0.0921997 6.50771 -0.0921997 7.44521 0.343738 8.1249C0.653113 8.6124 0.7703 8.67802 3.89217 10.2577L6.82655 11.739L8.75311 9.81708C10.1969 8.37802 10.7312 7.87177 10.8906 7.80146C11.7484 7.4124 12.6015 8.29365 12.1797 9.1374C12.0953 9.30615 11.5797 9.8499 10.1687 11.2608L8.27499 13.1546L9.74218 16.0936C11.3219 19.253 11.4109 19.3936 11.9078 19.689C12.5969 20.0921 13.5109 20.078 14.1719 19.6561C14.4765 19.4593 14.7953 19.103 14.9359 18.7983C15.0015 18.6624 16.1547 14.9686 17.5047 10.5858C19.7265 3.3624 19.9609 2.57958 19.975 2.23271C20.0031 1.61396 19.825 1.12646 19.4078 0.681147C19.1219 0.385834 18.8687 0.22646 18.4797 0.104584C18.175 0.0108337 17.5937 -0.0079155 17.3265 0.0670834Z"
                  fill="#2C2C2E"
                />
              </svg>
            </i>
            Категории курсов
          </ProfileSidebarLink>
          <ProfileSidebarLink to="/admin_panel/courses">
            <i className="profile__sidebar-bottom-nav-list-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.0938 3.08906C2.6813 3.22031 2.43755 3.37031 2.1563 3.65156C1.8563 3.95625 1.67349 4.275 1.57036 4.66406C1.46255 5.08125 1.46255 14.325 1.57036 14.7422C1.76724 15.4969 2.32974 16.0828 3.08442 16.3125C3.37974 16.4062 3.53911 16.4062 11.925 16.4062C19.0782 16.4062 20.4985 16.3969 20.7047 16.3406C21.436 16.1437 21.9938 15.6234 22.275 14.8781L22.3829 14.6016L22.3969 9.96094C22.4063 6.975 22.3922 5.18906 22.3641 4.95937C22.2422 4.05469 21.5907 3.29062 20.7422 3.07031C20.4985 3.00937 19.4625 3 11.9063 3.00469C3.83911 3.00469 3.33755 3.00937 3.0938 3.08906ZM10.5985 6.73594C10.7907 6.77344 13.95 9.12656 14.0766 9.33281C14.1938 9.51094 14.1704 9.95625 14.0391 10.125C13.8938 10.3219 10.8047 12.6094 10.6219 12.6609C10.2985 12.75 9.9563 12.5906 9.79692 12.2766C9.70317 12.0984 9.70317 12.0187 9.71255 9.64219L9.72661 7.19531L9.83911 7.03594C9.90005 6.95156 10.036 6.83906 10.1438 6.79219C10.3594 6.69375 10.3829 6.68906 10.5985 6.73594Z"
                  fill="#2C2C2E"
                />
                <path
                  d="M7.04525 17.9719C6.76869 18.0609 6.55306 18.2062 6.34681 18.4359L6.16869 18.6328L4.06869 18.6562C2.039 18.6797 1.97337 18.6844 1.84212 18.7781C1.589 18.9656 1.49056 19.1672 1.50931 19.4437C1.53275 19.7062 1.6265 19.8703 1.84681 20.0344C1.97337 20.1281 2.04837 20.1328 4.06869 20.1562L6.164 20.1797L6.37025 20.4C6.9515 21.0328 7.93119 21.0469 8.5265 20.4375C8.63431 20.3297 8.71869 20.2219 8.71869 20.1984C8.71869 20.175 11.5218 20.1562 15.2437 20.1562C21.7452 20.1562 21.7687 20.1562 21.9656 20.0578C22.5093 19.7953 22.514 19.0219 21.9796 18.75C21.8062 18.6562 21.6702 18.6562 15.2718 18.6516H8.74212L8.6015 18.4547C8.3015 18.0469 7.54212 17.8078 7.04525 17.9719Z"
                  fill="#2C2C2E"
                />
              </svg>
            </i>
            Курсы
          </ProfileSidebarLink>
          <ProfileSidebarLink to="/admin_panel/reviews">
            <i className="profile__sidebar-bottom-nav-list-item-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 16.0074L14.8499 18.9407C15.738 19.4783 16.8249 18.6836 16.5911 17.6786L15.3056 12.1626L19.5945 8.44634C20.3775 7.76853 19.9568 6.48303 18.9284 6.40122L13.2839 5.92208L11.0751 0.709949C10.6778 -0.23665 9.32219 -0.23665 8.92485 0.709949L6.71612 5.9104L1.07159 6.38954C0.04319 6.47134 -0.37752 7.75685 0.405468 8.43466L4.69438 12.1509L3.40887 17.6669C3.17514 18.6719 4.26198 19.4666 5.15015 18.929L10 16.0074Z"
                  fill="#333333"
                />
              </svg>
            </i>
            Отзывы
          </ProfileSidebarLink>
          <ProfileSidebarLink to="/">
            <i className="profile__sidebar-bottom-nav-list-item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_465_916)">
                  <path
                    d="M1.52355 0.0656261C0.829804 0.239063 0.253241 0.81094 0.0657412 1.51875C0.0141787 1.71563 0.000116219 3.31875 0.000116219 10.9922C0.000116219 21.1031 -0.0139463 20.5125 0.267304 21C0.440741 21.2906 0.787616 21.6281 1.05949 21.7641C1.18605 21.825 2.70012 22.35 4.4298 22.9266L7.57043 23.9766H7.9923C8.50793 23.9766 8.79855 23.8828 9.18762 23.5969C9.50168 23.3672 9.7548 23.0203 9.89074 22.6266C9.96574 22.4109 9.98449 22.2422 9.98449 21.6797V21H11.6392C13.5236 21 13.7111 20.9766 14.3439 20.6672C15.1032 20.2969 15.7173 19.5234 15.9095 18.7031C16.0173 18.2484 16.0173 13.8609 15.9142 13.6031C15.6001 12.8531 14.5126 12.8063 14.1189 13.5234C14.0486 13.6453 14.0345 13.9406 14.0157 15.9609L13.9923 18.2578L13.8751 18.4688C13.8095 18.5813 13.6642 18.7406 13.5564 18.8203L13.3501 18.9609L11.6673 18.975L9.98449 18.9891L9.97512 11.2406L9.96105 3.49219L9.81105 3.17813C9.5673 2.6625 9.23918 2.35781 8.67668 2.12344L8.41418 2.01563L10.8845 2.02969L13.3501 2.03906L13.5564 2.17969C13.6642 2.25938 13.8095 2.41875 13.8751 2.53125L13.9923 2.74219L14.0157 4.55625L14.0392 6.36563L14.1798 6.56719C14.3907 6.86719 14.6673 6.99375 15.0517 6.975C15.4079 6.95625 15.647 6.825 15.8439 6.52969L15.9611 6.35625L15.9751 4.49531C15.9892 2.39531 15.9751 2.26875 15.6657 1.64063C15.4126 1.125 14.8782 0.595314 14.3439 0.332813C13.6314 -0.014061 13.9642 1.90735e-06 7.52355 0.00468826C3.10324 0.00937653 1.70168 0.0234394 1.52355 0.0656261Z"
                    fill="#2C2C2E"
                  />
                  <path
                    d="M18.586 5.10469C18.3469 5.2125 18.1125 5.475 18.0516 5.70469C18.0188 5.8125 18.0001 6.49687 18.0001 7.43906V9H15.9H13.8L13.5516 9.12187C13.1297 9.33281 12.9235 9.77812 13.036 10.2375C13.111 10.5516 13.4344 10.8844 13.7438 10.9594C13.8938 10.9969 14.5922 11.0156 15.9797 11.0156H18.0001V12.5672C18.0001 13.6641 18.0188 14.1797 18.0563 14.3156C18.1735 14.6953 18.6094 15 19.036 15C19.411 14.9953 19.5375 14.8875 21.6938 12.7359C23.8547 10.5797 24 10.4062 24 10.0406C24 9.59531 24.0282 9.62812 21.7547 7.34531C20.3438 5.93437 19.5516 5.17031 19.4251 5.10937C19.186 4.99219 18.8344 4.99219 18.586 5.10469Z"
                    fill="#2C2C2E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_465_916">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
            <span onClick={() => logoutHandler()}> Выйти</span>
          </ProfileSidebarLink>
        </ul>
      </nav>
    </div>
  )
}

export default AdminPanelBottom
