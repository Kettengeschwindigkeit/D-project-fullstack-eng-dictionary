import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const initialState = {
    categories: [],
    isLoading: false
}

export const createCategory = createAsyncThunk(
    "category/createCategory",
    async (params) => {
        try {
            const { data } = await axios.post("/categories", params)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const getCategories = createAsyncThunk(
    "category/getCategories",
    async () => {
        try {
            const { data } = await axios.get("/categories")
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const removeCategory = createAsyncThunk('/categories/removeCategory', async (id) => {
    try {
        const { data } = await axios.delete(`/categories/${id}`, id)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const updateCategory = createAsyncThunk('/categories/updateCategory', async (title, id) => {
    try {
        const { data } = await axios.put(`/categories/${id}`, title)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: {
        // Create Category
        [createCategory.pending]: (state) => {
            state.isLoading = true
        },
        [createCategory.fulfilled]: (state, action) => {
            state.isLoading = false
            state.categories.push(action.payload)
        },
        [createCategory.rejected]: (state) => {
            state.isLoading = false
        },
        // Get All Categories
        [getCategories.pending]: (state) => {
            state.isLoading = true
        },
        [getCategories.fulfilled]: (state, action) => {
            state.isLoading = false
            state.categories = action.payload.categories
        },
        [getCategories.rejected]: (state) => {
            state.isLoading = false
        },
        // Remove Category
        [removeCategory.pending]: (state) => {
            state.isLoading = true
        },
        [removeCategory.fulfilled]: (state, action) => {
            state.loading = false
            state.categories = state.categories.filter((category) => category._id !== action.payload._id)
        },
        [removeCategory.rejected]: (state) => {
            state.isLoading = false
        },
        // Update Category
        [updateCategory.pending]: (state) => {
            state.isLoading = true
        },
        [updateCategory.fulfilled]: (state, action) => {
            state.loading = false
            const index = state.categories.findIndex((category) => category._id === action.payload._id)
            state.categories[index] = action.payload 
        },
        [updateCategory.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export default categorySlice.reducer
