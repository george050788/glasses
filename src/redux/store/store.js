import { createStore } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['user', 'basket']
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}