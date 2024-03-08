import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    docId: '',
    user: {}
  },
  reducers: {
    getDocId: (state, params) => {

      const { docId } = params.payload
      state.docId = docId
    },
    getUserInfo: (state, params) => {
      const { user } = params.payload
      state.user = { ...user }
    },
    clearUser: (state) => {
      state.user = {}
    }
  }
})


export const { getDocId, getUserInfo, clearUser } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer