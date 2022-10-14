import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const initialState = {
    subCategories: [],
    isLoading: false
}

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

export const getSubCategories = createAsyncThunk(
    "subCategory/getSubCategories",
    async (categoryId) => {
        try {
            const { data } = await axios.get(`categories/subCategories/${categoryId}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

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
        // Get SubCategories
        [getSubCategories.pending]: (state) => {
            state.isLoading = true
        },
        [getSubCategories.fulfilled]: (state, action) => {
            state.isLoading = false
            state.subCategories = action.payload
        },
        [getSubCategories.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

export default subCategorySlice.reducer
