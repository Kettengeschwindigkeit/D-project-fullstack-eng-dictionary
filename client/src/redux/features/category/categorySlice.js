import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const initialState = {
    categories: [],
    loading: false
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

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: {
        [createCategory.pending]: (state) => {
            state.loading = true
        },
        [createCategory.fulfilled]: (state, action) => {
            state.loading = false
            state.categories.push(action.payload)
        },
        [createCategory.rejected]: (state) => {
            state.loading = false
        },
    }
})

export default categorySlice.reducer
