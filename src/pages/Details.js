import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Return from "../components/Return";

const Details = () => {
	const { darkMode } = useSelector((state) => state.darkMode);

	return (
		<>
			<div className={darkMode ? "container nightmode" : "container"}>
				<Link to="/">
					<Return />
				</Link>
			</div>
		</>
	);
};

export default Details;
