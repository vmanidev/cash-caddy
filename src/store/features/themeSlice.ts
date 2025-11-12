import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const isDarkModePreferred = () => {
    try {
        const enableDarkmode = localStorage.getItem("enableDarkmode");
        return enableDarkmode ? JSON.parse(enableDarkmode) : false;
    } catch {
        return false;
    }
}

const getInitialState = () => ({
    darkMode: isDarkModePreferred(),
    preferredMode: isDarkModePreferred() ? "dark" : "light"
});

const themeSlice = createSlice({
    name: "theme",
    initialState: getInitialState(),
    reducers: {
        setDarkMode: (state: any, action: PayloadAction<boolean>) => {
            state = { ...state, darkMode: action.payload };
            return state;
        },
        savePreferredMode: (state: any, action: PayloadAction<{ enableDarkmode: boolean }>) => {
            localStorage.setItem("enableDarkmode", JSON.stringify(action.payload.enableDarkmode));
            state = {
                darkMode: action.payload.enableDarkmode,
                preferredMode: action.payload.enableDarkmode ? "dark" : "light"
            }
            return state;
        }
    }
})

export const { setDarkMode, savePreferredMode } = themeSlice.actions;

export default themeSlice.reducer;