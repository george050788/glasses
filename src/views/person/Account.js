import React from 'react'
import { useSelector } from 'react-redux'
import defaultbanner from '../../images/defaultBanner.jpg'
import { displayDate } from '../../helpers'

export default function Account () {

  const user = useSelector(state => state.user.user)
  console.log('user:', user)

  const timestamp = user.joinDate
  console.log('timestamp', timestamp)
  return (
    <>
      <div className='user-content'>
        <div className='user-profile'>
          <div className='profile'>
            <div className='profile-banner'>
              <div className='banner-img'>
                <img src={defaultbanner} alt="" width={700} height={150} />
              </div>
              <div className='avatar'><img src={user.avatarURL} alt="" width={95} height={95} />{user.avatar}</div>
              <button type='button'>Edit Account</button>
            </div>
            <div className='profile-details'>
              <h2>{user.fullname}</h2>
              <span>Email</span>
              <h5>{user.email}</h5>
              <span>Address</span>
              <h5>{user.address}</h5>
              <span>Mobile</span>
              <h5>{user.mobile}</h5>
              <span>Date Joined</span>
              <h5>{displayDate(timestamp)}</h5>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
