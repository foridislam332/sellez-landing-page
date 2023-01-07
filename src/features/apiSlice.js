import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import {}

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4002/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
