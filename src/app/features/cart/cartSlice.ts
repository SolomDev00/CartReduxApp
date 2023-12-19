import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";

interface CartState {
  cartItems: IProduct[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// export const { increaseAction } = cartSlice.actions;

export default cartSlice.reducer;
