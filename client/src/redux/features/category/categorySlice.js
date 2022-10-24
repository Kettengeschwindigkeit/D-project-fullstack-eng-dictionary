import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const initialState = {
    categories: [],
    isLoading: false,
    status: null
}

// Create New Category
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

// Get Category By Id
export const getCategoryById = createAsyncThunk("category/getCategoryById", async (id) => {
    try {
        const { data } = await axios.get(`categories/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
})

// Get My Categories & SubCategories
export const getMyCategories = createAsyncThunk(
    "category/getMyCategories",
    async () => {
        try {
            const { data } = await axios.get("/categories/user/me")
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

// Remove Category
export const removeCategory = createAsyncThunk('/categories/removeCategory', async (id) => {
    try {
        const { data } = await axios.delete(`/categories/${id}`, id)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

// Update Category
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
            state.status = "Loading..."
        },
        [createCategory.fulfilled]: (state, action) => {
            state.categories.push(action.payload.newCategory)
            state.isLoading = false
            state.status = action.payload.message
        },
        [createCategory.rejected]: (state) => {
            state.isLoading = false
        },
        // Get Category By Id
        [getCategoryById.pending]: (state) => {
            state.isLoading = true
        },
        [getCategoryById.fulfilled]: (state, action) => {
            state.isLoading = false
            const index = state.categories.findIndex((category) => category._id === action.payload.category._id)
            state.categories[index].subCategories = action.payload.list
        },
        [getCategoryById.rejected]: (state) => {
            state.isLoading = false
        },
        // Get My Categories
        [getMyCategories.pending]: (state) => {
            state.isLoading = true
        },
        [getMyCategories.fulfilled]: (state, action) => {
            state.isLoading = false
            state.categories = action.payload
        },
        [getMyCategories.rejected]: (state) => {
            state.isLoading = false
        },
        // Remove Category
        [removeCategory.pending]: (state) => {
            state.isLoading = true
        },
        [removeCategory.fulfilled]: (state, action) => {
            state.isloading = false
            state.categories = state.categories.filter((category) => category._id !== action.payload.category._id)
            state.status = action.payload.message
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
