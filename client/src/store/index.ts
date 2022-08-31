import { configureStore } from "@reduxjs/toolkit";
import { itemsApi } from "./items/items.api";

export const store = configureStore({
    reducer: {
        [itemsApi.reducerPath]: itemsApi.reducer
    }
})
