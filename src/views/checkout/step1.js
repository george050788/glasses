import React, { useState } from 'react'
import { calculator } from '../../helpers'
import arrowforward from '../../images/arrow_forward.png'
import { BasketItem } from '../../components'
import store from '../../images/store.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Step1 () {

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

  const totalprice = calculator(arr)
  console.log('totalprice:', totalprice)


  const tostep2 = () => {
    navigate('/checkout/step2', { state: { totalprice: totalprice } })
  }

  // const [totalprice, setTotalPrice] = useState(0)

  return (
    <>
      <div className='step-1'>
        <h3>Order Summary</h3>
        <span>Review items in your basket.</span>
        <br />
        <div className='checkout-display'>
          {
            basketList.length !== 0 ? (basketList.map((product, index) => (<BasketItem product={product} key={index}></BasketItem>))) : (<div className='basket-empty'><h5 className='empty'>Your basket is empty</h5></div>)
          }
        </div>
        <div className='text-right'>
          <p>Subtotal:</p>
          <h2>${calculator(arr)}</h2>
        </div>
        <br />
        <div className='checkout-action'>
          <button className='continue' onClick={backtoHome}>
            <img src={store} alt="" width={15} height={15} />
            <span>&nbsp;   Continue Shopping</span>
          </button>
          <button type='submit' className='nextstep' onClick={tostep2} disable={basketList.length == 0}>
            Next Step  &nbsp;
            <img src={arrowforward} alt="" />
          </button>
        </div>


      </div>


    </>
  )
}
