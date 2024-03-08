import React, { useState } from 'react'
import logo from '../../images/logo.png'
import searchicon from '../../images/search_FILL0_wght400_GRAD0_opsz24 (1).svg'
import cart from '../../images/shopping_bag_FILL0_wght400_GRAD0_opsz24.png'
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { default as UserAvatar } from '../userAvatar'
import filter from '../../images/filter.svg'
import MyBasket from '../myBasket'
import Filter from '../filter'


export default function Header () {


  const basketList = useSelector(state => state.basket.basketList)
  const navigate = useNavigate()

  const goSearch = (e) => {
    if (e.keyCode === 13) {
      console.log(`go search ${e.target.value}`)
      navigate(`/search/${e.target.value}`)
    }
  }

  const [show, setShow] = useState(false)
  const [active, setActive] = useState(false)
  const showbasket = () => {
    setShow(!show)
    console.log('showbasket:', show)
  }

  const showfilter = () => {
    setActive(!active)
    console.log('showfilter:', active)
  }


  const { pathname } = useLocation()
  const pathList = ['/shop']
  console.log(pathname)




  const userInfo = useSelector(state => state.user.user)
  return (
    <>
      <div className='header'>
        <div className='header_start'>
          <div className='logo'>
            <Link to='/'><img src={logo} alt="" width={150} height={100} /></Link>
          </div>
          <ul>
            <li><NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/shop'>Shop</NavLink></li>
            <li><NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/featured'>Featured</NavLink></li>
            <li><NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/recommended'>Recommended</NavLink></li>
          </ul>
        </div>
        <div className='header_end'>
          {
            pathList.includes(pathname) ? (<button className='filter' onClick={showfilter}>Filters &nbsp;<img src={filter} width={15} height={15} /></button>) : null
          }
          <Filter active={active} showfilter={showfilter}></Filter>
          <div className='searchbar'>
            <span><img src={searchicon} alt="" width={16} height={16} /></span>
            <input placeholder='Search product...' type="text" onKeyUp={goSearch} />

          </div>
          <div className='cart' onClick={showbasket}>
            <img src={cart} alt="" width={24} height={24} />
            <div className='quantity'>{basketList.length}</div>
          </div>
          <MyBasket show={show} showbasket={showbasket}></MyBasket>
          {
            userInfo.fullname ? (<UserAvatar />) : (
              <>
                <div className='buttons'>
                  <Link className='signup' to='/Signup'>Sign Up</Link>
                </div>
                <div className='buttons'>
                  <Link className='signin' to='/Signin'>Sign In</Link>
                </div>
              </>
            )
          }
          {/* <div className='user'>
            <button type='button' onClick={viewaccount}>View Account</button>
            <button type='button' onClick={signout}>Sign Out</button>
          </div> */}
        </div>
      </div >
    </>
  )
}
