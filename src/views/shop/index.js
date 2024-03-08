import React, { useState, useEffect } from 'react'
import { ShopProductList } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useScrollToTop } from '../../hook'
import close from '../../images/close.svg'
import { setBrand } from '../../redux/reducers/filterReducer'
export default function Shop () {



  const products = useSelector(state => state.product.products)
  console.log('initialproducts:', products)
  useScrollToTop()
  const filterList = useSelector(state => state.filter.filterList)
  console.log('filterList:', filterList)
  const { brand, minPrice, maxPrice, sortBy } = filterList

  const [filteredproduct, setFilteredProduct] = useState([])
  console.log('useState:', filteredproduct)

  const [update, setUpdate] = useState()
  const dispatch = useDispatch()

  const clearbutton = () => {
    dispatch(setBrand(''))
    setUpdate('')
    console.log('setBrand:', filterList)

  }

  const filterapplied = () => {
    console.log('filterapplied', Object.keys(filterList))
    if (sortBy === 'name-desc') {
      const descedproduct = products.sort((a, b) => {
        if (a.name < b.name) { return 1 }
        else if (a.name > b.name) { return -1 }
        else { return 0 }
      })
      setFilteredProduct(descedproduct)
      setUpdate(Math.random())
      console.log('filteredproduct:', filteredproduct)
    }

    if (sortBy === 'name-asc') {
      const ascedproduct = products.sort((a, b) => {
        if (a.name < b.name) { return -1 }
        else if (a.name > b.name) { return 1 }
        else { return 0 }
      }
      )
      setFilteredProduct(() => ascedproduct)
      setUpdate(Math.random())
      console.log('filteredproduct:', filteredproduct)
    }
    let newproduct = products

    if (brand !== '' && brand !== undefined) {
      const filteredproduct = newproduct?.filter(item => {
        return item.brand.toLowerCase() === filterList?.brand
      })
      newproduct = filteredproduct
      setFilteredProduct(filteredproduct)
      console.log('filteredproduct:', filteredproduct)
      console.log('newproduct:', newproduct)
    }
    else setFilteredProduct(products)
    if (minPrice || maxPrice !== 0) {
      const filteredproduct = newproduct?.filter(item => {
        return item.price >= filterList?.minPrice && item.price <= filterList?.maxPrice
      })
      setFilteredProduct(filteredproduct)
      console.log('filteredproduct:', filteredproduct)
    }


  }

  useEffect(() => {
    filterapplied()
    console.log('useEffect:', sortBy)
  }, [filterList])




  return (
    <>
      <div className='main'>
        {/* {Object.keys(filterList).length == 0 ?
          (<div className='shop-display'>
            {
              products.length !== 0 ? (<ShopProductList products={products} />) : (<h3>No Product Data!</h3>)
            }
          </div>) : ( */}
        <div className='filters-display'>
          <div className='list-header'>
            {
              brand || minPrice || maxPrice || sortBy ? <h5>Found {filteredproduct.length} products</h5> : null
            }
          </div>
          <div className='applied-filters'>
            {
              brand !== '' ?
                (<div className='wrapper brand'>
                  <span>Brand</span>
                  <div className='details'>
                    <h5>{brand}</h5>
                    <button type='button' className='remove' onClick={clearbutton}>
                      <img src={close} alt="" width={15} height={15} />
                    </button>
                  </div>
                </div>) : null
            }
            {
              sortBy !== '' ?
                (<div className='wrapper sort'>
                  <span>Sort By</span>
                  <div className='details'>
                    <h5>{sortBy}</h5>
                    <div className='remove'>
                      <img src={close} alt="" width={15} height={15} />
                    </div>
                  </div>
                </div>) : null
            }
            {
              minPrice || maxPrice !== 0 ?
                (<div className='wrapper price'>
                  <span>Price Range</span>
                  <div className='details'>
                    <h5>${minPrice}- ${maxPrice}</h5>
                    <div className='remove'>
                      <img src={close} alt="" width={15} height={15} />
                    </div>
                  </div>
                </div>) : null
            }
          </div>

          <div className='filtered-products'>
            {
              filteredproduct.length !== 0 ? (<ShopProductList products={filteredproduct} />) : (<h3>No Product Found!</h3>)
            }
          </div>
        </div>

      </div >

    </>
  )
}
