import { createSelector } from "reselect";
import { IProduct } from "../interfaces";
import { RootState } from "../app/store";

const getCartItems = (state: RootState) => state.cart.cartItems;

export const getTotalPrice = createSelector([getCartItems], (cartItems) =>
  cartItems.reduce((total: number, product: IProduct) => {
    const productPrice = product.qty
      ? product.price * product.qty
      : product.price;
    return total + productPrice;
  }, 0)
);
