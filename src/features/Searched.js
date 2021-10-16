import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
	searched: "",
};

export const searchSlice = createSlice({
	name: "search",
	initialState: initialStateValue,
	reducers: {
		search: (state, action) => {
			state.searched = action.payload;
		},
	},
});

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
