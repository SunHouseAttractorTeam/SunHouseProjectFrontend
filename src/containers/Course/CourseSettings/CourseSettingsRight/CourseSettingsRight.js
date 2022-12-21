import React from 'react'

const CourseSettingsRight = ({ course }) => {
  console.log(course)
  return (
    <>
      <div>{course.users.map(user => user.username)}</div>
    </>
  )
}

export default CourseSettingsRight
