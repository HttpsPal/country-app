import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryAPI = createApi({
	reducerPath: "countryApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://restcountries.com/v3.1",
	}),
	endpoints: (builder) => ({
		getAll: builder.query({
			query: () => `/all`,
		}),
		getCountry: builder.query({
			query: (name) => `/name/${name}`,
		}),
		getRegion: builder.query({
			query: (region) => `/region/${region}`,
		}),
	}),
});

export const { useGetAllQuery, useGetCountryQuery, useGetRegionQuery } =
	countryAPI;
