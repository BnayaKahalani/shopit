import { StoreProduct } from "./../type.d"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  productData: [],
  userInfo: null,
}

export const shopperSlice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item: StoreProduct) => item._id === action.payload._id)
      state.productData = action.payload
    },
  },
})

export const { addToCart } = shopperSlice.actions
export default shopperSlice.reducer
