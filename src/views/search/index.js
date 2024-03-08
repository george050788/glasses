import React from 'react'
import { useParams } from 'react-router-dom'
import { ShopProducts } from '../../components'
import { useSelector } from 'react-redux'


export default function Search () {

  const { keyword } = useParams()
  console.log('keyword:', keyword)
  const list = useSelector(state => state.product.products)
  const searchproduct = list.filter(item => { return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 }
  )
  console.log('product:', searchproduct)


  return (
    <>
      <div className='main'>

        {searchproduct.length !== 0 ? (
          <div className='search-display'>
            <div className='search-msg'>
              <h5>Found {searchproduct.length} product with keyword {keyword}</h5>
            </div>
            <div className='shopProductList'>
              {
                searchproduct.map((product, index) => (
                  <ShopProducts key={index} product={product}></ShopProducts>
                ))
              }
            </div>
          </div>
        ) : (<h5>No Product Data!</h5>)
        }

      </div>



    </>
  )
}
