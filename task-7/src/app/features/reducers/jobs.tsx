
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsapi = createApi({
  
    reducerPath: "jobs",
    baseQuery: fetchBaseQuery({ baseUrl: " https://akil-backend.onrender.com" }),
    endpoints: (builder) => ({
      // Reading
      getAllJobs: builder.query<{ data: any[] }, void>({
        query: () => "/opportunities/search" }),

})
});
  
  // RTK tool kit which hooks  the reducer to react hook 
  export const { useGetAllJobsQuery ,   } = jobsapi;