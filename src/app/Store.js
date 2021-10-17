import { configureStore } from "@reduxjs/toolkit";
import { countryAPI } from "../services/CountryAPI";
import darkModeReducer from "../features/DarkMode";
import optionReducer from "../features/Options";
import searchReducer from "../features/Searched";
import countryReducer from "../features/Country";

export default configureStore({
	reducer: {
		darkMode: darkModeReducer,
		option: optionReducer,
		search: searchReducer,
		country: countryReducer,
		[countryAPI.reducerPath]: countryAPI.reducer,
	},
	middleware: (getDefaultMiddle) =>
		getDefaultMiddle().concat(countryAPI.middleware),
});
