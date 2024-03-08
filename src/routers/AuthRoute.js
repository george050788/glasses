import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
const AuthRoute = ({ children }) => {

  const { pathname, search } = useLocation()
  const user = useSelector(state => state.user.user)
  if (user && user?.role === 'USER') {
    return (
      <Navigate to="/"
        state={{ from: `${pathname}${search}` }}
      />
    )
  }

  return (
    <main className="content">
      {children}
    </main>
  )
}


export default AuthRoute 