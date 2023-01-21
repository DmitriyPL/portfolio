import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API_URL = process.env.NODE_ENV === 'production' ? 'https://dplotitsyn.com/api/' : 'http://localhost:5000/api/';

export const replaceHost = (imgPath) => {

  if (process.env.NODE_ENV !== 'production') {
      return imgPath.replace(/https:\/\/dplotitsyn.com/g, 'http://localhost:5000')
  } else {
      return imgPath;
  }
}

export const portfolioApi = createApi({

  reducerPath: 'portfolioApi',

  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (builder) => ({

    getAllAboutItems: builder.query({
      query: () => `about`,
    }),

    getAllSkillItems: builder.query({
      query: () => `skills`,
    }),

    getAllExpItems: builder.query({
      query: () => `experience`,
    }),

    getAllPortfolioItems: builder.query({
      query: () => `portfolio`,
    }),

    getAllTegItems: builder.query({
      query: () => `tags`,
    }),

    getContacts: builder.query({
      query: () => `contact`,
    }),

    getTestimonials: builder.query({
      query: () => `testimonial`,
    }),

    getBrands: builder.query({
      query: () => `brands`,
    }),

    sendEmail: builder.mutation({
      query: (body) => ({
        url: 'email',
        method: 'POST',
        body,
      })
    }),

    getWorkByID: builder.query({
      query: (id) => `/experience/work/${id}`,
    }),

  }),
})

export const {
  useGetAllAboutItemsQuery,
  useGetAllSkillItemsQuery,
  useGetAllExpItemsQuery,
  useGetAllPortfolioItemsQuery,
  useGetAllTegItemsQuery,
  useGetContactsQuery,
  useGetTestimonialsQuery,
  useGetBrandsQuery,
  useSendEmailMutation,
  useGetWorkByIDQuery,
} = portfolioApi;