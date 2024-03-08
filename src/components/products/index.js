import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Products ({ product }) {


  const navigate = useNavigate()
  const goDetail = () => {

    console.log('productid:', product.productid)
    navigate(`/details/${product.productid}`)
  }

  return (

    <div className='products' onClick={goDetail}>
      <div className='image'>
        <img src={product.img} alt="" width={330} height={200} />
      </div>
      <div className='details'>
        <h2>{product.name}</h2>
        <p>{product.brand}</p>
      </div>
    </div>

  )
}
