import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { addItemToShoppingCart } from "../../../utils/functions";

interface CartState {
  cartItems: IProduct[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCartAction: (state, actionPayload: PayloadAction<IProduct>) => {
      state.cartItems = addItemToShoppingCart(
        state.cartItems,
        actionPayload.payload
      );
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;

export default cartSlice.reducer;
