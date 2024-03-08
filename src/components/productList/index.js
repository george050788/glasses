import React from 'react'
import { default as Products } from '../products'



export default function ProductList ({ products }) {





  return (

    <>

      <div className='productlist'>
        {
          products.map((product, index) => (
            <Products key={index} product={product}></Products>
          ))
        }
      </div>

    </>
  )
}
