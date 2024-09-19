import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsSlice = createApi({
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProductsList: builder.query({
      query: () => {
        return {
          url: "/products",
        };
      },
    }),
  }),
});

export default productsSlice.reducer;
export const { useGetProductsListQuery } = productsSlice;
