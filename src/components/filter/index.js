import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilter, reset } from '../../redux/reducers/filterReducer'
// import PriceRange from '../pricerange'

export default function Filter ({ active, showfilter }) {


  const { pathname } = useLocation()
  const pathList = ['/shop']
  console.log(pathname)

  const filter = useSelector(state => state.filter)
  const [field, setFilter] = useState({
    brand: filter.brand,
    minPrice: filter.minPrice,
    maxPrice: filter.maxPrice,
    sortBy: filter.sortBy
  })
  // const [brandfilter, setBrandFilter] = useState('')
  // const [sortfilter, setSortFilter] = useState('')
  // const [minprice, setMinPrice] = useState(0)
  // const [maxprice, setMaxPrice] = useState(0)

  const dispatch = useDispatch()
  const filterList = useSelector(state => state.filter.filterList)
  // const filter = [{ brand: brandfilter, sortBy: sortfilter, minprice: minprice, maxprice: maxprice }]
  // console.log('filter:', filter)

  const [tooltip, setTooltip] = useState({ value: null, percent: null })
  const [handle, setHandle] = useState({ mouseOver: false })

  const mousemove = (e) => {
    setTooltip({ value: null, percent: null })
  }
  console.log('state:', handle)

  const setBrand = (e) => {
    setFilter({ ...field, brand: e.target.value })

  }
  console.log('setBrand:', field.brand)
  const setSort = (e) => {
    setFilter({ ...field, sortBy: e.target.value })

  }
  console.log('setSort:', field.sortBy)

  const minprice = (e) => {
    setFilter({ ...field, minPrice: parseInt(e.target.value) })
    console.log('minprice:', field)
  }
  const maxprice = (e) => {
    setFilter({ ...field, maxPrice: parseInt(e.target.value) })
    console.log('maxprice:', field)
  }
  // const minpricechange = (min, max) => {
  //   setFilter({ ...field, minPrice: min, maxPrice: max })
  // }
  const applyfilter = () => {
    dispatch(applyFilter(field))
    console.log('apply:', filterList)
    showfilter()
  }

  const resetfilter = () => {
    if (filterList.length !== 0) {
      dispatch(reset())
      showfilter()
    }
    console.log('reset:', filterList)
  }

  return (
    <>
      {pathList.includes(pathname) ?
        <div className={active ? 'filter-display' : 'filter-display active'}>
          <div className='container'>
            <div className='filters'>
              <div className='filters-field'>
                <span>Brand</span>
                <br />
                <br />
                <select name="" id="" value={field.brand} onChange={setBrand} >
                  <option value="">All Brands</option>
                  <option value="salt">Salt Maalat</option>
                  <option value="betsin">Betsin Maalat</option>
                  <option value="black">Black Kibal</option>
                  <option value="sexbomb">Sexbomb</option>
                </select>
              </div>
              <div className='filters-field'>
                <span>Sort By</span>
                <br />
                <br />
                <select name="" id="" value={field.sortBy} onChange={setSort}>
                  <option value="none">None</option>
                  <option value="name-asc">Name Ascending A - Z</option>
                  <option value="name-desc">Name Descending Z - A</option>
                  <option value="price-desc">Price High - Low</option>
                  <option value="price-asc">Price Low - High</option>
                </select>
              </div>
              <div className='filters-field'>
                <span>Price Range</span>
                <br />
                <br />
                {/* <PriceRange /> */}
                <div className='box'>
                  <div className='control'>
                    <input type="number" max={678} min={78} value={field.minPrice} onChange={minprice} />-<input type="number" max={678} min={78} value={field.maxPrice} onChange={maxprice} />
                  </div>
                  <br />
                  <div className='slider'>
                    <div className='inner'></div>
                    <div className='outer'></div>
                    <div className='tooltip' tooltip={tooltip} onMouseMove={mousemove} style={{ position: 'absolute' }}><span>Value: </span></div>
                    <div className='handle left' disabled={{ mouseOver: false }} handle={handle} onMouseEnter={() => { setHandle({ mouseOver: true }) }} onMouseLeave={() => { setHandle({ mouseOver: false }) }}></div>
                    <div className='handle right' disabled={{ mouseOver: false }} handle={handle} onMouseEnter={() => { setHandle({ mouseOver: true }) }} onMouseLeave={() => { setHandle({ mouseOver: false }) }}></div>
                    <div className='tracks'></div>
                    <div className='ticks'>
                      <div>
                        <div className='line' style={{ position: 'absolute', left: '3.66667%' }}></div>
                        <div className='value' style={{ position: 'absolute', left: '3.66667%' }}>100</div>
                      </div>
                      <div>
                        <div className='line' style={{ position: 'absolute', left: '20.3333%' }}></div>
                        <div className='value' style={{ position: 'absolute', left: '20.3333%' }}>200</div>
                      </div>
                      <div>
                        <div className='line' style={{ position: 'absolute', left: '37%' }}></div>
                        <div className='value' style={{ position: 'absolute', left: '37%' }}>300</div>
                      </div>
                      <div>
                        <div className='line' style={{ position: 'absolute', left: '53.6667%' }}></div>
                        <div className='value' style={{ position: 'absolute', left: '53.6667%' }}>400</div>
                      </div>
                      <div>
                        <div className='line' style={{ position: 'absolute', left: '70.3333%' }}></div>
                        <div className='value' style={{ position: 'absolute', left: '70.3333%' }}>500</div>
                      </div>
                      <div>
                        <div className='line' style={{ position: 'absolute', left: '87%' }}></div>
                        <div className='value' style={{ position: 'absolute', left: '87%' }}>600</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className='filters-action'>
                <button type='button' onClick={applyfilter} >Apply filters</button  ><button type='button' onClick={resetfilter}>Reset filters</button>
              </div>
            </div>
          </div>
        </div >
        : null}



    </>
  )
}
