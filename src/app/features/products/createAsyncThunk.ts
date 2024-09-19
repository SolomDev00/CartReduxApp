import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import axiosInstance from "../../../config/axios.config";
import { RootState } from "../../store";

interface ProductsState {
  loading: boolean;
  data: IProduct[];
  error: null;
}

const initialState: ProductsState = {
  loading: true,
  data: [],
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
      state.data = action.payload;
    },
    // *** Rejected
    [`${getProductsList.rejected}`]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const productsSelector = ({ products }: RootState) => products;
export default productsSlice.reducer;
