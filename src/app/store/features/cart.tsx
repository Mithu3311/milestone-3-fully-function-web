import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Add to Cart functionalty
    addToCart(state,action){
      const uuid = Math.floor(1000+Math.random()*9000);
      const newObj = {...action.payload,uuid};
      state.push(newObj);
    }

  },
})

export const { addToCart } = cartSlice.actions


export default cartSlice.reducer