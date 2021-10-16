import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImSearch } from "react-icons/im";
import { search } from "../../features/Searched";

const SearchBar = () => {
	const { darkMode } = useSelector((state) => state.darkMode);
	const [searching, setSearching] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		const throttleId = setTimeout(() => {
			if (searching) {
				dispatch(search(searching));
			}
		}, 700);

		return () => {
			clearTimeout(throttleId);
		};
	}, [searching, dispatch]);

	return (
		<>
			<button
				className={darkMode ? "btn-search nightmode" : "btn-search"}
				type="submit"
			>
				<ImSearch
					style={{
						fontSize: "1.8rem",
						marginTop: ".5rem",
						marginLeft: "1.5rem",
						color: "inherit",
					}}
				/>
			</button>
			<input
				className={
					darkMode ? "input nightmode input__search" : "input input__search"
				}
				type="search"
				id="search"
				name="search"
				value={searching}
				onChange={(e) => {
					setSearching(e.target.value);
				}}
				placeholder="Search for a country..."
				autoComplete="off"
				required
			/>
		</>
	);
};

export default SearchBar;
