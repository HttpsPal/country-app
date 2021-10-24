import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
	darkMode: true,
};

export const darkModeSlice = createSlice({
	name: "darkMode",
	initialState: initialStateValue,
	reducers: {
		toggle: (state, action) => {
			state.darkMode = action.payload;
		},
	},
});

export const { toggle } = darkModeSlice.actions;

export default darkModeSlice.reducer;
