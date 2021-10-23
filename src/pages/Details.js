import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Return from "../components/Return";
import DetailsCard from "../components/Details/DetailsCard";

const Details = () => {
	const { darkMode } = useSelector((state) => state.darkMode);

	return (
		<>
			<div
				className={
					darkMode ? "details-container nightmode" : "details-container"
				}
			>
				<Link to="/">
					<Return />
				</Link>
				<DetailsCard />
			</div>
		</>
	);
};

export default Details;
