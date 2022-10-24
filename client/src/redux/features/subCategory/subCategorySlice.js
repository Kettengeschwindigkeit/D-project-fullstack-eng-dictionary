import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const initialState = {
    isLoading: false,
    status: null,
    subCategories: []
}

// Create SubCategory
export const createSubCategory = createAsyncThunk(
    "subCategory/createSubCategory",
    async ({ categoryId, title }) => {
        try {
            const { data } = await axios.post(`/subCategories/${categoryId}`, { categoryId, title })
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

// Get All SubCategories
export const getAllSubCategories = createAsyncThunk(
    "subCategories/getAllSubCategories",
    async () => {
        try {
            const { data } = await axios.get("/subCategories")
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

// Get SubCategories
export const getSubCategories = createAsyncThunk("subCategories/getSubCategories", async (id) => {
    try {
        const { data } = await axios.get(`categories/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
})

// Remove SubCategory
export const removeSubCategory = createAsyncThunk('/subCategories/removeSubCategory', async (id) => {
    try {
        const { data } = await axios.delete(`/subCategories/${id}`, id)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const subCategorySlice = createSlice({
    name: "subCategory",
    initialState,
    reducers: {},
    extraReducers: {
        // Create SubCategory
        [createSubCategory.pending]: (state) => {
            state.isLoading = true
        },
        [createSubCategory.fulfilled]: (state, action) => {
            state.isLoading = false
            state.subCategories.push(action.payload)
        },
        [createSubCategory.rejected]: (state) => {
            state.isLoading = false
        },
        // Get All SubCategories
        [getAllSubCategories.pending]: (state) => {
            state.isLoading = true
        },
        [getAllSubCategories.fulfilled]: (state, action) => {
            state.isLoading = false
            state.subCategories = action.payload
        },
        [getAllSubCategories.rejected]: (state) => {
            state.isLoading = false
        },
        // Get SubCategories
        [getSubCategories.pending]: (state) => {
            state.isLoading = true
        },
        [getSubCategories.fulfilled]: (state, action) => {
            state.loading = false
            state.subCategories = action.payload.list
            // const index = state.subCategories.findIndex((subCategory) => subCategory._id === action.payload._id)
            // state.subCategories[index] = action.payload
        },
        [getSubCategories.rejected]: (state) => {
            state.isLoading = false
        },
        // Remove SubCategory
        [removeSubCategory.pending]: (state) => {
            state.isLoading = true
            state.status = "Loading..."
        },
        [removeSubCategory.fulfilled]: (state, action) => {
            state.isloading = false
            state.subCategories = state.subCategories.filter((subCategory) => subCategory._id !== action.payload.subCategory._id)
            state.status = action.payload.message
        },
        [removeSubCategory.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export default subCategorySlice.reducer
