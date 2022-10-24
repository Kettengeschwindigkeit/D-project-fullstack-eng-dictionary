import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const initialState = {
    items: [],
    isLoading: false,
    status: null
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

// Remove Item
export const removeItem = createAsyncThunk('/items/removeItem', async (id, subCategoryId) => {
    try {
        const { data } = await axios.delete(`/items/${id}`, id)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

// Update Item
export const updateItem = createAsyncThunk('/items/updateItem', async (newData) => {
    try {
        const { data } = await axios.put(`/items`, newData)
        return data
    } catch (error) {
        console.log(error)
    }
})

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
        // Remove Item
        [removeItem.pending]: (state) => {
            state.isLoading = true
            state.status = "Loading..."
        },
        [removeItem.fulfilled]: (state, action) => {
            state.isloading = false
            state.items = state.items.filter((item) => item._id !== action.payload.item._id)
            state.status = action.payload.message
        },
        [removeItem.rejected]: (state) => {
            state.isLoading = false
        },
        // Update Item
        [updateItem.pending]: (state) => {
            state.isLoading = true
            state.status = "Loading..."
        },
        [updateItem.fulfilled]: (state, action) => {
            state.loading = false
            const index = state.items.findIndex((item) => item._id === action.payload.item._id)
            state.items[index] = action.payload.item
        },
        [updateItem.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export default itemSlice.reducer
