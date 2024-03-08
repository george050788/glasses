import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Message, ProductList } from '../../components'
import { useRecommendedProducts, useBasket, useScrollToTop } from '../../hook'
import arrowback from '../../images/arrow_back.svg'
import arrowdown from '../../images/arrow_down.svg'
// import check from '../../images/check.svg'


export default function Details () {



  const {
    recommendedProducts, recommendedLoading, recommendedError, getData
  } = useRecommendedProducts()

  const { productid } = useParams()
  const products = useSelector(state => state.product.products)
  const product = products.find(item => {
    return item.productid === productid
  }

  )

  const [open, setOpen] = useState(false)
  const dropdown = () => {
    setOpen(!open)
  }


  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const selectsize = (e) => {

    setOpen(!open)

    console.log(e.target.innerText)
    setSelectedSize(`${e.target.innerText.slice(0, 2)} mm`)
  }
  const [active, setActive] = useState('')
  const chooseColor = (e) => {
    setActive(e.target.getAttribute('data-index'))
    console.log('active', active)
    console.log('style', e.target.style.backgroundColor)
    console.log('index', e.target.getAttribute('data-index'))
    setSelectedColor(e.target.style.backgroundColor)
  }




  const { isBasket, handleBasket } = useBasket(product)

  const addtoBasket = () => {

    const newProduct = { ...product, selectedSize, selectedColor }
    console.log('newproduct:', newProduct)
    handleBasket(newProduct)
  }

  useScrollToTop()

  return (
    <>
      <div className='main'>
        <div className='product-view'>
          <Link to='/shop'><h3><img src={arrowback} alt='' width={15} height={15} />&nbsp; Back to shop</h3></Link>
          <div className='product-model'>
            <div className='collection'>
              {
                product?.avalibleImgs?.map((product, index) => (
                  <div><img src={product.url} alt='' key={index} width={118} height={98} /></div>
                ))
              }
            </div>
            <div className='model-image'>
              <img src={product?.img} alt="" />
            </div>
            <div className='model-details'>
              <br />
              <span className='detail-subtitle'>{product?.brand}</span>
              <h1>{product?.name}</h1>
              <p>{product?.desc}</p>
              <br />
              <div className='divider'></div>
              <br />
              <div className='detail-center'>
                <span>Lens Width and Frame Size</span>
                <br />
                <br />
                <div className='selector' onClick={dropdown}>
                  <div className='container'>
                    <input placeholder='--Select Size--' value={selectedSize} disabled='false'>

                    </input>
                  </div>

                  <div className='arrow-down'>
                    <div className='vertical-divider'></div>
                    <img src={arrowdown} alt="" width={20} height={20} />
                  </div>
                </div>
                <div className={open ? 'sizing' : 'sizing active'}>
                  {product?.size.map((obj, index) => (<span onClick={selectsize} key={index}>{obj}mm</span>))}
                </div>
              </div>
              <br />
              <div className='detail-bottom'>
                <span>Choose Color</span>

                <div className='color-choose'>{product?.colors.map((color, index) => (<div className={active == index ? 'color active' : 'color'} onClick={chooseColor} value={selectedColor} style={{ backgroundColor: color }} key={index} data-index={index}></div>))}</div>
                <br />
              </div>
              <h1>${product?.price}.00</h1>
              <button type='button' onClick={addtoBasket}>{isBasket() ? 'Remove From Basket' : 'Add To Basket'}</button>

            </div>
          </div>

          <div className='display'>
            <div className='display-header'>
              <h1>Recommened Products</h1>
              <Link to='/featured'>See All</Link>
            </div>
            {
              recommendedLoading ? (<Message msg='Loading...'></Message>) : recommendedError ? (<Message action={getData} msg={recommendedError}></Message>) : (<ProductList products={recommendedProducts} />)
            }
          </div>
        </div>
      </div >


    </>
  )
}
