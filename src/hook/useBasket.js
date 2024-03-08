import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, clear } from '../redux/reducers/basketReducer'

export default function useBasket (product) {

  const dispatch = useDispatch()
  const basketList = useSelector(state => state.basket.basketList)

  const isBasket = () => {

    console.log('basketList', basketList)
    const res = basketList?.find(item => {
      return item?.productid === product?.productid
    })
    console.log('isBasket :', res)



    if (res) {
      return true
    } else {
      return false
    }
  }

  const handleBasket = (product) => {

    if (isBasket()) {
      dispatch(remove({ product }))
    } else {
      dispatch(add({ product }))
    }

  }

  const clearBasket = (product) => {
    clear({ product })
  }



  // const addToBasket = (product) => {

  //   if (isBasket)

  // }

  // const removeFromBasket = (product) => {


  // }
  return { isBasket, handleBasket, clearBasket }


}
