import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000"
  }),
  tagTypes: ["Shop"],
  endpoints: (builder) => ({
    shops: builder.query({
      query: () => "/shops",
      providesTags: ["Shop"]
    }),
    getShopDetail:builder.query({
      query:(id)=>`/shops/${id}`,
      providesTags: ["Shop"]
    }),
    addShop: builder.mutation({
      query: (shop) => ({
        url: "/shops",
        method: "POST",
        body: shop
      }),
      invalidatesTags: ["Shop"]
    }),
    updateShop: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/shops/${id}`,
        method: "PUT",
        body: rest
      }),
      invalidatesTags: ["Shop"]
    }),
    deleteShop: builder.mutation({
      query: (id) => ({
        url: `/shops/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Shop"]
    })
  })
});

export const {
  useShopsQuery,
  useGetShopDetailQuery,
  useAddShopMutation,
  useUpdateShopMutation,
  useDeleteShopMutation
} = shopApi;