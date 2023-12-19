import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { addItemToShoppingCart } from "../../../utils/functions";
import { RootState } from "../../store";

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
    addItemToCartAction: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = addItemToShoppingCart(state.cartItems, action.payload);
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      const { id } = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === id);

      if (existingProduct) {
        if (existingProduct.qty === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          existingProduct.qty -= 1;
        }
      }
    },
  },
});

export const { addItemToCartAction, removeProduct } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;
