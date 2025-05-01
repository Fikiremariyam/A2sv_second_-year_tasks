
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
      // Reading
      getAllProducts: builder.query<{ products: any[] }, void>({
        query: () => "/products" }),
      getProductById : builder.query({
        query : (id) => `/products/${id}`
        

    }),
    
  }),

  });
  
  // RTK tool kit which hooks  the reducer to react hook 
  export const { useGetAllProductsQuery , useGetProductByIdQuery } = productsApi;