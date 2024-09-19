import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import axiosInstance from "../../../config/axios.config";

interface ProductsState {
  loading: boolean;
  productsList: IProduct[];
  error: null;
}

const initialState: ProductsState = {
  loading: true,
  productsList: [],
  error: null,
};

export const getProductsList = createAsyncThunk(
  "products/getProductsList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    // *** Get Request
    try {
      const { data } = await axiosInstance.get(
        "/products?limit=12&select=title,price,thumbnail"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    // *** Pending
    [`${getProductsList.pending}`]: (state) => {
      state.loading = true;
    },
    // *** Fulfilled
    [`${getProductsList.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },
    // *** Rejected
    [`${getProductsList.rejected}`]: (state, action) => {
      state.loading = false;
      state.productsList = [];
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
