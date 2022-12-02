import { Redirect, Route } from 'react-router-dom'
import React from 'react'

export const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) =>
  isAllowed ? <Route {...props} /> : <Redirect to={redirectTo} />
