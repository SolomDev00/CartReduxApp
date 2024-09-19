import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { RootState } from "../../store";

interface ProductsState {
  productsList: IProduct[];
}

const initialState: ProductsState = {
  productsList: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const cartSelector = (state: RootState) => state.cart;
export default productsSlice.reducer;
