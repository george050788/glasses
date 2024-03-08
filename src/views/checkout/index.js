import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate, useParams, useLocation } from 'react-router-dom'

export default function Checkout () {


  const { pathname } = useLocation()
  const pathList = ['/checkout/step4']
  const navigate = useNavigate()
  const backtoHome = () => {
    navigate('/')
  }

  const { productid } = useParams()
  const basketList = useSelector(state => state.basket.basketList)
  const product = basketList.filter(item => {
    return item.productid === productid
  }
  )
  const arr = basketList.map((product) => product.price * product.quantity)

  return (
    <>


      <div className='main'>
        <div className='checkout'>
          {pathList == pathname ? null :
            (<div className='checkout-header'>
              <div className='checkout-header-menu'>
                <div className='line'></div>
                <li><NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/checkout/step1'>
                  <div className='header-item'>
                    <div className='header-icon'>
                      <h4>1</h4>
                    </div>
                    <h6>Order Summary</h6>
                  </div>
                </NavLink>
                </li>
                <li><NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/checkout/step2'>
                  <div className='header-item'>
                    <div className='header-icon'>
                      <h4>2</h4>
                    </div>
                    <h6>Shipping Details</h6>
                  </div>
                </NavLink>
                </li>
                <li><NavLink className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''} to='/checkout/step3'>
                  <div className='header-item'>
                    <div className='header-icon'>
                      <h4>3</h4>
                    </div>
                    <h6>Payment</h6>
                  </div>
                </NavLink>
                </li>
              </div>
            </div>)
          }
          <div>
            <Outlet></Outlet>
          </div>




        </div>
      </div>

    </>
  )
}
