import React, { useState, useEffect } from "react";
import Borders from "./Borders";

const BorderList = ({ country }) => {
	const [borders, setBorders] = useState([]);

	useEffect(() => {
		setBorders(country.borders);
	}, [country.borders]);

	return (
		<>
			{borders ? (
				borders.map((border) => <Borders key={border} border={border} />)
			) : (
				<span className="details__span">N/A</span>
			)}
		</>
	);
};

export default BorderList;
