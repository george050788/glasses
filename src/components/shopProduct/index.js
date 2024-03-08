import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBasket } from '../../hook'


export default function ShopProducts ({ product }) {

  const { isBasket, handleBasket } = useBasket(product)

  const navigate = useNavigate()
  const goDetails = () => {
    console.log('productid:', product.productid)
    navigate(`/details/${product.productid}`)
  }

  const addtoBasket = () => {
    handleBasket(product)
  }

  return (
    <>
      <div>
        <div className='shopProducts' onClick={goDetails}>
          <div className='image'>
            <img src={product.img} alt="" width={178} height={100} />
          </div>
          <div className='details'>
            <h2>{product.name}</h2>
            <p>{product.brand}</p>
            <h4>${product.price}.00</h4>
          </div>

        </div>
        <button onClick={addtoBasket}>{isBasket() ? 'Remove From Basket' : 'Add To Basket'}</button>
        {/* <MyBasket handleBasket={handleBasket}></MyBasket> */}
      </div>



    </>
  )
}


