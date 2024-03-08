import { default as filterReducer } from './filterReducer'
import { default as userReducer } from './userReducer'
import { default as productReducer } from './productReducer'
import { default as basketReducer } from './basketReducer'
const rootReducer = {
  user: userReducer,
  product: productReducer,
  basket: basketReducer,
  filter: filterReducer
}

export default rootReducer