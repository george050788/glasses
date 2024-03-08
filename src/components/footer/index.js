import React from 'react'
import logo from '../../images/logo.png'
import { useLocation } from 'react-router-dom'

export default function Footer () {

  const { pathname } = useLocation()
  const pathList = ['/', '/shop']

  return (

    pathList.includes(pathname) ? (
      <footer>
        <div className='footer-start'>
          <span>Developed by &nbsp;
            <a href="http://www.solely.world/">Solely Bootcamp</a>
          </span>
        </div>
        <div className='footer-center'>
          <img src={logo} alt="" width={150} height={60} />
          <h5>&copy;&nbsp;2023</h5>
        </div>
        <div className='footer-end'>
          <span>Fork this project &nbsp;
            <a href="https://github.com/LeeMary1204/Solely-ecommerce-react.git">HERE</a>
          </span>
        </div>
      </footer >
    ) : null
  )
}
