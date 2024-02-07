import { configureStore } from '@reduxjs/toolkit'
import CartSlices from './slices/CartSlices'
import { dataReducer } from './slices/FetchSlices'

export default configureStore({
  reducer: {
    cart : CartSlices,
    data : dataReducer
  }
})