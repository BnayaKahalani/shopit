import { StoreProduct, UserInfo } from "./../type.d"
import { createSlice } from "@reduxjs/toolkit"

interface ShopperState {
  productData: StoreProduct[]
  userInfo: null | UserInfo
}

const initialState: ShopperState = {
  productData: [],
  userInfo: null,
}

export const shopperSlice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item: StoreProduct) => item._id === action.payload._id)
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.productData.push(action.payload)
      }
    },
  },
})

export const { addToCart } = shopperSlice.actions
export default shopperSlice.reducer
