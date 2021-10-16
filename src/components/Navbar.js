import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMoonSharp, IoMoonOutline } from "react-icons/io5";
import { toggle } from "../features/DarkMode";

const Navbar = () => {
	const [theme, setTheme] = useState(true);
	const { darkMode } = useSelector((state) => state.darkMode);

	const dispatch = useDispatch();

	const updateAppTheme = () => {
		setTheme(!theme);
		dispatch(toggle(theme));
	};

	return (
		<nav className={darkMode ? "nav nightmode" : "nav"}>
			<h1 className="nav--logo">Where In The World?</h1>
			<h2
				onClick={updateAppTheme}
				className={darkMode ? "nav--toggle active" : "nav--toggle"}
			>
				<span className="nav--icon">
					{darkMode ? (
						<IoMoonSharp style={{ color: "white" }} />
					) : (
						<IoMoonOutline />
					)}
				</span>
				Dark Mode
			</h2>
		</nav>
	);
};

export default Navbar;
