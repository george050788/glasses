import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, } from 'react-router-dom'
const ClientRoute = ({ children }) => {

  const location = useLocation()
  const { pathname, search } = location

  console.log('path.....', pathname)


  const user = useSelector(state => state.user.user)
  if (user && user?.role === 'USER') {
    return (
      <main className="content">
        {children}
      </main>
    )
  }

  return (
    <Navigate to="/signin"
      state={{ from: `${pathname}${search}` }}

    />

  )
}


export default ClientRoute 