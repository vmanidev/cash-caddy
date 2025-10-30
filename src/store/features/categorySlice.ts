import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    income: [],
    expenses: []
}

const categorySlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {

    }
});

export default categorySlice.actions;