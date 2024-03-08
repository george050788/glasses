import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { clear } from '../../redux/reducers/basketReducer'
import BasketItem from '../basketItem'
import { calculator } from '../../helpers'



export default function MyBasket ({ show, showbasket }) {

  const { productid } = useParams()
  const basketList = useSelector(state => state.basket.basketList)
  console.log('basketList:', basketList)
  // const product = basketList.find(item => {
  //   return item.productid === productid
  // })
  // console.log('product:', product)


  // const clearBasket = () => {
  //   const clearList = basketList.shift()
  //   console.log('clear:', clearList)
  //   console.log('newbasket:', basketList)
  // }
  const dispatch = useDispatch()
  const clearBasket = () => {
    if (basketList.length !== 0) {
      dispatch(clear())
    }
    console.log('clear,', basketList)

  }


  const navigate = useNavigate()
  const checkout = () => {
    navigate('/checkout')
  }
  const arr = basketList.map((product) => product.price * product.quantity)

  console.log('priceList', arr)




  return (

    <div className={show ? 'basket' : 'basket show'}>
      <div className='basket-list'>
        <div className='mybasket-header'>
          <h3>My Basket &nbsp; <span>{basketList.length > 1 ? `(${basketList.length} items)` : `(${basketList.length} item)`}</span></h3>


          <button onClick={showbasket}>Close</button>
          <button onClick={clearBasket}>Clear Basket</button>

        </div>


        {<div className='item-display'>
          {
            basketList.length !== 0 ? (basketList.map((product, index) => (<BasketItem product={product} key={index}></BasketItem>))) : (<div className='basket-empty'><h5 className='empty'>Your basket is empty</h5></div>)
          }
        </div>}




      </div>
      <div className='total'>
        <div>
          <h6>Subtotal Amout:</h6>
          <h3>${calculator(arr)}</h3>
        </div>

        <button onClick={checkout} type='button' disabled={basketList.length == 0}>CHECK OUT</button>

      </div>
    </div >




  )
}
