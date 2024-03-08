import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterList: {},
    brand: '',
    minPrice: 0,
    maxPrice: 0,
    sortBy: '',
  },

  reducers: {
    applyFilter: (state, params) => {
      const field = params.payload
      console.log('filter:', field)
      state.filterList = { ...field }
    },
    setBrand: (state, params) => {
      const field = params.payload
      console.log('filter:', field)
      state.filterList.brand = field
    },
    setMinPrice: (state, params) => {
      const field = params.payload
      console.log('filter:', field)
      state.minPrice = field.minPrice
    },
    setMaxPrice: (state, params) => {
      const field = params.payload
      console.log('filter:', field)
      state.maxPrice = field.maxPrice
    },
    // setSortBy: () => {

    // },
    reset: (state) => {
      state.filterList = {
        brand: '',
        minPrice: 0,
        maxPrice: 0,
        sortBy: '',
      }
      console.log('reset:', state.filterList)
    },
    // remove: (state, params) => {
    //   const field = params.payload
    //   console.log('remove:', filter)
    //   const list = [...state.filterList]
    //   const newList = list.filter(item => {
    //     return item !== filter?.payload
    //   })
    //   state.filterList = [...newList]
    //   console.log('remove: filter', state.filterList)
    // },

  }
})


export const { applyFilter, setBrand, setMinPrice, setMaxPrice, reset, remove } = filterSlice.actions
const filterReducer = filterSlice.reducer
export default filterReducer