import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basketList: []
  },
  reducers: {
    add: (state, params) => {
      const { product } = params.payload
      console.log('add:', product)
      state.basketList = [...state.basketList, product]
      console.log('add: baskets', state.basketList)
    },
    remove: (state, params) => {
      const { product } = params.payload
      console.log('remove:', product)
      const list = [...state.basketList]
      const newList = list.filter(item => {
        return item?.productid !== product?.productid
      })
      state.basketList = [...newList]
      console.log('remove: baskets', state.basketList)
    },
    clear: (state) => {

      state.basketList = []
      console.log('clear:', state.basketList)
    },



    add_QTY: (state, params) => {
      const { product } = params.payload
      console.log('add_QTY:', product)
      const list = [...state.basketList]
      console.log('list', list)
      const newList = list.map(item => {
        if (item?.productid === product?.productid) {
          return { ...item, quantity: product?.quantity + 1 }
        } else {
          return item
        }
      })
      state.basketList = [...newList]
      console.log('add: product', newList)
    },

    minus_QTY: (state, params) => {
      const { product } = params.payload
      console.log('minus_QTY:', product)
      const list = [...state.basketList]
      console.log('list', list)
      const newList = list.map(item => {
        if (item?.productid === product?.productid) {
          return { ...item, quantity: product?.quantity - 1 }
        } else {
          return item
        }
      })
      state.basketList = [...newList]
      console.log('minus: product', newList)
    }



  }
})


export const { add, remove, clear, minus_QTY, add_QTY } = basketSlice.actions
const basketReducer = basketSlice.reducer
export default basketReducer