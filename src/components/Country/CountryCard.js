import React from "react";
import { useSelector } from "react-redux";

const CountryCard = ({ name, capital, region, population, flag }) => {
	const { darkMode } = useSelector((state) => state.darkMode);

	return (
		<div className={darkMode ? "card nightmode" : "card"}>
			<div className="card__cover">
				<img className="card__img" src={flag} alt={`${name} Flag`} />
			</div>
			<h2 className="card__title">{name}</h2>
			<div className="card__detail">
				<p>
					Population: <span>{population}</span>
				</p>
				<p>
					Region: <span>{region || "N/A"}</span>
				</p>
				<p>
					Capital: <span>{capital || "N/A"}</span>
				</p>
			</div>
		</div>
	);
};

export default CountryCard;
