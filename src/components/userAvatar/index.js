import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, signOut } from "firebase/auth"
import { default as app } from '../../firebase/config'
import { clearUser } from '../../redux/reducers/userReducer'
import { useNavigate } from 'react-router-dom'
import { default as expandmore } from '../../images/expand_more.svg'
import account from '../../images/account.svg'
import logout from '../../images/logout.svg'




export default function UserAvatar () {

  const [open, setOpen] = useState(false)
  const click = () => {
    setOpen(!open)
  }


  const viewaccount = () => {
    navigate(`/person`)
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const signout = () => {
    const auth = getAuth(app)
    signOut(auth).then(() => {
      dispatch(clearUser())
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <>
      <div className='user-menu'>
        <div className='user-nav' onClick={click}>
          <h5>
            {user.fullname}
          </h5>
          <div className='user-img'>
            <img src={user.avatarURL} alt="" width={30} height={30} />
          </div>
          <span><img src={expandmore} alt="" width={12} height={12} /></span>

          <div className={open ? 'user-button' : 'user-button active'}>
            <button onClick={viewaccount}>View Account <img src={account} width={15} height={15} /></button>
            <button onClick={signout}>Sign Out <img src={logout} width={15} height={15} /></button>
          </div>
        </div>
      </div>
    </>
  )
}
