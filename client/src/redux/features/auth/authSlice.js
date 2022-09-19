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
        [registerUser.rejectWithValue]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },
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
        [loginUser.rejectWithValue]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },
        [getMe.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [getMe.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = null
            state.user = action.payload?.user
            state.token = action.payload?.token
        },
        [getMe.rejectWithValue]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
        },
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions

export default authSlice.reducer
