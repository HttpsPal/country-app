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

// Actions being exported to update the state when dispatched
export const { search } = searchSlice.actions;

// Reducer exported to store
export default searchSlice.reducer;
