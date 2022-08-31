import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itemsApi = createApi({
    reducerPath: 'items/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    endpoints: build => ({
        searchItems: build.query<any, string>({
            query: (search: string) => ({
                url: `search/items`,
                params: {
                    q: search
                }
            })
        })
    })
})

export const {useSearchItemsQuery} = itemsApi
