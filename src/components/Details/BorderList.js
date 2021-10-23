import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Borders from "./Borders";

const BorderList = () => {
	const { country } = useSelector((state) => state.country);
	const [borders, setBorders] = useState([]);

	useEffect(() => {
		setBorders(country.borders);
	}, [country.borders]);

	return (
		<>
			{borders ? (
				borders.map((border) => <Borders border={border} />)
			) : (
				<span className="details__span">N/A</span>
			)}
		</>
	);
};

export default BorderList;
