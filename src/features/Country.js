import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
	country: {},
};

export const countrySlice = createSlice({
	name: "country",
	initialState: initialStateValue,
	reducers: {
		select: (state, action) => {
			state.country = action.payload;
		},
	},
});

export const { select } = countrySlice.actions;

export default countrySlice.reducer;
