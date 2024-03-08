import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: []
  },
  reducers: {
    getProducts: (state, params) => {
      const { list } = params.payload
      console.log('reducer:', list)
      state.products = [...list]
    },

  }
})


export const { getProducts } = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer