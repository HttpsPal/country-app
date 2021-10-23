import React from "react";
import { useSelector } from "react-redux";

const Borders = ({ border }) => {
	const { darkMode } = useSelector((state) => state.darkMode);
	return (
		<div className={darkMode ? "border nightmode" : "border"}>
			<h3 className="border__header">{border}</h3>
		</div>
	);
};

export default Borders;
