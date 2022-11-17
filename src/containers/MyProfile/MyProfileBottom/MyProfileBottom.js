import React from 'react'
import MyProfileSidebarLink from '../MyProfileSidebarLink/MyProfileSidebarLink'

const MyProfileBottom = () => (
  <div className="profile__sidebar-bottom">
    <nav className="profile__sidebar-bottom-nav">
      <ul className="profile__sidebar-bottom-nav-list">
        <MyProfileSidebarLink to="/">
          <i className="profile__sidebar-bottom-nav-list-item-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.4515 0.0703125C10.8422 0.239061 11.0109 0.0843735 5.61092 5.475C2.80779 8.27812 0.449979 10.6641 0.374979 10.7766C-0.206271 11.6437 -0.089084 12.8062 0.651541 13.5516C1.08279 13.9781 1.63123 14.2031 2.25935 14.2031H2.5781V17.9531C2.5781 20.4891 2.59685 21.7781 2.62967 21.9469C2.80779 22.8 3.49685 23.5734 4.34998 23.8687C4.65935 23.9766 4.68279 23.9766 6.94685 23.9766C9.1781 23.9766 9.22967 23.9766 9.35623 23.8781C9.42654 23.8266 9.52967 23.7234 9.58123 23.6531C9.67967 23.5266 9.67967 23.4656 9.7031 20.3953L9.72654 17.2641L9.86717 17.0344C10.0453 16.7484 10.4062 16.5187 10.7531 16.4766C10.8844 16.4578 11.5406 16.4531 12.2109 16.4625L13.4297 16.4766L13.6781 16.6125C13.9125 16.7437 14.0625 16.8984 14.2078 17.1562C14.2594 17.2547 14.2781 17.8312 14.2969 20.4C14.3203 23.4656 14.3203 23.5266 14.4187 23.6531C14.4703 23.7234 14.5734 23.8266 14.6437 23.8781C14.7703 23.9766 14.8219 23.9766 17.0531 23.9766C19.3172 23.9766 19.3406 23.9766 19.65 23.8687C20.5031 23.5734 21.1922 22.8 21.3703 21.9469C21.4031 21.7781 21.4219 20.4891 21.4219 17.9531V14.2031H21.7406C22.8656 14.2031 23.775 13.4391 23.9625 12.3375C24.0328 11.9062 23.9625 11.4469 23.7609 11.0156C23.625 10.7344 23.2172 10.3125 18.5203 5.61094C15.7219 2.80781 13.3312 0.449999 13.2094 0.370312C13.0875 0.290625 12.8765 0.182812 12.7406 0.131248C12.4125 0.00468636 11.7844 -0.0234375 11.4515 0.0703125Z"
                fill="#2C2C2E"
              />
            </svg>
          </i>
          Главная
        </MyProfileSidebarLink>
        <MyProfileSidebarLink to="/user/teacher_mode">
          <i className="profile__sidebar-bottom-nav-list-item-icon">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.56138 0.0444984C7.62906 0.348906 5.9482 1.42756 4.88278 3.04224C3.40045 5.29883 3.43354 8.23701 4.95557 10.5068C5.34601 11.0759 6.20629 11.9296 6.80187 12.32L7.28495 12.6377L7.24524 12.8958C7.13936 13.5641 6.72245 13.9943 5.8357 14.3318C3.97617 15.0531 2.22253 16.2839 1.24313 17.5744C0.839459 18.1038 0.310056 19.1824 0.157852 19.7648C0.0122662 20.3339 -0.0539092 22.2397 0.0519715 22.7493C0.157852 23.239 0.435789 23.6162 0.865929 23.8279L1.21004 24H10.5408C19.4943 24 19.8914 23.9934 20.1428 23.8743C20.4671 23.7221 20.798 23.3846 20.9303 23.0603C21.0693 22.7294 21.0759 20.6581 20.9436 20.0229C20.6987 18.8846 20.0965 17.8854 18.9914 16.7869C17.9193 15.7215 16.6885 14.9406 15.0936 14.3053C14.5973 14.1068 14.4319 14.0009 14.2003 13.7428C13.929 13.4384 13.7569 13.0612 13.7569 12.7634C13.7569 12.6708 13.8959 12.5318 14.24 12.3134C14.8223 11.923 15.6892 11.0759 16.073 10.5068C17.6083 8.22378 17.6215 5.26574 16.1127 2.99592C15.1929 1.61286 13.7768 0.613607 12.1753 0.20332C11.4606 0.0180283 10.2165 -0.0547657 9.56138 0.0444984ZM11.1364 14.8016C11.2356 14.8347 11.3547 14.9604 11.4077 15.0796C11.4606 15.1987 11.7452 16.2442 12.0363 17.4023C12.4996 19.2155 12.5657 19.5398 12.5062 19.7185C12.4268 19.9434 11.0702 21.3397 10.7856 21.4853C10.4415 21.6574 10.2033 21.525 9.343 20.6714C8.84007 20.1684 8.52243 19.7912 8.48934 19.6787C8.45625 19.5464 8.61507 18.8383 9.01212 17.2633C9.68711 14.6296 9.62756 14.7354 10.4481 14.7354C10.7327 14.7354 11.0437 14.7619 11.1364 14.8016Z"
                fill="#2C2C2E"
              />
            </svg>
          </i>
          Режим преподователя
        </MyProfileSidebarLink>
        <MyProfileSidebarLink to="/user/courses">
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
          Мои курсы
        </MyProfileSidebarLink>
        <MyProfileSidebarLink to="/user/notifications">
          <i className="profile__sidebar-bottom-nav-list-item-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.1327 0.0750046C16.1015 0.257817 15.1968 0.731255 14.4561 1.47188C13.4483 2.47969 12.9186 3.85313 12.9983 5.24532C13.0686 6.46407 13.514 7.51875 14.3108 8.37188C14.939 9.04219 15.5905 9.46407 16.4343 9.74532C17.0108 9.9375 17.5171 10.0031 18.2249 9.97032C20.4468 9.87657 22.2468 8.40469 22.8374 6.19688C22.9733 5.68125 23.0061 4.66407 22.903 4.11094C22.603 2.52188 21.5155 1.11563 20.0952 0.468755C19.1577 0.0468798 18.0936 -0.0984335 17.1327 0.0750046Z"
                fill="#ADFA00"
              />
              <path
                d="M9.89062 2.08596C8.39062 2.32503 7.0125 3.0469 5.94844 4.16253C5.01094 5.13753 4.41562 6.25784 4.12031 7.61721C4.02656 8.04846 4.01719 8.27346 3.98437 10.3828C3.95156 12.4735 3.94219 12.7219 3.84844 13.1344C3.53437 14.5641 2.90156 15.6703 1.78125 16.7532C1.14844 17.3625 1.00781 17.6391 1.00781 18.2578C1.00781 18.6141 1.03125 18.7219 1.13437 18.9469C1.37812 19.4672 1.89375 19.8516 2.50312 19.9641C2.87812 20.0344 19.0922 20.0391 19.4531 19.9688C20.0625 19.8516 20.6062 19.4438 20.8406 18.9235C20.9484 18.6797 20.9719 18.5719 20.9672 18.2578C20.9672 17.625 20.8594 17.4282 20.1703 16.7438C19.8516 16.425 19.4625 15.9985 19.3125 15.7922C18.6094 14.8453 18.1734 13.7203 18.0375 12.5203L17.9812 12.0141L17.5406 11.9813C14.6812 11.7797 12.2437 9.90003 11.3484 7.19534C11.0953 6.42659 11.0016 5.84534 11.0016 5.01565C11.0016 4.0594 11.1562 3.25315 11.5031 2.38596C11.5687 2.21721 11.625 2.06253 11.625 2.04846C11.625 1.99221 10.3031 2.02034 9.89062 2.08596Z"
                fill="#2C2C2E"
              />
              <path
                d="M7.3125 21.0188C7.3125 21.0985 7.53281 21.7266 7.62656 21.9141C8.10469 22.861 8.97187 23.5688 10.0172 23.8688C10.4953 24.0047 11.4375 24.0141 11.9062 23.8875C12.6469 23.6906 13.4062 23.2031 13.875 22.6266C14.1375 22.3078 14.4891 21.6375 14.5969 21.2438L14.6672 21H10.9875C8.96719 21 7.3125 21.0094 7.3125 21.0188Z"
                fill="#2C2C2E"
              />
            </svg>
          </i>
          Уведомления
        </MyProfileSidebarLink>
        <MyProfileSidebarLink to="/user/certificates">
          <i className="profile__sidebar-bottom-nav-list-item-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_465_908)">
                <path
                  d="M1.9312 0.0937614C1.46714 0.215636 1.11557 0.426574 0.749948 0.792199C0.389011 1.16251 0.215573 1.45782 0.0936981 1.95001C-5.1862e-05 2.30157 -5.18638e-05 2.49376 -5.18638e-05 9.74532C-5.18638e-05 17.9906 -0.0188019 17.475 0.314011 18.1031C0.618698 18.6891 1.19995 19.1672 1.87495 19.3875C2.1187 19.4719 2.47026 19.4766 7.88432 19.4906L13.6312 19.5047L13.6546 17.7094C13.6781 15.75 13.6874 15.6375 13.9687 14.9109C14.2593 14.1656 14.9015 13.3688 15.5859 12.9047C16.7953 12.0891 18.3187 11.925 19.6499 12.4688C21.1171 13.0688 22.1624 14.4234 22.3593 15.9891C22.3828 16.2047 22.4062 17.0297 22.4062 17.8219C22.4062 18.6188 22.4203 19.2656 22.4437 19.2656C22.4624 19.2656 22.589 19.2 22.7249 19.1203C23.0765 18.9234 23.4843 18.4875 23.6859 18.1031C24.0187 17.475 23.9999 17.9906 23.9999 9.74532C23.9999 2.48439 23.9999 2.30157 23.9062 1.95001C23.7843 1.4672 23.5828 1.12032 23.2078 0.750011C22.8421 0.389074 22.5421 0.220324 22.0499 0.0937614C21.6937 1.1432e-05 21.5015 1.1432e-05 11.9812 0.00469893C2.55932 0.00469893 2.26401 0.00938643 1.9312 0.0937614ZM17.564 3.14064C17.8499 3.2672 17.9624 3.46876 17.939 3.81095C17.9249 4.05001 17.9015 4.10157 17.7515 4.25626L17.5781 4.4297L12.0796 4.44376C8.20307 4.45314 6.54839 4.43907 6.46401 4.40157C6.3937 4.37345 6.2812 4.28907 6.2062 4.21407C6.10307 4.10626 6.07495 4.02657 6.06089 3.81095C6.03745 3.46876 6.14995 3.2672 6.43589 3.14064C6.62807 3.05157 6.8062 3.04689 11.9999 3.04689C17.1937 3.04689 17.3718 3.05157 17.564 3.14064ZM20.6765 6.20157C20.7749 6.2672 20.8687 6.39376 20.9249 6.52501C21.0046 6.72189 21.0093 6.76876 20.9578 6.9422C20.8828 7.19064 20.6953 7.38282 20.4562 7.44845C20.1937 7.52345 3.80151 7.51876 3.53901 7.44845C3.29526 7.37814 3.06557 7.13439 3.02339 6.89532C2.9812 6.6422 3.12651 6.31876 3.33745 6.18751C3.49214 6.09376 3.5437 6.09376 12.0046 6.09376H20.5171L20.6765 6.20157ZM20.6296 9.19689C21.1265 9.47814 21.0796 10.2141 20.5453 10.4344C20.3203 10.5328 3.67964 10.5328 3.45464 10.4344C2.92495 10.2141 2.87339 9.48282 3.36089 9.19689L3.53901 9.09376H11.9953H20.4468L20.6296 9.19689ZM11.7046 14.4188C12.1453 14.7469 12.1546 15.3094 11.7234 15.5953L11.564 15.7031H7.55151C3.72182 15.7031 3.52964 15.6984 3.37495 15.6141C3.14057 15.4922 2.9812 15.1641 3.02339 14.9063C3.06557 14.6719 3.2812 14.4094 3.48745 14.3484C3.57182 14.3203 5.29682 14.3063 7.60307 14.3109C11.5499 14.3203 11.5734 14.3203 11.7046 14.4188Z"
                  fill="#2C2C2E"
                />
                <path
                  d="M17.4233 13.6219C16.3733 13.8469 15.5342 14.6063 15.2061 15.6281C15.0561 16.0969 15.0326 16.7813 15.1545 17.236C15.5436 18.6985 16.9451 19.6547 18.3983 19.4485C20.2826 19.186 21.4358 17.3063 20.8123 15.525C20.5733 14.8453 20.0108 14.2078 19.3592 13.8891C18.7123 13.5656 18.0842 13.4813 17.4233 13.6219Z"
                  fill="#2C2C2E"
                />
                <path
                  d="M15.0563 21.6234C15.0704 23.4609 15.075 23.5313 15.1688 23.6531C15.3469 23.8922 15.5016 23.9766 15.7688 23.9766C16.0125 23.9766 16.0454 23.9578 16.9969 23.325C17.536 22.9641 17.9954 22.6734 18.0235 22.6734C18.0516 22.6734 18.511 22.9641 19.05 23.325C20.0016 23.9578 20.0344 23.9766 20.2782 23.9766C20.5454 23.9766 20.7 23.8922 20.8782 23.6531C20.9719 23.5313 20.9766 23.4609 20.9907 21.6281L21.0047 19.7344L20.6625 19.9922C20.2125 20.3344 19.6454 20.6063 19.0875 20.7516C18.511 20.9016 17.6579 20.9156 17.1094 20.7891C16.4625 20.6391 15.8532 20.3484 15.3188 19.9359L15.0422 19.725L15.0563 21.6234Z"
                  fill="#2C2C2E"
                />
              </g>
              <defs>
                <clipPath id="clip0_465_908">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </i>
          Мои сертификаты
        </MyProfileSidebarLink>
        <MyProfileSidebarLink to="/user/settings">
          <i className="profile__sidebar-bottom-nav-list-item-icon">
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.06262 0.471851C7.05949 0.823414 5.51262 1.71404 4.94543 2.26716C4.51887 2.67966 4.42981 3.21873 4.66418 3.92185C4.84699 4.45623 4.86106 5.22029 4.70168 5.72654C4.35481 6.81404 3.44074 7.58748 2.29699 7.76091C1.69699 7.85466 1.31262 8.1031 1.08293 8.5531C0.871994 8.9656 0.721994 10.3344 0.768869 11.4219C0.825119 12.7625 0.951682 13.2312 1.35012 13.5828C1.58918 13.7937 1.79074 13.8687 2.36731 13.9765C3.00949 14.0937 3.40793 14.3047 3.89074 14.7922C4.50949 15.4203 4.75324 16.0109 4.74856 16.8828C4.74856 17.3047 4.72981 17.4031 4.56574 17.8672C4.16731 19.0109 4.37824 19.4281 5.85949 20.4125C6.36106 20.7453 7.35481 21.2609 7.91262 21.4765C8.48449 21.6969 8.81731 21.7015 9.22981 21.4953C9.41262 21.4015 9.58137 21.275 9.69387 21.1344C10.2376 20.464 10.6079 20.1828 11.2361 19.9719C12.3939 19.5781 13.6454 19.9531 14.447 20.9281C14.897 21.4719 15.4548 21.6687 16.0407 21.4812C16.5001 21.3312 17.5173 20.8015 18.1501 20.3797C18.9517 19.8453 19.3595 19.4703 19.4954 19.1562C19.6689 18.7531 19.6689 18.5375 19.5001 18.0312C19.3126 17.4687 19.2611 16.775 19.3782 16.2875C19.6314 15.2047 20.4564 14.3703 21.5392 14.1125C22.3126 13.925 22.3454 13.9109 22.6126 13.6672C22.7954 13.4984 22.8986 13.3625 22.9642 13.1797C23.3204 12.2234 23.3111 9.47654 22.9501 8.67498C22.8282 8.41248 22.5798 8.13591 22.3548 8.01873C22.2751 7.98123 22.0642 7.9156 21.8861 7.8781C20.6439 7.62029 19.772 6.81873 19.4767 5.65623C19.3642 5.22966 19.4017 4.4281 19.547 4.03904C19.6923 3.64529 19.697 3.18122 19.5564 2.86716C19.4204 2.57654 19.3032 2.44529 18.7829 2.04216C17.7517 1.2406 16.1439 0.424976 15.4876 0.373413C14.9954 0.331226 14.7939 0.429663 14.1798 1.01091C13.7814 1.39529 13.5657 1.55466 13.2986 1.68591C12.4642 2.09841 11.5501 2.09841 10.7017 1.68591C10.4157 1.54529 10.2282 1.40466 9.81574 1.01091C9.41731 0.631226 9.24387 0.495289 9.07043 0.434351C8.75637 0.331226 8.42356 0.340601 8.06262 0.471851ZM12.8907 7.36248C13.8657 7.62498 14.6157 8.15935 15.1407 8.97029C16.2657 10.6859 15.7642 13.0109 14.0298 14.1406C13.3923 14.5578 12.8157 14.7265 12.0001 14.7265C10.9407 14.7265 10.0876 14.375 9.35637 13.6437C8.62512 12.9125 8.27356 12.0594 8.27356 11C8.27356 10.1844 8.44231 9.60779 8.85949 8.97029C9.42199 8.1031 10.2986 7.51716 11.3204 7.3156C11.7189 7.2406 12.5251 7.25935 12.8907 7.36248Z"
                fill="#2C2C2E"
              />
            </svg>
          </i>
          Насройки профиля
        </MyProfileSidebarLink>
        <MyProfileSidebarLink>
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
          Выйти
        </MyProfileSidebarLink>
      </ul>
    </nav>
  </div>
)

export default MyProfileBottom
