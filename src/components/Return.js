import React from "react";
import { useSelector } from "react-redux";

const Return = () => {
	const { darkMode } = useSelector((state) => state.darkMode);

	return (
		<div className={darkMode ? "btn-return nightmode" : "btn-return"}>
			<span className="btn-return--icon">&larr;</span>
			<h3 className="btn-return--text">Back</h3>
		</div>
	);
};

export default Return;
