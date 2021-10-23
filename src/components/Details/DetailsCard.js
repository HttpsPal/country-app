import React from "react";
import { useSelector } from "react-redux";
import FlagBox from "./FlagBox";
import RightInfoDetails from "./RightInfoDetails";
import BorderList from "./BorderList";

const DetailsCard = () => {
	const { country } = useSelector((state) => state.country);

	return (
		<div className="details">
			<div className="details__cover">
				<FlagBox image={country.flags.svg} name={country.name.official} />
			</div>
			<div className="details__box">
				<h1 className="details__heading u-margin-top-medium">
					{country.name.official}
				</h1>
				<div className="details__info">
					<div className="details__info--left">
						<p className="details__item">
							Native Name:
							<span className="details__span">{country.name.common}</span>
						</p>
						<p className="details__item">
							Population:
							<span className="details__span">{country.population}</span>
						</p>
						<p className="details__item">
							Region:
							<span className="details__span">{country.region}</span>
						</p>
						<p className="details__item">
							Sub Region:
							<span className="details__span">{country.subregion}</span>
						</p>
						<p className="details__item">
							Capital:
							<span className="details__span">{country.capital}</span>
						</p>
					</div>
					<div className="details__info--right">
						<RightInfoDetails />
					</div>
				</div>
				<div className="details__footer">
					<p className="details__item">Border Countries: </p>
					<div className="border-container">
						<BorderList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsCard;
