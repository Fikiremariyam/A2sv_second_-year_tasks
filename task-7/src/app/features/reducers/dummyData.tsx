
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
      // Reading
      getAllProducts: builder.query<{ products: any[] }, void>({
        query: () => "/products" }),

      getProductById : builder.query({
        query : (id) => `/products/${id}`}),
//adding two products 
      addNewProduct : builder.mutation({
        query : (newProduct ) => ({
          url : `/products/add`,
          method : "POST",
          headers : {"Content-Type": "application/json"},
          body : newProduct
        })
      }),
      //update
      updateProduct : builder.mutation({
        query :({id, updatedProduct}) => ({
          url : `/products/${id}`,
          method : 'PUT',
          headers : {'Content-Type': 'application/json'},
          body : updatedProduct,
        }),
      }),
// delete
    deleteProduct : builder.mutation({
      query : (id) => ({
        url : `/products/${id}`,
        method: 'DELETE',      
    })
  }),

})
});
  
  // RTK tool kit which hooks  the reducer to react hook 
  export const { useGetAllProductsQuery , useGetProductByIdQuery, useAddNewProductMutation , useUpdateProductMutation, useDeleteProductMutation  } = productsApi;