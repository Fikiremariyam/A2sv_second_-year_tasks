
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
      // Reading
      getAllProducts: builder.query<{ products: any[] }, void>({
        query: () => "/products",
      }),
    }),
  });
  
  // Export the auto-generated hook
  export const { useGetAllProductsQuery } = productsApi;