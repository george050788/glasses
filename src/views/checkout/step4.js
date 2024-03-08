import React from 'react'
import { BasketItem } from '../../components'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { clear } from '../../redux/reducers/basketReducer'
import checkout from '../../images/checkout.svg'

export default function Step4 () {



  const { state } = useLocation()
  console.log('step4-state:', state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Home = () => {
    navigate('/')
    dispatch(clear())
  }
  const Shop = () => {
    navigate('/shop')
    dispatch(clear())
  }


  return (
    <>
      <div className='step-4'>
        <div className='step4-header'>
          <h2>Your Order Has Been Placed</h2>
          <img src={checkout} alt="" width={30} height={30} />
        </div>

        <div className='order-details'>
          <h5>OrderID: {state?.orderId}</h5>
          <br />
          <h5>Fullname: {state?.fullname}</h5>
          <br />
          <h5>Email: {state?.email}</h5>
          <br />
          <h5>Shipping Address: {state?.address}</h5>
          <br />
          <h5>Mobile: {state?.mobile}</h5>
          <br />
        </div>
        <div className='product-display'>
          {
            state?.basketList.map((product, index) => (<BasketItem product={product} key={index}></BasketItem>))
          }
        </div>
        <div className='total'>
          <p>Total</p>
          <h3>${state?.totalprice}</h3>
        </div>

        <div className='post-actions'>
          <button className='back2home' onClick={Home} type='button'>Back To Home</button>
          <button className='keeps-shopping' onClick={Shop} type='button'>Continue Shopping</button>
        </div>
        <div className='thank-msg'>
          <h4>Thank You For Shopping With US !!</h4>
        </div>




      </div>
    </>
  )
}
