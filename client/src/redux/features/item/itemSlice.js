import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const initialState = {
    items: [],
    isLoading: false
}

export const createItem = createAsyncThunk(
    "item/createItem",
    async ({ subCategoryId, title, translate }) => {
        try {
            const { data } = await axios.post(`/items/${subCategoryId}`, { subCategoryId, title, translate })
            return data
        } catch (error) {
            console.log(error)
        }
    }    
)

export const getItems = createAsyncThunk(
    "item/getItems",
    async (subCategoryId) => {
        try {
            const { data } = await axios.get(`subCategories/items/${subCategoryId}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {},
    extraReducers: {
        // Create Item
        [createItem.pending]: (state) => {
            state.isLoading = true
        },
        [createItem.fulfilled]: (state, action) => {
            state.isLoading = false
            state.items.push(action.payload)
        },
        [createItem.rejected]: (state) => {
            state.isLoading = false
        },
        // Get Items
        [getItems.pending]: (state) => {
            state.isLoading = true
        },
        [getItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.items = action.payload
        },
        [getItems.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export default itemSlice.reducer
