import React from 'react'
import close from '../../images/close.svg'
import { add_QTY, minus_QTY, remove } from '../../redux/reducers/basketReducer'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

// import { useSelector } from 'react-redux'

export default function BasketItem ({ product }) {

  // const { isBasket, handleBasket } = useBasket()
  // console.log('basketitem,', product)
  // const basketList = useSelector(state => state.basket.basketList)

  const { pathname } = useLocation()

  const dispatch = useDispatch()
  const clearBasket = () => {
    dispatch(remove({ product }))
  }

  const add = () => {
    if (product.quantity !== 0) {
      dispatch(add_QTY({ product }))
    }
  }

  const minus = () => {
    if (product.quantity !== 0 && product.quantity > 1) {
      dispatch(minus_QTY({ product }))
    }
  }



  return (

    <div className='items'>
      <div className='controller'>
        <button onClick={add} disabled={pathname === '/checkout/step4'}>+</button>
        <button onClick={minus} disabled={pathname === '/checkout/step4'}>-</button>
      </div>

      <div className='basket-item'>
        <div className='basket-img'><img src={product.img} alt="" width={90} height={90} /></div>
        <div className='basket-detail'>
          <h4>{product.name}</h4>
          <div className='item-specs'>
            <div>
              <span>Quantity</span>
              <h5>{product.quantity}</h5>
            </div>
            <div>
              <span>Size</span>
              <h5>{product?.selectedSize ? product?.selectedSize : `${product?.size[0]} mm`
              } </h5>
            </div>
            <div>
              <span>Color</span>
              <div>
                {product?.selectedColor ? (<div className='color' style={{ backgroundColor: product?.selectedColor }}></div>) : <div className='color' style={{ backgroundColor: product?.colors[0] }}></div>}
              </div>
            </div>
          </div>
        </div>
        <div className='item-price'>
          <h4>${product.price * product.quantity}</h4>
        </div>

        <button type='button' onClick={clearBasket} disabled={pathname === '/checkout/step4'}>
          <img src={close} alt="" width={15} height={15} />
        </button>
      </div>
    </div>
  )
}
