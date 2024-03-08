import React from 'react'
import { default as ShopProducts } from '../shopProduct'

export default function ShopProductList ({ products }) {
  return (
    <>

      <div className='shopProductList'>
        {
          products.map((product, index) => (
            <ShopProducts key={index} product={product}></ShopProducts>
          ))
        }
      </div>


    </>
  )
}
