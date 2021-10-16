import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
	option: "",
};

export const optionSlice = createSlice({
	name: "option",
	initialState: initialStateValue,
	reducers: {
		filter: (state, { payload }) => {
			// spreading state is no longer necessary
			state.option = payload;
		},
	},
});

// Actions being exported to update the state when dispatched
export const { filter } = optionSlice.actions;

// Reducer exported to store
export default optionSlice.reducer;
