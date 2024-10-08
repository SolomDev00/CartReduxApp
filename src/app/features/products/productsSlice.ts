import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProductsList: builder.query({
      query: (arg) => {
        console.log(arg);
        return {
          url: "/products",
        };
      },
    }),
  }),
});

export const { useGetProductsListQuery } = productsApiSlice;
