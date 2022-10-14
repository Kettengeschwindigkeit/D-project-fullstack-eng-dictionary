import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../../utils/axios"

const initialState = {
    user: null,
    token: null,
    status: null,
    isLoading: false
}

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async ({ email, password }) => {
        try {
            const { data } = await axios.post("/auth/register", { email, password })
            if (data.token) {
                window.localStorage.setItem("token", data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }) => {
        try {
            const { data } = await axios.post("/auth/login", { email, password })
            if (data.token) {
                window.localStorage.setItem("token", data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const getMe = createAsyncThunk("auth/loginUser", async () => {
    try {
        const { data } = await axios.get("/auth/me")
        return data
    } catch (error) {
        console.log(error)
    }
}
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.status = null
            state.isLoading = false
        }
    },
    extraReducers: {
        // Register user
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },
        // Login User
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },
        // Get Me
        [getMe.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [getMe.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload?.user
            state.token = action.payload?.token
        },
        [getMe.rejected]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions

export default authSlice.reducer
