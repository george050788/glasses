import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Person () {
  return (
    <>
      <div className='main'>
        <div className='user-tab'>
          <div className='tab-menu'>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/person/account'>Account</NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/person/mywish'>My Wish List</NavLink>
            <NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/person/myorder'>My Orders</NavLink>

          </div>
          <Outlet></Outlet>

        </div>
      </div>
    </>
  )
}
